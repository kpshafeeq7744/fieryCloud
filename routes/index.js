import express from 'express'
import planRoutes from "./planRoutes.js"
import menuRoutes from './menuRoutes.js'
import locationRoutes from './locationRoutes.js'

const route=express.Router()

route.use("/plans",planRoutes)
route.use('/menus',menuRoutes)
route.use('/locations',locationRoutes)

export default route