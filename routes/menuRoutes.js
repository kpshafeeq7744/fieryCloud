import express from 'express'
import { dishesController,weeklyMenuController } from '../controllers/menusController.js'
const router=express.Router()

router.get("/:vendor/:category/dishes",dishesController)
router.get("/:vendor/:category/weeklymenu",weeklyMenuController)

export default router