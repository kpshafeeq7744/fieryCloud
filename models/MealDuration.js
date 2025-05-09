import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Feature Schema
const FeatureSchema = new Schema({
  icon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

// Meal Plan Schema
const MealDurationSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  mealType: {
    type: String,
    required: true,
    enum: ['vegetarian', 'non-vegetarian', 'mixed']
  },
  size: {
    type: String,
    required: true,
    enum: ['single', 'couple', 'family']
  },
  schedule: {
    type: String,
    required: true,
    enum: ['weekly', 'bi-weekly', 'monthly']
  },
  price: {
    type: String,
    required: true
  },
  priceDetail: {
    type: String
  },
  features: [FeatureSchema],
  
},{timestamps:true});

// Create the model
const MealDuration = mongoose.model('MealDuration', MealDurationSchema);

export default MealDuration