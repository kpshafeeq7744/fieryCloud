import express from 'express'
import { createContactUs, getContactUs } from '../controllers/ContactUsController.js';

const router=express.Router()

//---------------------------------------- dishes ----------------------------------------
router.post("/:vendor",createContactUs);
router.get("/:vendor", getContactUs);



export default router