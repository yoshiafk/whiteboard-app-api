const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
      title:{
        type: String,
        required: true
      },

      boardId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
      }],

      cardId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
      }],

      userId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
    {timestamps: true}
);

module.exports = mongoose.model('List', ListSchema);

