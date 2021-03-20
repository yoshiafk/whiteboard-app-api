const mongoose = require ('mongoose')
mongoose.set('useCreateIndex', true)

const TeamSchema = new mongoose.Schema({

    teamName:{
        type: String, 
        max: 255,
        unique: true,
       
    },
    userId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    boardId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
       
    }],
    __v: {
        type: Number,
        select: false 
    }
})

module.exports= mongoose.model('Team', TeamSchema)

