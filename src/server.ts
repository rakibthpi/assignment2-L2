import app from './app'
import mongoose from 'mongoose'
import config from './config'

async function server() {
  try {
    await mongoose.connect(config.database_url_local || '')
    console.log('connected to mongodb')
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
server().catch((err) => console.log(err))
