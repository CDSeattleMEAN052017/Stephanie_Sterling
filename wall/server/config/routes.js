var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var messages = require('../controllers/messages.js');
var User = mongoose.model('User');

module.exports = function(app) {
  app.get('/messages', function(req, res) {
    messages.index(req, res);
  });
  app.post('/users', function(req, res) {
    users.create(req, res);
  });
  app.post('/users/login', function(req, res) {
    users.login(req, res);
  });
  app.post('/logout', function(req, res) {
    users.logout(req, res);
  });
  app.post('/check_login', function(req, res) {
    users.check_login(req, res);
  });
  app.post('/new_message', function(req, res) {
    messages.new_message(req, res);
  });
  app.post('/new_comment', function(req, res) {
    messages.new_comment(req, res);
  });
};
