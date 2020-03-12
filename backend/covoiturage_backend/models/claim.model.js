const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const claimSchema = new Schema({
  object: { 
      type: String, 
      required: true,
      trim: true
  },
  description: { 
    type: String, 
},
  type: { 
    type: String, 
},

}, {
  timestamps: true
});

const claim = mongoose.model('claim', claimSchema);

module.exports = claim;