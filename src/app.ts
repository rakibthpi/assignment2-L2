import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { OrderRouter } from './modules/order/order.route'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

app.use('/api/users', OrderRouter)

const appController = (req: Request, res: Response) => {
  const a = 11
  res.send(a)
}

app.get('/', appController)

export default app
