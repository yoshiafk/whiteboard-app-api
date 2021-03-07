const mongoose = require ('mongoose')

const BoardSchema = new mongoose.Schema({

    title: {
        type: String, 
        max: 255,
        unique: true
    },

    teamId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        unique: true
        
    }],
    
    listId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }],
    __v: {
        type: Number,
        select: false
    },
})

module.exports= mongoose.model('Board', BoardSchema)