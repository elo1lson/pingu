import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import { route } from './src/routes/home.js'
import { contentRoute } from './src/routes/content.js'
config()

const app = express()
const port = 3001 || process.env.PORT_API

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.emit('ready');
  })
  .catch(e => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', route)
app.use('/content', contentRoute)

app.on('ready', () => {

  app.listen(port, () => {
    console.log("listenin on port" + " " + port + "http://localhost:3001");

  })
})