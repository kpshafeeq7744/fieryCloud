import MealCategory from "../models/MealCategories.js"
import MealSize from "../models/MealPlan.js";

export const getCategoryService=async()=>{
    return await MealCategory.find();
}

export const getSizesService=async(category)=>{
    return await MealSize.find({category});
}