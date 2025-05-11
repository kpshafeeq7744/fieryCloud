import express from 'express'
import { addParticpantControl } from '../controllers/orderParticipantController.js'

const router=express.Router()

router.post("/add",addParticpantControl)

export default router