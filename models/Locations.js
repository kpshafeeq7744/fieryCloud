import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },  // Unique for location name
  coords: { type: [Number], required: true },  // Coordinates
  vendor: { 
    type: String, 
    required: true, 
    enum: ['fieryGrills', 'tiffinMom'], // Enum for vendor
  },
});

const Location = mongoose.model('Location', locationSchema);

export default Location;
