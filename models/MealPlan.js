import mongoose from "mongoose"
const Schema = mongoose.Schema;

// Meal Sizes Schema
const mealSizeSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        plan: {
            type: String,
            enum: ["single", "couple", "family"],
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["vegetarian", "non-vegetarian", "mixed"],
        },
        basePrice: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        iconBg: {
            type: String,
            default: "bg-blue-100",
        },
        iconColor: {
            type: String,
            default: "text-blue-600",
        },
        icon: {
            type: String,
            required: true,
        },
        features: {
            type: [String],
            required: true,
        },
        popular: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

const MealSize = mongoose.model("MealSize", mealSizeSchema);
export default MealSize;
