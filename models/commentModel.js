const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  computer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'computer',
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('comment', commentSchema);
