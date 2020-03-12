const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength:3 },
  linkFB: { type: String },
  address: { type: String },
  country: { type: String },
  birthdate: { type: Date },
  picture: { type: String },
  isSmoker: { type: Number },
  isConnected: { type: Number },
  phone: { type: Number },  
  isMotorizedl: { type: Number },
  function: { type: String }

}, {
  timestamps: true,
});

const user = mongoose.model('user', userSchema);

module.exports = user;