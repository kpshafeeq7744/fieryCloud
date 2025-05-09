import { getCategoryService,getSizesService } from "../services/planService.js"

// category
export const getCategoryController=async(req,res)=>{
    return res.json(await getCategoryService())
}

// plan
export const getSizesController=async(req,res)=>{
    const {category}=req.params
    return res.json(await getSizesService(category))
}