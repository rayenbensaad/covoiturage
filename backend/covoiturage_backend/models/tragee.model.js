const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trageeSchema = new Schema({
  from: { 
      type: String,
  },
  passage: { 
    type: String, 
},
  to: { 
    type: String, 
}

}, {
  timestamps: true
});

const tragee = mongoose.model('tragee', trageeSchema);

module.exports = tragee;