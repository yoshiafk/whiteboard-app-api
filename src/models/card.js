const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
    priority:{
        type: Number,
    },

    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
    },

    labelId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Label'
    }],
 
    dueDate:{
        type: String
    },

    commentId:[{
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: 'Comment'
    }],

    listId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }],

    userId:[{
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: 'User'
    }],

    teamId:[{
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: 'Team'
    }],

    boardId:[{
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: 'Board'
    }],
    
    active: {
        type: Boolean,
        default: true,
        select: false
    },

    __v: {
        type: Number,
        select: false
    }

},

    {timestamps:true} 
)

module.exports = mongoose.model("Card", cardSchema);

