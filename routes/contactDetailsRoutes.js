import express from 'express'
import { getContactDetails, updateContactDetails } from '../controllers/contactDetailsController.js'


const router=express.Router()

router.get('/get/:vendor',getContactDetails)
router.patch('/update/:vendor',updateContactDetails)

export default router