const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/jankenRoutes')

const app = express()
app.use(express.json())
require('dotenv').config()

app.use('/api/v1/', routes)

PORT = 3000



mongoose.connect('mongodb://localhost:27017/janken')
    .then(() => {
        console.log('connected to DB')
        app.listen(PORT, () => {
            console.log('listening to PORT', PORT)
        })
    })
    .catch(err => {
        console.error(err)
    })