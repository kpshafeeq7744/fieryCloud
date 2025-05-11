import mongoose from "mongoose";

const orderParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  vendor: {
    type: String,
    enum: ['fieryGrills', 'tiffinMom'],
    required: true
  }
});

const orderParticipant = mongoose.model('OrderParticipant', orderParticipantSchema);

export default orderParticipant;
