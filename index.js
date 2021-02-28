require('dotenv').config()
const app = require ('./app.js')
const db = require('./src/config/db')



const PORT = process.env.PORT || 3000

app.listen(PORT, () => 
    console.log(`server running on port: ${PORT}`))