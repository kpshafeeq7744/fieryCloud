import mongoose from "mongoose";
import dotenv from "dotenv";
import Faq from "./models/Faq.js";

dotenv.config();

const seedFaqs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected for FAQ seeding");

    // Optional: Remove existing FAQs
    await Faq.deleteMany();

    const faqs = [
      {
        question: 'Can I skip a delivery?',
        answer: 'Yes, you can skip a delivery by notifying us at least 48 hours in advance. Simply log into your account or call our customer service to arrange this.',
        vendor: 'FG'
      },
      {
        question: 'How do you handle food allergies?',
        answer: 'We take food allergies very seriously. You can specify any allergies or dietary restrictions when you sign up, and our chefs will ensure your meals are prepared accordingly. However, all meals are prepared in the same kitchen, so cross-contamination is possible.',
        vendor: 'FG'
      },
      {
        question: 'What areas do you deliver to?',
        answer: 'We currently deliver to all major areas within a 15-mile radius of our kitchen. You can check if your location is covered by entering your zip code on our delivery page.',
        vendor: 'FG'
      },
      {
        question: 'How do I heat the food?',
        answer: 'Our meals come in microwave-safe containers. Simply heat for 2-3 minutes or transfer to a pot and heat on the stove. Detailed heating instructions are included with each delivery.',
        vendor: 'FG'
      }
    ];

    await Faq.insertMany(faqs);
    console.log("FAQs seeded successfully.");
    process.exit();
  } catch (error) {
    console.error("Error seeding FAQs:", error);
    process.exit(1);
  }
};
// je
seedFaqs();
