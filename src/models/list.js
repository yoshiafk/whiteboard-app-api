const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const softDelete = require('mongoosejs-soft-delete');

const ListSchema = mongoose.Schema({
      title:{
        type: String,
        required: true
      },
      deleted: {
        type: Schema.Types.Boolean,
        index: true,
        default: false
      },

},
    {timestamps: true}
);

module.exports = mongoose.model('List', ListSchema);