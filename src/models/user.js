const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema ({
    
    username: {
        type: String,
        max: 255
    },
    industri: {
        type: String,
        max: 255
    }, 
    companyName:{
        type: String,
        max: 255
    }
    
})

module.exports = mongoose.model('User', UserSchema)