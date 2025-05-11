import express from 'express'
import { addSubscriberController } from '../controllers/subscriberControllers.js'
const route= express.Router()

route.post("/addSubscriber",addSubscriberController)

export default route