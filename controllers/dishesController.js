
import { createDishService, deleteDishService, getDishesService, updateDishService } from "../services/dishesServices.js";

export const createDish = async (req, res) => {
  try {
    const { vendor, category } = req.params;
    const { name, description, isAvailable=true } = req.body;

    const newDish = await createDishService({
      name,
      description,
      vendor,
      category,
      isAvailable,
    });

    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ error: "Failed to create dish", message: error.message });
  }
};
// read 
export const getDishes = async (req, res) => {
  try {
    const { vendor, category } = req.params;

    const result = await getDishesService({ vendor, category }); // no limit/page
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch dishes",
      message: error.message,
    });
  }
};

export const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDish = await updateDishService(id, req.body);

    if (!updatedDish) return res.status(404).json({ error: "Dish not found" });
    res.json(updatedDish);
  } catch (error) {
    res.status(500).json({ error: "Failed to update dish", message: error.message });
  }
};
export const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteDishService(id);

    if (!deleted) return res.status(404).json({ error: "Dish not found" });
    res.json({ message: "Dish deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete dish", message: error.message });
  }
};

