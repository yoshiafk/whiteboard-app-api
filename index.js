require('dotenv').config();
const app = require ('./app.js')


const mongodbConnection = require ('./src/config/database')


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})
