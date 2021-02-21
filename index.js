require('dotenv').config()

const express = require ('express')
const  mongoose  = require('mongoose')
const cors = require ('cors')
const bodyParser = require ('body-parser')

const apiRoutes = require ('./src/routes/api-route')
const db = require('./src/config/db')


const PORT = process.env.PORT
mongoose.Promise = global.Promise



const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.urlencoded({ extended: false}))
    app.use('/api', apiRoutes)




    app.listen(PORT, () => 
        console.log(`server running on port: mana hayoo`))


