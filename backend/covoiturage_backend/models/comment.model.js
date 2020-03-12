const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  description: { 
      type: String,
  }
}, {
  timestamps: true
});

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;