import mongoose from "mongoose";

const offerBannerSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true // Store image URL or upload path
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  vendor: {
    type: String, // or ObjectId if you want to reference a Vendor model
    required: true
  }
}, {
  timestamps: true // auto adds createdAt and updatedAt
});

const OfferBanner = mongoose.model('OfferBanner', offerBannerSchema);
export default OfferBanner
