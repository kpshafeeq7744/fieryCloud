import cloudinary from "../config/cloudinary.js";
import OfferBanner from "../models/OfferBanner.js";

export const createOfferBanner = async (req, res) => {
    try {
        // Check file
        if (!req.file || !req.file.buffer) {
            console.error("❌ No file uploaded or file.buffer missing");
            return res.status(400).json({ message: "No image file provided" });
        }

        // Upload to Cloudinary
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({ folder: "fierygrillss/offerBanner" }, (error, result) => {
                    if (error) {
                        console.error("❌ Cloudinary upload error:", error);
                        reject(error);
                    } else {
                        console.log("✅ Cloudinary upload success:", result.secure_url);
                        resolve(result);
                    }
                })
                .end(req.file.buffer);
        });

        // Save to DB
        const offerBanner = await OfferBanner.create({
            ...req.body,
            vendor: req.params?.vendor,
            image: result?.secure_url,
        });
        res.status(200).json(offerBanner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOfferBanner = async (req, res) => {
    const { vendor } = req.params;
    try {
        const offerBanner = await OfferBanner.find({ vendor });
        res.status(200).json(offerBanner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOfferBanner = async (req, res) => {
    const { id } = req.params;
    const updateData = { ...req.body };
    try {
        // 🔍 Step 1: Find existing record
        const existingOfferBanner = await OfferBanner.findById(id);
        if (!existingOfferBanner) {
            return res.status(404).json({ message: "offer not found" });
        }

        // 📸 Step 2: If new image, delete old one & upload new
      if (req.file && req.file.buffer) {
        // ✅ Delete old image if exists
        if (existingOfferBanner.image) {
          const parts = existingOfferBanner.image.split("/");
          const filenameWithExtension = parts[parts.length - 1];
          const publicId = `fierygrillss/offerBanner/${filenameWithExtension.split(".")[0]}`;
  
          try {
            await cloudinary.uploader.destroy(publicId);
            console.log("🗑️ Old image deleted:", publicId);
          } catch (delErr) {
            console.warn("⚠️ Could not delete old image:", delErr.message);
          }
        }
  
        // ✅ Upload new image
        const cloudinaryResult = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { folder: "fierygrillss/offerBanner" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(req.file.buffer);
        });
  
        updateData.image = cloudinaryResult.secure_url;
      }
  
      // ✅ Update database
      const updated = await OfferBanner.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteOfferBanner = async (req, res) => {
    const { id } = req.params;
    try {
        const offerBanner = await OfferBanner.findByIdAndDelete(id);
        res.status(200).json(offerBanner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
