import Dishes from "../models/Dishes.js"

//--------------------------------------------   dishes    ----------------------------------
//  create
export const createDishService = async ({ name, description, vendor, category, isAvailable }) => {
  return await Dishes.create({ name, description, vendor, category, isAvailable });
};

//  Read ---------------------------------
export const getDishesService = async ({ vendor, category }) => {
  const query = { vendor };
  
  if (category && category !== "all") {
    query.category = category;
  }

  const dishes = await Dishes.find(query);

  return {
    dishes,
    total: dishes.length,
  };
};

//  Update ---------------------------------
export const updateDishService = async (id, data) => {
  return await Dishes.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    strict: true          
  });
};

//  Delete ---------------------------------
export const deleteDishService = async (id) => {
  return await Dishes.findByIdAndDelete(id);
};

 