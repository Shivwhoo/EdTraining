import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Contact', 'DemoBooking', 'HomeSchoolConsult'],
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'processed'],
    default: 'new'
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Submission', submissionSchema);
