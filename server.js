const express = require('express')
const productRoute = require('./routes/productRoute')
const connectMongoDB = require('./connection')
const customerRoute = require('./routes/CustomerRoute')
const app = express()
const URL = "mongodb+srv://talhaamjadch85:talhahere@talhaamjad.xa4edfx.mongodb.net/?retryWrites=true&w=majority"
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/products',productRoute)
app.use('/customers',customerRoute)

connectMongoDB(app,PORT,URL)




