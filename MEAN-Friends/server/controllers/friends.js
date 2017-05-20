var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(req,res){
    Friend.find({}, function(err, friends) {
      if(err) {
        console.log(err);
      } else {
        res.json(friends);
      }
    });
  },
  create: function(req,res){
    console.log(req.body);
      var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday});
      friend.save(function(err) {
        console.log(err);
      });
      res.json(friend);
  },
  update: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
      friend.first_name = req.body.first_name;
      friend.last_name = req.body.last_name;
      friend.birthday = req.body.birthday;
      friend.save(function(err){
        if(err) {
          console.log(err);
        } else {
          res.json(friend);
        }
      });
    });
  },
  delete: function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
    });
  },
  show: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend) {
      console.log(friend);
      res.json(friend);
    });
  }
};
