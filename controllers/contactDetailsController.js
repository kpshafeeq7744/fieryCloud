import ContactDetail from "../models/ContactDetail.js"

export const getContactDetails=async(req,res)=>{
    try {
        const contactDetails=await ContactDetail.findOne({vendor:req.params.vendor})
        res.status(200).json(contactDetails)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateContactDetails=async(req,res)=>{
    try {
        const contactDetails=await ContactDetail.findOneAndUpdate({vendor:req.params.vendor},req.body,{new:true})
        res.status(200).json(contactDetails)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}