import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import apiRoutes from './routes/api.js';
import paymentRoutes from './routes/payment.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting: max 5 submissions per IP per hour
const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: 'Too many requests from this IP, please try again after an hour',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiter to all API routes
app.use('/api', apiLimiter);

// Routes
app.use('/api', apiRoutes);
app.use('/api/payment', paymentRoutes);

// Health check
app.get('/health', (req, res) => res.status(200).send('OK'));

// DB connection and server start
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    // Don't kill the server in case of no DB locally during dev, just log
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (without DB)`);
    });
  });
