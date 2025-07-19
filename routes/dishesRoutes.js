import express from 'express'
import { createDish,getDishes,updateDish,deleteDish} from '../controllers/dishesController.js'
const router=express.Router()

//---------------------------------------- dishes ----------------------------------------
router.post("/:vendor/:category/dishes", createDish);
router.get("/:vendor/:category/dishes", getDishes);
router.patch("/dishes/:id", updateDish);
router.delete("/dishes/:id", deleteDish);


export default router