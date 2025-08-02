import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  vendor: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  }
}, { timestamps: true });
// je
export default mongoose.model('FAQ', faqSchema);
