const express = require ('express')
const morgan = require('morgan')
const bodyParser = require ('body-parser')
const cors = require ('cors')
const app = express()



    app.use(cors())
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    
    const router = require ('./src/routes/')
    app.use(router.apiRouter);
    app.use(router.listRouter);
    app.use(router.cardRouter);
    
    

module.exports = app;