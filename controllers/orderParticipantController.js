import { addParticipantService } from "../services/orderParicipantService.js"

export const addParticpantControl=async(req,res)=>{
    await addParticipantService(req.body)
    res.json({message:"Thanks for joining"})

}