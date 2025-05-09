import mongoose from 'mongoose';

import { config } from 'dotenv';
import Location from './models/Locations.js';
config()
 // Assuming your model file is 'Location.js'

// The updated locations data
const updatedLocations = [
  { name: "Toronto", coords: [-79.3832, 43.6532], vendor: "fieryGrills" },
  { name: "North York", coords: [-79.4833, 43.7548], vendor: "fieryGrills" },
  { name: "Vaughan", coords: [-79.5105, 43.8373], vendor: "fieryGrills" },
  { name: "Richmond Hill", coords: [-79.4434, 43.8775], vendor: "fieryGrills" },
  { name: "Markham", coords: [-79.3369, 43.8561], vendor: "fieryGrills" },
  { name: "East York", coords: [-79.3299, 43.7023], vendor: "fieryGrills" },
  { name: "Scarborough", coords: [-79.1627, 43.7735], vendor: "fieryGrills" },
  { name: "Pickering", coords: [-79.0752, 43.8488], vendor: "fieryGrills" },
  { name: "Ajax", coords: [-79.0205, 43.8507], vendor: "fieryGrills" },
  { name: "Oshawa", coords: [-78.8647, 43.8974], vendor: "fieryGrills" },
  { name: "Mississauga", coords: [-79.6441, 43.589], vendor: "fieryGrills" },
  { name: "Brampton", coords: [-79.791, 43.7315], vendor: "fieryGrills" },
  { name: "Milton", coords: [-79.8707, 43.5183], vendor: "fieryGrills" },
  { name: "Oakville", coords: [-79.6877, 43.4675], vendor: "fieryGrills" },
  { name: "Guelph", coords: [-80.2508, 43.5448], vendor: "fieryGrills" },
  { name: "Kitchener", coords: [-80.4776, 43.4516], vendor: "fieryGrills" },
  { name: "Waterloo", coords: [-80.5164, 43.4603], vendor: "fieryGrills" },
  { name: "Cambridge", coords: [-80.332, 43.3616], vendor: "fieryGrills" },
  { name: "Brantford", coords: [-80.2831, 43.1926], vendor: "fieryGrills" },
];
const MONGODB_URI = process.env.MONGO_URI 
// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(async() => {
    console.log('Connected to MongoDB');
   await Location.deleteMany({});
    // Insert multiple locations into the database
    Location.insertMany(updatedLocations)
      .then((docs) => {
        console.log('Locations inserted:', docs);
      })
      .catch((err) => {
        console.error('Error inserting locations:', err);
      })
      .finally(() => {
        mongoose.disconnect(); // Disconnect after inserting
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
