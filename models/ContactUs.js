import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
  vendor:{type:String,required:true}
}, { timestamps: true });

const ContactUs = mongoose.model('ContactUs', contactUsSchema);

export default ContactUs;
