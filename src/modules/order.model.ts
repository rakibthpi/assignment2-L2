// schema.ts

import { Schema, model } from 'mongoose'
import { TAddress, interfaceOrder } from './order/order.interface'

const OrderItemSchema = new Schema({
  orders: {
    type: {
      productName: { type: String },
      price: { type: Number },
      quantity: { type: Number },
    },
  },
})
export const AddressSchemaName = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
})

const InterfaceOrderSchema = new Schema<interfaceOrder>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'inActive'],
    required: [true, 'Why no bacon?'],
  },
  hobbies: { type: [String], required: true },
  address: { type: AddressSchemaName },
  orders: [{ type: OrderItemSchema }],
})

export const OrderModel = model<interfaceOrder>('Order', InterfaceOrderSchema)
