var mongoose = require('mongoose');
var User = mongoose.model('User');
var Message = mongoose.model('Message');

module.exports = {
  index: function(req,res){
    var response = {};
    User.findOne({_id: req.session.user_id}, function(err, user) {
      if(err || user === null) {
        res.status(400).send({'user': false});
      } else {
        response.user = user;
        Message.find({}, function(err, messages) {
          if(err) {
            res.status(400).send({'messages': err});
          } else {
            response.messages = messages;
          }
          res.json(response);
        });
      }
    });

  },
  new_message: function(req,res){
    User.findOne({_id: req.session.user_id}, function(err, user) {
      if(err || user === null) {
        console.log('user');
        console.log(user);
        res.status(400).send({'user': false});
      } else {
        var name = user.first_name + ' ' + user.last_name;
        console.log(name);
        console.log(req.body.message);
        var message = new Message({name: name, message: req.body.message, comments: [], createdAt: new Date()});
        message.save(function(err) {
          if(err) {
            var return_errors = Object.keys(err.errors).map(function(error_key) {
              return err.errors[error_key].message
            })
            console.log(return_errors);
            res.status(400).send({'message': return_errors});
          } else {
            res.json(message);
          }
        });
      }
    });
  },

  new_comment: function(req, res){
    User.findOne({_id: req.session.user_id}, function(err, user) {
      if(err || user === null) {
        res.status(400).send({'user': false});
      } else {
        var name = user.first_name + ' ' + user.last_name;
        console.log(req.body);
        Message.findOne({_id: req.body.message_id}, function(err, message){
          var comment = { commentName: name, comment: req.body.comment, commentCreatedAt: new Date()};
          message.comments.push(comment);
          message.save(function(err){
            if(err) {
              var return_errors = Object.keys(err.errors).map(function(error_key) {
                return err.errors[error_key].message
              })
              console.log(return_errors);
              res.status(400).send({'message': return_errors});
            } else {
              res.json(message);
            }
          });
        });
      }
    });
  }
}
