var mongoose = require('mongoose');
var people = require('../controllers/people.js');
var Person = mongoose.model('Person');

module.exports = function(app) {
  app.get('/', function(req, res) {
    people.allpeople(req, res);
  });

  app.get('/new/:name/', function(req, res) {
    people.create(req, res);
  });

  app.get('/remove/:name/', function(req, res) {
    people.remove(req, res);
  });

  app.get('/:name/', function(req, res) {
    people.specific(req, res);
  });

};
