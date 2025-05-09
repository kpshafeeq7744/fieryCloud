import express from "express"
import { getLocationsController } from "../controllers/locationController.js"

const router=express.Router()

router.get("/:vendor",getLocationsController)

export default router