const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const cardSchema = mongoose.Schema({
    title:{
        type: String
    },

    priority:{
        type: Number
    },

    description:{
        type: String
    },
    
    active: {
        type: Boolean,
        default: true,
        select: false
      },
      
    listId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }],

    userId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    commentId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},

    {timestamps:true} 
)

module.exports = mongoose.model("Card", cardSchema);
