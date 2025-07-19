import cloudinary from "../config/cloudinary.js";
import AddsOnFood from "../models/AddsOnFood.js";
import MealPlan from "../models/MealPlan.js";
import { getCategoryService, getSizesService } from "../services/planService.js";

// category
export const getCategoryController = async (req, res) => {
    return res.json(await getCategoryService());
};

// plan
export const getSizesController = async (req, res) => {
    const { category } = req.params;
    return res.json(await getSizesService(category));
};

// getPlans depends on :vendor (each Clickbye page, Admin)
export const getPlansController = async (req, res) => {
    const { vendor } = req.params;
    const result = await MealPlan.find({ vendor });
    res.status(200).json(result);
};
// getPlans depends on :vendor,planId ( Admin)
export const getIndividualPlanController = async (req, res) => {
    const { _id } = req.params;
    const result = await MealPlan.findById(_id);
    res.status(200).json(result);
};

// editIndividual plan (in admin)
export const updateIndividualPlanController = async (req, res) => {
    console.log("hello")
    const { _id } = req.params;
    const data=req.body
    console.log(data)
    console.log("hello")
    const result = await MealPlan.findByIdAndUpdate(_id,data,{new:true});
    console.log(result);
    res.status(200).json(result);
};



//------------------------------- add on Plans--------------------------------

// create add ons--------------------------------
export const createAddOnsController = async (req, res) => {
    try {
      console.log("🌐 Cloudinary config:");
      console.log("cloud_name:", process.env.CLOUDINARY_CLOUD_NAME);
      console.log("api_key:", process.env.CLOUDINARY_API_KEY);
      console.log("api_secret:", process.env.CLOUDINARY_API_SECRET ? "***hidden***" : "❌ Not Set");
  
      const { vendor } = req.params;
  
      // Check file
      if (!req.file || !req.file.buffer) {
        console.error("❌ No file uploaded or file.buffer missing");
        return res.status(400).json({ message: "No image file provided" });
      }
  
      // Upload to Cloudinary
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "fierygrillss/addOns" },
          (error, result) => {
            if (error) {
              console.error("❌ Cloudinary upload error:", error);
              reject(error);
            } else {
              console.log("✅ Cloudinary upload success:", result.secure_url);
              resolve(result);
            }
          }
        ).end(req.file.buffer);
      });
  
      // Save to DB
      const newAddOn = await AddsOnFood.create({
        ...req.body,
        vendor,
        img: result?.secure_url,
      });
  
      res.status(200).json(newAddOn);
    } catch (err) {
      console.error("🔥 Controller error:", err);
      res.status(500).json({ message: err.message || "Server Error" });
    }
  };

// Read add ons--------------------------------
export const getAddOnsController = async (req, res) => {
    const { vendor } = req.params;
    const result = await AddsOnFood.find({ vendor });
    res.status(200).json(result);
};

// delete add ons--------------------------------
export const deleteAddOnsController = async (req, res) => {
    const { vendor } = req.params;
    const result = await AddsOnFood.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
};

// update add ons--------------------------------
export const updateAddOnsController = async (req, res) => {
    try {
      const { vendor, id } = req.params;
      const updateData = { ...req.body };
  
      // 🔍 Step 1: Find existing record
      const existingAddOn = await AddsOnFood.findById(id);
      if (!existingAddOn) {
        return res.status(404).json({ message: "Add-on not found" });
      }
  
      // 📸 Step 2: If new image, delete old one & upload new
      if (req.file && req.file.buffer) {
        // ✅ Delete old image if exists
        if (existingAddOn.img) {
          const parts = existingAddOn.img.split("/");
          const filenameWithExtension = parts[parts.length - 1];
          const publicId = `fierygrillss/addOns/${filenameWithExtension.split(".")[0]}`;
  
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
            { folder: "fierygrillss/addOns" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(req.file.buffer);
        });
  
        updateData.img = cloudinaryResult.secure_url;
      }
  
      // ✅ Update database
      const updated = await AddsOnFood.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );
  
      res.status(200).json(updated);
    } catch (err) {
      console.error("❌ Update error:", err);
      res.status(500).json({ message: err?.message });
    }
  };