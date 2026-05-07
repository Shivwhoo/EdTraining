import express from 'express';
import { z } from 'zod';
import { Resend } from 'resend';
import Submission from '../models/Submission.js';

const router = express.Router();

// Initialize Resend
// Note: Requires process.env.RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailNotification = async (type, data) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'shivamkeshri009@gmail.com';
    // Use onboarding@resend.dev as default since no verified domain exists yet
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    
    const formatKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    
    const textContent = `New submission received for ${type}:\n\n` + 
      Object.entries(data).map(([key, value]) => `${formatKey(key)}: ${value}`).join('\n');
      
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0;">
        <div style="background-color: #2563eb; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">EdTraining</h1>
          <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px;">New Platform Submission</p>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; font-size: 20px;">${type} Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            ${Object.entries(data).map(([key, value]) => `
              <tr>
                <td style="padding: 14px 12px; border-bottom: 1px solid #f1f5f9; font-weight: 600; width: 35%; color: #64748b; font-size: 14px; text-transform: capitalize;">${formatKey(key)}</td>
                <td style="padding: 14px 12px; border-bottom: 1px solid #f1f5f9; color: #334155; font-size: 15px;">${value}</td>
              </tr>
            `).join('')}
          </table>
          <div style="margin-top: 32px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.5;">Please review this submission and reach out to the contact provided above as soon as possible.</p>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">This is an automated notification from the EdTraining Platform.</p>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8;">&copy; ${new Date().getFullYear()} EdTraining. All rights reserved.</p>
        </div>
      </div>
    `;

    // 1. Send notification to admin
    const adminResponse = await resend.emails.send({
      from: `"EdTraining System" <${senderEmail}>`,
      to: adminEmail,
      subject: `New Submission: ${type}`,
      text: textContent,
      html: htmlContent,
    });
    
    if (adminResponse.error) {
      console.error("Admin Email Error:", adminResponse.error);
    } else {
      console.log("Admin Email Sent:", adminResponse.data);
    }
    
    // 2. Send confirmation to user
    // NOTE: This will FAIL with Resend if senderEmail is 'onboarding@resend.dev' 
    // unless data.email is exactly the same as the registered Resend account email.
    // The error will be caught and logged below.
    if (data.email) {
      const userHtmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0;">
          <div style="background-color: #2563eb; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">EdTraining</h1>
          </div>
          <div style="padding: 32px; text-align: center;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 22px;">Thank You!</h2>
            <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-top: 16px;">We have successfully received your request for <strong>${type}</strong>.</p>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">Our team is reviewing your submission and will get back to you shortly.</p>
            <div style="margin-top: 32px;">
              <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; display: inline-block;">Return to Website</a>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">&copy; ${new Date().getFullYear()} EdTraining. All rights reserved.</p>
          </div>
        </div>
      `;

      const userResponse = await resend.emails.send({
        from: `"EdTraining Team" <${senderEmail}>`,
        to: data.email,
        subject: `Confirmation: We received your ${type} request`,
        text: `Hello,\n\nWe have received your request and will get back to you shortly.\n\nBest,\nEdTraining Team`,
        html: userHtmlContent
      });

      if (userResponse.error) {
        console.error("User Confirmation Email Error:", userResponse.error);
      } else {
        console.log("User Confirmation Email Sent:", userResponse.data);
      }
    }
  } catch (error) {
    console.error('Email sending failed:', error);
  }
};

// Validation Schemas
const contactSchema = z.object({
  fullName: z.string().min(1),
  phoneNumber: z.string().min(10),
  email: z.string().email(),
  message: z.string().min(1),
});

const demoBookingSchema = z.object({
  studentName: z.string().optional(),
  parentGuardianName: z.string().optional(),
  studentContactNumber: z.string().min(10),
  parentContactNumber: z.string().optional(),
  email: z.string().email(),
  subjectCategory: z.string(),
  message: z.string().min(1),
});

const homeschoolConsultSchema = z.object({
  fullName: z.string().min(1),
  contactNumber: z.string().min(10),
  email: z.string().email(),
  message: z.string().min(1),
});

// Routes
router.post('/contact', async (req, res) => {
  try {
    const data = contactSchema.parse(req.body);
    await Submission.create({ type: 'Contact', data });
    await sendEmailNotification('General Inquiry', data);
    res.status(200).json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/demo-booking', async (req, res) => {
  try {
    const data = demoBookingSchema.parse(req.body);
    await Submission.create({ type: 'DemoBooking', data });
    await sendEmailNotification('Demo Booking', data);
    res.status(200).json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/homeschool-consult', async (req, res) => {
  try {
    const data = homeschoolConsultSchema.parse(req.body);
    await Submission.create({ type: 'HomeSchoolConsult', data });
    await sendEmailNotification('Home Schooling Consultation', data);
    res.status(200).json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
