import mongoose from 'mongoose';
import AddsOnFood from './models/AddsOnFood.js';
import seedAddsOnFoods from './constants/seedAddsOnFoods.js';

// Replace with your actual MongoDB connection string
const MONGODB_URI = 'mongodb+srv://shafeeq:sneak@cluster0.sq01t.mongodb.net/cloudKitchen';

async function seedDB() {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log('MongoDB connected...');

    // Optional: Clean the collection before seeding
    await AddsOnFood.deleteMany({});
    console.log('Existing meal plans removed.');

    // Insert seed data
    await AddsOnFood.insertMany(seedAddsOnFoods);
    console.log('Seed data inserted successfully.');

  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
  }
}

seedDB();
