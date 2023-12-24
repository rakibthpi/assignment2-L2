import express from 'express'
import { orderController } from './order.controller'
const userRouter = express.Router()

// will call controller function
userRouter.post('/', orderController.createOrder)

userRouter.get('/', orderController.getOrderController)

userRouter.get('/:userId', orderController.getSingleOrderFromDB)

userRouter.put('/:updateid', orderController.updateSingleOrderFromDB)
// (req: Request, res: Response) => {}

export const OrderRouter = userRouter
