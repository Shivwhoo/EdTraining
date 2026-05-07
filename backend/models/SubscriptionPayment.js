import mongoose from 'mongoose';

const subscriptionPaymentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  selectedPlan: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  razorpayOrderId: {
    type: String,
    required: true,
    unique: true,
  },
  razorpayPaymentId: {
    type: String,
    sparse: true, // Only exists after successful payment
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending',
  },
}, { timestamps: true });

const SubscriptionPayment = mongoose.model('SubscriptionPayment', subscriptionPaymentSchema);

export default SubscriptionPayment;
