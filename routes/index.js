import express from 'express'
import planRoutes from "./planRoutes.js"
import menuRoutes from './menuRoutes.js'
import locationRoutes from './locationRoutes.js'
import subscriberRoutes from './subscribersRoutes.js'
import addParticpantRoutes from './addParticpantRoutes.js'


const route=express.Router()

route.use("/plans",planRoutes)
route.use('/menus',menuRoutes)
route.use('/locations',locationRoutes)
route.use('/subscribers',subscriberRoutes)
route.use('/orderParticipant',addParticpantRoutes)

export default route