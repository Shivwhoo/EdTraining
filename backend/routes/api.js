import express from 'express';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import Submission from '../models/Submission.js';

const router = express.Router();

// Email Transporter (mocked with ethereal for testing, or use real SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmailNotification = async (type, data) => {
  try {
    const adminEmail = process.env.SMTP_USER || 'shivamkeshri009@gmail.com';
    
    const formatKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    
    const textContent = `New submission received for ${type}:\n\n` + 
      Object.entries(data).map(([key, value]) => `${formatKey(key)}: ${value}`).join('\n');
      
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Submission: ${type}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          ${Object.entries(data).map(([key, value]) => `
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 40%; color: #475569;">${formatKey(key)}</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${value}</td>
            </tr>
          `).join('')}
        </table>
        <p style="margin-top: 30px; font-size: 12px; color: #94a3b8;">This is an automated message from the EdTraining Platform.</p>
      </div>
    `;

    const mailOptions = {
      from: `"EdTraining System" <${adminEmail}>`,
      to: adminEmail,
      subject: `New Submission: ${type}`,
      text: textContent,
      html: htmlContent,
    };
    await transporter.sendMail(mailOptions);
    
    // Send confirmation to user
    if (data.email) {
      await transporter.sendMail({
        from: `"EdTraining Team" <${adminEmail}>`,
        to: data.email,
        subject: `Confirmation: We received your ${type} request`,
        text: `Hello,\n\nWe have received your request and will get back to you shortly.\n\nBest,\nEdTraining Team`,
      });
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
