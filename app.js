const express = require ('express')
const morgan = require('morgan')
const bodyParser = require ('body-parser')
const cors = require ('cors')

const apiRoutes = require ('./src/routes/api-route')

const app = express()

    app.use(cors())
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/api', apiRoutes)
    
()
module.exports = app
