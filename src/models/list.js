const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const ListSchema = mongoose.Schema({
      title:{
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        default: true,
        select: false
      },

},
    {timestamps: true}
);

module.exports = mongoose.model('List', ListSchema);