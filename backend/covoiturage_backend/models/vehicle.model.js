const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  type: { 
      type: String,
  },
  brand: { 
    type: String, 
},
  option: { 
    type: String, 
},
  option: { 
    nbre_places: Number, 
},
  description: { 
    type: String, 
},

}, {
  timestamps: true
});

const vehicle = mongoose.model('vehicle', vehicleSchema);

module.exports = vehicle;