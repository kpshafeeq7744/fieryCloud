import mongoose from 'mongoose';

const AddsOnFoodSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: String, 
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    enum: ['FG'],
    required: true,
  },
});
export default mongoose.model('AddsOnFood', AddsOnFoodSchema);
