import express from 'express'
import { createOfferBanner, deleteOfferBanner, getOfferBanner, updateOfferBanner } from '../controllers/offerBannerController.js'
import upload from '../utils/multer.js'
const router=express.Router()


router.post('/create/:vendor', upload.single("image"),createOfferBanner) //✅
router.get('/get/:vendor',getOfferBanner) //✅
router.patch('/update/:id',upload.single("image"),updateOfferBanner) 
router.delete('/delete/:id',deleteOfferBanner) //✅

export default router