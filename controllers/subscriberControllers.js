import { addSubscriberService } from "../services/subscribersService.js"

export const addSubscriberController=async(req,res)=>{
   console.log(req.body)
    await addSubscriberService(req.body)
    res.status(201).json({ message: "Thanks for Subscription" });
}