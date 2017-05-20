var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var User = mongoose.model('User');

module.exports = function(app) {
  app.get('/users', function(req, res) {
    users.index(req, res);
  });
  app.post('/users', function(req, res) {
    users.create(req, res);
  });
  app.post('/users/login', function(req, res) {
    users.login(req, res);
  });
};
