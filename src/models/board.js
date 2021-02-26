const mongoose = require ('mongoose')

const BoardSchema = new mongoose.Schema({

    title: {
        type: String, 
        max: 255,
        unique: true
    },

    teamId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }],
    
    listId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }]
})

module.exports= mongoose.model('Board', BoardSchema)