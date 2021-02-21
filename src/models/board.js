const mongoose = require ('mongoose')

const BoardSchema = new mongoose.Schema({

    title: {type: String, max: 255},
    userId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    listId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }]
})

module.exports= mongoose.model('Board', BoardSchema)