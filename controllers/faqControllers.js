import Faq from "../models/Faq.js";

// Create FAQ for a vendor
export const createFaq = async (req, res) => {
  const { vendor } = req.params;
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ message: "Question and answer are required." });
  }

  try {
    const faq = new Faq({ question, answer, vendor });
    const savedFaq = await faq.save();
    res.status(201).json(savedFaq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all FAQs for a vendor
export const getFaq = async (req, res) => {
    const { vendor } = req.params;
    try {
      const faqs = await Faq.find({ vendor }).sort({ createdAt: -1 });
      res.status(200).json(faqs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Update a specific FAQ by ID
export const updateFaq = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedFaq = await Faq.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFaq) return res.status(404).json({ message: "FAQ not found" });
    res.status(200).json(updatedFaq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a specific FAQ by ID
export const deleteFaq = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFaq = await Faq.findByIdAndDelete(id);
    if (!deletedFaq) return res.status(404).json({ message: "FAQ not found" });
    res.status(200).json({ message: "FAQ deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
