import mongoose from 'mongoose';
const { Schema } = mongoose;

const DishesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  vendor:{
    type:String,
    required:true,
    // enum:['fieryGrills','tiffinMom']
  },
  category: {
    type: String,
    required: true,
    enum: ['non-vegetarian','vegetarian', 'salad'],
    default: 'non-vegetarian'
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
},{timestamps:true});

const Dishes = mongoose.model('Dishe', DishesSchema);

export default Dishes ;