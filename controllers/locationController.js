import { getLocationsService } from "../services/locationService.js"

export const getLocationsController=async( req,res)=>{
    const {vendor}=req.params
   const result= await getLocationsService(vendor)
   res.json(result)
}