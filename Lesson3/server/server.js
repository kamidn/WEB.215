import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
//mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connect("mongodb://localhost:27017/mernproject")
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: mongodb://localhost:27017/mernproject"`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
