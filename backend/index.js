const express = require('express')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/characters')
//const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//app.use(cors())

app.use('/api/characters', apiRoutes)
mongoose.connect(process.env.MONGO_URI, )
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
