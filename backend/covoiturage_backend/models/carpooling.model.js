const mongoose = require('mongoose');
const extend = require('mongoose-schema-extend');

const Schema = mongoose.Schema;

const carpoolingSchema = new Schema({
  date: { 
  	type: Date, 
  },

}, {
  timestamps: true
});




const carpooling = mongoose.model('carpooling', carpoolingSchema);

module.exports = carpooling;
