// models/ContactDetails.js
import mongoose from "mongoose";

const contactDetailsSchema = new mongoose.Schema({
  vendor: { type: String, required: true, unique: true },
  email: String,
  contactNumber: String,
  whatsapp: String,
  instagram: String,
  facebook: String,
  tiktok: String,
  website:String,
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("ContactDetail", contactDetailsSchema);
