// // seeds/menuSeeds.js
// import mongoose from 'mongoose';
// import WeeklyMenu from './models/WeeklyMenu.js';

// import { config } from 'dotenv';
// config()

// // Define the MongoDB connection string (ideally from environment variables)
// const MONGODB_URI = process.env.MONGO_URI ;

// // Connect to MongoDB
// mongoose.connect(MONGODB_URI).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
// });


// // Define seed data
// const vegWeeklyMenu = [
//     {
//         day: "Monday",
//         mainDish: "Paneer Tikka Masala",
//         sides: ["Tandoori Roti", "Cucumber Salad", "Mint Chutney"],
//         image: "/assets/monday.png",
//         id: 1,
//     },
//     {
//         day: "Tuesday",
//         mainDish: "Chana Masala",
//         sides: ["Bhatura", "Onion Rings", "Pickle"],
//         image: "/assets/tuesday.png",
//         id: 2,
//     },
//     {
//         day: "Wednesday",
//         mainDish: "Aloo Baingan",
//         sides: ["Chapati", "Boondi Raita", "Papad"],
//         image: "/assets/wedsday.png",
//         id: 3,
//     },
//     {
//         day: "Thursday",
//         mainDish: "Veg Pulao",
//         sides: ["Mix Veg Curry", "Raita", "Salad"],
//         image: "/assets/thursday.png",
//         id: 4,
//     },
//     {
//         day: "Friday",
//         mainDish: "Palak Paneer",
//         sides: ["Jeera Rice", "Naan", "Lassi"],
//         image: "/assets/friday.png",
//         id: 5,
//     },
//     {
//         day: "Saturday",
//         mainDish: "Kadhi Pakora",
//         sides: ["Rice", "Papad", "Pickle"],
//         image: "/assets/sat.png",
//         id: 6,
//     },
// ];

// const nonVegWeeklyMenu = [
//     {
//         day: "Monday",
//         mainDish: "Chicken Curry",
//         sides: ["Rice", "Roti", "Onion Salad"],
//         image: "/assets/monday-nonveg.png",
//         id: 1,
//     },
//     {
//         day: "Tuesday",
//         mainDish: "Mutton Rogan Josh",
//         sides: ["Naan", "Cucumber Raita", "Lemon"],
//         image: "/assets/tuesday-nonveg.png",
//         id: 2,
//     },
//     {
//         day: "Wednesday",
//         mainDish: "Egg Curry",
//         sides: ["Paratha", "Tomato Chutney", "Onion Rings"],
//         image: "/assets/wednesday-nonveg.png",
//         id: 3,
//     },
//     {
//         day: "Thursday",
//         mainDish: "Fish Fry",
//         sides: ["Lemon Rice", "Cabbage Slaw", "Green Chutney"],
//         image: "/assets/thursday-nonveg.png",
//         id: 4,
//     },
//     {
//         day: "Friday",
//         mainDish: "Butter Chicken",
//         sides: ["Jeera Rice", "Garlic Naan", "Salad"],
//         image: "/assets/friday-nonveg.png",
//         id: 5,
//     },
//     {
//         day: "Saturday",
//         mainDish: "Keema Matar",
//         sides: ["Lachha Paratha", "Pickle", "Curd"],
//         image: "/assets/saturday-nonveg.png",
//         id: 6,
//     },
// ];

// const mixedWeeklyMenu = [
//     {
//         day: "Monday",
//         mainDish: "Vegetable Biryani",
//         sides: ["Raita", "Papad", "Pickle"],
//         image: "/assets/monday-mixed.png",
//         id: 1,
//     },
//     {
//         day: "Tuesday",
//         mainDish: "Chicken Biryani",
//         sides: ["Mirchi Ka Salan", "Onion Raita", "Boiled Egg"],
//         image: "/assets/tuesday-mixed.png",
//         id: 2,
//     },
//     {
//         day: "Wednesday",
//         mainDish: "Dal Makhani",
//         sides: ["Butter Naan", "Salad", "Lassi"],
//         image: "/assets/wednesday-mixed.png",
//         id: 3,
//     },
//     {
//         day: "Thursday",
//         mainDish: "Grilled Fish",
//         sides: ["Steamed Veggies", "Lemon Rice", "Mint Sauce"],
//         image: "/assets/thursday-mixed.png",
//         id: 4,
//     },
//     {
//         day: "Friday",
//         mainDish: "Shahi Paneer",
//         sides: ["Tandoori Roti", "Jeera Rice", "Kachumber"],
//         image: "/assets/friday-mixed.png",
//         id: 5,
//     },
//     {
//         day: "Saturday",
//         mainDish: "Mutton Biryani",
//         sides: ["Onion Raita", "Pickle", "Fried Papad"],
//         image: "/assets/saturday-mixed.png",
//         id: 6,
//     },
// ];

// // Add menuType and vendorName to all items
// const vegMenu = vegWeeklyMenu.map(item => ({
//     ...item,
//     category: 'vegetarian',
//     vendor: 'fieryGrills'
// }));

// const nonVegMenu = nonVegWeeklyMenu.map(item => ({
//     ...item,
//     category: 'non-vegetarian',
//     vendor: 'fieryGrills'
// }));

// const mixedMenu = mixedWeeklyMenu.map(item => ({
//     ...item,
//     category: 'mixed',
//     vendor: 'fieryGrills'
// }));

// // Combine all menu items into one array
// const allMenuItems = [...vegMenu, ...nonVegMenu, ...mixedMenu];

// // Function to seed the database
// async function seedDatabase() {
//     try {
//         // Clear existing data
//         await WeeklyMenu.deleteMany({});
//         console.log('Cleared existing menu items');
        
//         // Insert all menu items
//         const result = await WeeklyMenu.insertMany(allMenuItems);
//         console.log(`Successfully seeded ${result.length} menu items`);
        
//         // Verification: Count items by menu type
//         const vegCount = await WeeklyMenu.countDocuments({ menuType: 'vegetarian' });
//         const nonVegCount = await WeeklyMenu.countDocuments({ menuType: 'nonVegetarian' });
//         const mixedCount = await WeeklyMenu.countDocuments({ menuType: 'mixed' });
        
//         console.log(`Verification counts:`);
//         console.log(`- Vegetarian menu items: ${vegCount}`);
//         console.log(`- Non-vegetarian menu items: ${nonVegCount}`);
//         console.log(`- Mixed menu items: ${mixedCount}`);
//         console.log(`- Total menu items: ${vegCount + nonVegCount + mixedCount}`);
        
//     } catch (error) {
//         console.error('Error seeding database:', error);
//     } finally {
//         // Close the database connection
//         mongoose.connection.close();
//         console.log('Database connection closed');
//     }
// }

// // Run the seed function
// seedDatabase();