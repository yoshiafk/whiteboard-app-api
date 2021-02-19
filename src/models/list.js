const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete')
const {Schema} = require('mongoose');

const ListSchema = mongoose.Schema({
      title:{
        type: String,
        required: true
      },
      card:[{
          type: Schema.Types.ObjectId,
          ref: 'card'
      }]
},
    {timestamps: true}
);
module.exports = mongoose.model('List', ListSchema);