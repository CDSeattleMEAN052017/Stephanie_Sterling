
var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  name: String,
  message: { type: String, required: true},
  comments: Array,
  createdAt: Date
});
var Message = mongoose.model('Message', MessageSchema);
