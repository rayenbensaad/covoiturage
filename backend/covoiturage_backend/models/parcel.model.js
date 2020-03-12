const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parcelSchema = new Schema({
  type: { 
      type: String,
  },
  weight: { 
    type: Number, 
},
  dimension: { 
    type: Number, 
},
  quantity: { 
    type: Number, 
}

}, {
  timestamps: true
});

const parcel = mongoose.model('parcel', parcelSchema);

module.exports = parcel;