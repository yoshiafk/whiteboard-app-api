const mongoose = require ('mongoose')

//setting koneksi
    const connurl = process.env.MONGO_CONNECTION
    mongoose.connect(connurl,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    const connection = mongoose.connection
    connection.once('open', () => console.log('connection succes'))
    connection.on('error', (err) => {
        console.log(`connection error ${err}`)
        process.exit()
    })
