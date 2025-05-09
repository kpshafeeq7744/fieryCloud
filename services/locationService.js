import Location from "../models/Locations.js"

export const getLocationsService=async(vendor)=>{
   return await Location.find({vendor})
}