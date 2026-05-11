import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { z } from 'zod';
import { Resend } from 'resend';
import SubscriptionPayment from '../models/SubscriptionPayment.js';

const router = express.Router();

// Validate Razorpay keys are present
const getRazorpayInstance = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error('Razorpay keys not configured');
  }
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

// Validation schema for creating an order
const orderSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone number is required"),
  planName: z.string().min(1, "Plan name is required"),
  amount: z.number().positive("Amount must be positive"),
});

// Create Order Route
router.post('/create-order', async (req, res) => {
  try {
    const data = orderSchema.parse(req.body);
    
    const razorpay = getRazorpayInstance();
    
    // Razorpay amount is in paise (smallest currency unit), so multiply by 100
    const options = {
      amount: data.amount * 100,
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };
    
    const order = await razorpay.orders.create(options);  //reeturn orderid ,amt and currency
    
    // Pre-create the subscription record with Pending status
    await SubscriptionPayment.create({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      selectedPlan: data.planName,
      amount: data.amount,
      razorpayOrderId: order.id,
      paymentStatus: 'Pending'
    });

    res.status(200).json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency
      }
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: err.errors });
    }
    console.error('Create Order Error:', err);
    res.status(500).json({ success: false, error: 'Failed to create order' });
  }
});

// Verify Payment Route
router.post('/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, error: 'Missing payment details' });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      throw new Error('Razorpay secret not configured');
    }

    // Generate expected signature
    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ success: false, error: 'Invalid payment signature' });
    }

    // Find and update subscription in DB
    const subscription = await SubscriptionPayment.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      { 
        razorpayPaymentId: razorpay_payment_id,
        paymentStatus: 'Completed'
      },
      { new: true }
    );

    if (!subscription) {
      return res.status(404).json({ success: false, error: 'Order not found in database' });
    }

    // Send Emails
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'shivamkishore009@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Subscription Received</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 40%; color: #475569;">Name</td><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${subscription.fullName}</td></tr>
          <tr><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 40%; color: #475569;">Email</td><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${subscription.email}</td></tr>
          <tr><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 40%; color: #475569;">Phone</td><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${subscription.phone}</td></tr>
          <tr><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 40%; color: #475569;">Plan</td><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${subscription.selectedPlan}</td></tr>
          <tr><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 40%; color: #475569;">Amount</td><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">₹${subscription.amount}</td></tr>
          <tr><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 40%; color: #475569;">Payment ID</td><td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${subscription.razorpayPaymentId}</td></tr>
        </table>
      </div>
    `;

    // Send to Admin
    resend.emails.send({
      from: `"EdTraining System" <${senderEmail}>`,
      to: adminEmail,
      subject: `New Subscription: ${subscription.selectedPlan}`,
      html: htmlContent,
    }).catch(console.error);

    // Send to User
    if (subscription.email) {
      resend.emails.send({
        from: `"EdTraining Team" <${senderEmail}>`,
        to: subscription.email,
        subject: `Payment Successful: Welcome to EdTraining!`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; text-align: center;">
            <h2 style="color: #16a34a;">Payment Successful!</h2>
            <p>Hi ${subscription.fullName},</p>
            <p>Thank you for subscribing to the <strong>${subscription.selectedPlan}</strong>.</p>
            <p>Your payment of ₹${subscription.amount} has been received successfully (Payment ID: ${subscription.razorpayPaymentId}).</p>
            <p>Our team will contact you shortly to get you started.</p>
            <p style="margin-top: 30px; font-size: 14px; color: #64748b;">Need help? Contact us at help@theedtraining.com</p>
          </div>
        `
      }).catch(console.error);
    }

    res.status(200).json({ success: true, message: 'Payment verified successfully' });
  } catch (err) {
    console.error('Verify Payment Error:', err);
    res.status(500).json({ success: false, error: 'Payment verification failed' });
  }
});

// Webhook Handler
router.post('/webhook', express.json({type: 'application/json'}), async (req, res) => {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    if (!secret) {
      console.warn('Webhook secret not configured, ignoring webhook');
      return res.status(200).send('OK');
    }

    const signature = req.headers['x-razorpay-signature'];
    
    if (!signature) {
      return res.status(400).send('Signature missing');
    }

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(JSON.stringify(req.body))
      .digest('hex');

    if (expectedSignature !== signature) {
      return res.status(400).send('Invalid webhook signature');
    }

    const event = req.body;
    
    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      
      // Update DB to ensure it's marked as completed
      // (This acts as a fallback if the frontend verification failed/dropped)
      await SubscriptionPayment.findOneAndUpdate(
        { razorpayOrderId: orderId, paymentStatus: 'Pending' }, // Only update if still pending
        { 
          razorpayPaymentId: payment.id,
          paymentStatus: 'Completed'
        }
      );
    }

    res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
