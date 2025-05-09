import { dishesService,weeklyMenuService } from "../services/menusServices.js";

export const dishesController = async (req, res) => {
    const { vendor, category } = req.params;
    const result = await dishesService({ vendor, category });
    res.status(200).json(result);
};

export const weeklyMenuController=async(req,res)=>{
    const { vendor, category } = req.params;
    console.log(vendor,category,"its worked")
    const result = await weeklyMenuService({ vendor, category });
    res.status(200).json(result);
}