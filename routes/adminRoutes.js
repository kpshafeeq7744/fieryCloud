import express from express


const route=express.Router()

route.get('/getPlans/:vendor',getPlanController)


export default route