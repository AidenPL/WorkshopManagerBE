const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComputerSchema = new Schema({
  ref: {
    type: String,
    required: true
  },
  bay: {
    type: String,
    required: true
  },
  issue: {
    type: String,
    required: true
  },
  current_status: {
    type: String,
    required: true
  },
  end_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'endUser',
    required: true
  }
});

module.exports = mongoose.model('computer', ComputerSchema);
