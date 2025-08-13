import express from 'express'
import { createFaq, deleteFaq, getFaq, updateFaq } from '../controllers/faqControllers.js';

const router=express.Router()

//---------------------------------------- dishes ----------------------------------------
router.post("/:vendor", createFaq);
router.get("/:vendor", getFaq);
router.patch("/:id", updateFaq);
router.delete("/:id", deleteFaq);


export default router