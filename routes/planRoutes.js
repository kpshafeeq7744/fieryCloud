import express from 'express'
import {  getAddOnsController, deleteAddOnsController, updateAddOnsController, getCategoryController,getIndividualPlanController,getPlansController,getSizesController, updateIndividualPlanController, createAddOnsController } from '../controllers/planController.js'
import upload from '../utils/multer.js'

const route= express.Router()

route.get("/categories",getCategoryController)
route.get("/:category/sizes",getSizesController)

// new
route.get('/:vendor',getPlansController)
route.get('/individual/:_id',getIndividualPlanController)
route.patch('/individual/:_id',updateIndividualPlanController)




// add on Plans
route.post("/:vendor/addOns", upload.single("img"), createAddOnsController); // Create
route.get('/:vendor/addOns', getAddOnsController) // Read
route.patch('/:vendor/addOns/:id',upload.single("img"), updateAddOnsController) // Update
route.delete('/:vendor/addOns/:id', deleteAddOnsController) // Delete

export default route