import mongoose from "mongoose";
import dotenv from "dotenv";
import OfferBanner from "./models/OfferBanner.js"; // adjust path if needed

dotenv.config();

const seedOfferBanners = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected");

    // Optional: Clear existing offer banners
    await OfferBanner.deleteMany();

    const banners = [
      {
        image: "https://img.freepik.com/free-psd/landscape-food-banner-template-pizza-sale_505751-3150.jpg",
        title: "Pizza Carnival – Flat 40% OFF",
        description: "Delicious handmade pizzas now 40% off. Order now!",
        vendor: "FG"
      },
      {
        image: "https://img.freepik.com/free-psd/landscape-food-banner-template-burger-offer_505751-3147.jpg",
        title: "Double Patty Deal – Buy 1 Get 1 Free",
        description: "Satisfy your burger cravings with a juicy offer.",
        vendor: "FG"
      },
      {
        image: "https://img.freepik.com/free-psd/landscape-food-banner-template-combo-meal_505751-3149.jpg",
        title: "Combo Meal Deal – Only ₹199",
        description: "Get a full combo meal with drinks and dessert at a killer price.",
        vendor: "FG"
      },
      {
        image: "https://img.freepik.com/free-psd/landscape-food-banner-template-healthy-salad_505751-3151.jpg",
        title: "Healthy Bites – 25% Off on Salads",
        description: "Stay fit and full with our power-packed salad menu.",
        vendor: "FG"
      },
      {
        image: "https://img.freepik.com/free-psd/landscape-food-banner-template-dessert-offer_505751-3145.jpg",
        title: "Sweet Treats – Free Dessert Over ₹299",
        description: "Order more and treat yourself to something sweet.",
        vendor: "FG"
      },
      {
        image: "https://img.freepik.com/free-psd/landscape-food-banner-template-cold-drinks_505751-3152.jpg",
        title: "Cool Drinks – Summer Sale 30% OFF",
        description: "Beat the heat with icy beverages at a discount.",
        vendor: "FG"
      },
      {
        image: "https://img.freepik.com/free-psd/landscape-food-banner-template-snacks-festival_505751-3153.jpg",
        title: "Snack Festival – 2 for ₹99",
        description: "Grab your favorite snacks in an exciting combo deal.",
        vendor: "FG"
      },
      {
        image: "https://img.freepik.com/free-psd/landscape-food-banner-template-biryani-love_505751-3148.jpg",
        title: "Biryani Bonanza – ₹100 OFF",
        description: "Savor the rich taste of biryani with this amazing offer.",
        vendor: "FG"
      }
    ];
    

    await OfferBanner.insertMany(banners);
    console.log("Offer banners seeded successfully.");
    process.exit();
  } catch (error) {
    console.error("Error seeding offer banners:", error);
    process.exit(1);
  }
};

seedOfferBanners();
