import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define the Menu Item Schema
const WeeklyMenuSchema = new Schema({
  day: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  mainDish: {
    type: String,
    required: true
  },
  sides: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['vegetarian', 'non-vegetarian', 'mixed']
  },
  vendor: {
    type: String,
    required: true,
    enum: ['fieryGrills', 'tiffinMom']
  }
},{timestamps:true});

// Create a compound index to ensure day is unique per vendor with menuType
WeeklyMenuSchema.index({ day: 1, vendor: 1, menuType: 1 }, { unique: true });

// Create the Menu model
const WeeklyMenu = mongoose.model('WeeklyMenu', WeeklyMenuSchema);
export default WeeklyMenu