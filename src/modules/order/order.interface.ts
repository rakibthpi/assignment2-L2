export type TAddress = {
  street: string
  city: string
  country: string
}
export type TOrder = {
  productName: string
  price: number
  quantity: number
}

export type interfaceOrder = {
  userId: number
  username: string
  password: string
  fullName: {
    firstName: string
    lastName: string
  }
  age: number
  email: string
  isActive: 'active' | 'no'
  hobbies: string[]
  address: TAddress
  orders?: TOrder[]
}
