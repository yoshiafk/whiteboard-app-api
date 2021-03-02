const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
      title:{
        type: String,
        required: true
      },

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
    {timestamps: true}
);

module.exports = mongoose.model('List', ListSchema);