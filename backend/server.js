require('dotenv').config()
const express = require('express')
<<<<<<< Updated upstream:backend/server.js
=======
// cors = require('cors')
>>>>>>> Stashed changes:backend/index.js

const app = express()
const mongoose = require('mongoose')
const apiRoutes = require('./routes/characters')

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//app.use(cors())

app.use('/api/characters', apiRoutes)
<<<<<<< Updated upstream:backend/server.js
mongoose.connect(process.env.MONGO_URI)
=======
mongoose.connect(process.env.MONGO_URI, )
>>>>>>> Stashed changes:backend/index.js
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
<<<<<<< Updated upstream:backend/server.js
    })

=======
    })
>>>>>>> Stashed changes:backend/index.js
