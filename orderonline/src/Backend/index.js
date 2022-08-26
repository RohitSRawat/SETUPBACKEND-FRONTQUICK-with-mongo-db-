const express = require('express')
const bodyParser = require('body-parser')
require('./db/moongose')
const userRouter = require('./routers/product')
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const port = process.env.PORT||8080

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})