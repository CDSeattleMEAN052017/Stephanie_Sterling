// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var quotes = require('../controllers/quotes.js');
var Quote = mongoose.model('Quote');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/quotes', function(req, res) {
    quotes.find(req, res);
  });

  app.post('/like', function(req, res) {
    quotes.updateLikes(req, res);
  });

  app.post('/quotes', function(req, res) {
    quotes.create(req, res);
  });
};
