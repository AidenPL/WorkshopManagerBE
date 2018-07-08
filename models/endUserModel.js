const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EndUserSchema = new Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('endUser', EndUserSchema);
