import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['email', 'phoneNumber'],
    required: true
  },
  vendor: {
    type: String,
    enum: ['fieryGrills', 'tiffinMom'],
    required: true
  }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;
