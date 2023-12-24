import { OrderModel } from '../order.model'
import { interfaceOrder } from './order.interface'
const createOrderIntoDB = async (dataOrder: interfaceOrder) => {
  const result = await OrderModel.create(dataOrder)
  return result
}

const getAllOrder = async () => {
  const result = await OrderModel.find()
  return result
}

const getSingleOrderFromDB = async (id: string) => {
  const result = await OrderModel.findOne({ id })
  //   const result = await OrderModel.aggregate([{ $match: { id } }])
  return result
}

const updateOderItem = async (id: string, updatedData: any) => {
  const result = await OrderModel.findOneAndUpdate(
    { _id: id },
    { $push: { order: updatedData } },
  )
  return result
}
export const orderServices = {
  createOrderIntoDB,
  getAllOrder,
  getSingleOrderFromDB,
  updateOderItem,
}
