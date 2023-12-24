import { Request, Response } from 'express'
import { orderServices } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  try {
    const { oder } = req.body
    console.log('Test order', oder)
    const result = await orderServices.createOrderIntoDB(oder)
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      succcess: false,
      message: 'order id faild to insert',
      data: error,
    })
  }
}

const getOrderController = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrder()
    res.status(200).json({
      success: true,
      message: '"Users fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      succcess: false,
      message: 'order id faild to insert',
      data: error,
    })
  }
}

const getSingleOrderFromDB = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params
    const result = await orderServices.getSingleOrderFromDB(_id)
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      succcess: false,
      message: 'User not found',
      data: error,
    })
  }
}
const updateSingleOrderFromDB = async (req: Request, res: Response) => {
  try {
    const { updateid } = req.params
    const { oder } = req.body
    const result = await orderServices.updateOderItem(updateid, { oder })
    console.log('Rakiib update', result)
    res.status(200).json({
      success: true,
      message: 'update successfully done!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      succcess: false,
      message: 'order id faild to insert',
      data: error,
    })
  }
}

export const orderController = {
  createOrder,
  getOrderController,
  getSingleOrderFromDB,
  updateSingleOrderFromDB,
}
