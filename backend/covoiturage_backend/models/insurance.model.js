const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
  type: { 
      type: String,
  },
  price: { 
    type: Number,
}
}, {
  timestamps: true
});

const insurance = mongoose.model('insurance', insuranceSchema);

module.exports = insurance;