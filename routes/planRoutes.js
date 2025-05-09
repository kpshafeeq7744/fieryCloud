import express from 'express'
import { getCategoryController,getSizesController } from '../controllers/planController.js'
const route= express.Router()

route.get("/categories",getCategoryController)
route.get("/:category/sizes",getSizesController)

export default route