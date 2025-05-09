// models/MealCategory.js
import mongoose from 'mongoose';

const mealCategorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  bgColor: { type: String, required: true },
  iconBgColor: { type: String, required: true },
});

const MealCategory = mongoose.model('MealCategory', mealCategorySchema);
export default MealCategory;
