
var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: { type: String, required: true},
  likes: Number,
  createdAt: Date
});
var Quote = mongoose.model('Quote', QuoteSchema);
