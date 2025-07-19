import mongoose from 'mongoose';

const mealPlanSchema = new mongoose.Schema({
  vendor: {
    type: String,
    required: true,
  },
  mealType: {
    type: String,
    enum: ['veg', 'non-veg', 'mixed'],
    required: true,
  },
  planType: {
    type: String,
    required: true, // e.g. 'Couple Plan', 'Family Plan', 'Single Plan'
  },
  price: {
    type: Number,
    required: true,
  },
  pricePer: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true, // e.g. 'Delicious vegetarian meals designed for two'
  },
  description: {
    type: [String], // array of strings like features or included items
    required: true,
  },
}, {
  timestamps: true
});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);
export default MealPlan;
