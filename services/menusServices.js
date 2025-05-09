import Dishes from "../models/Dishes.js"
import WeeklyMenu from "../models/WeeklyMenu.js"


export const dishesService=async({vendor,category})=>{
  return await Dishes.find({vendor,category})
}

export const weeklyMenuService=async({vendor,category})=>{
   return await WeeklyMenu.find({vendor,category})
 }
 