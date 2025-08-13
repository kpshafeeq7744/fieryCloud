import express from 'express'
import { addSubscriberController, getSubscribersController } from '../controllers/subscriberControllers.js'
const route= express.Router()

route.post("/addSubscriber",addSubscriberController)
route.get("/:vendor",getSubscribersController)

export default route