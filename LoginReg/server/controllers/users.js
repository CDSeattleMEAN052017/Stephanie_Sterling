var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

module.exports = {
  index: function(req,res){
    User.find({}, function(err, users) {
      if(err) {
        console.log('MY errors:');
        console.log(err.errors);
      } else {
        res.json(users);
      }
    });
  },
  login: function(req,res){
    User.findOne({email: req.body.login_email}, function(err, user) {
      if(err || user === null) {
        console.log('MY errors:');
        res.status(400).json({'error': 'Invalid Login'});
      } else {
        console.log(req.body.login_password);
        console.log(user.password);
        if (req.body.login_password !== null && bcrypt.compareSync(req.body.login_password, user.password)){
          req.session.id = user._id;
          console.log(req.session.id);
        }
        else {
          console.log('else')
          res.status(400).json({'error': 'Invalid Login'});
        }
      }
    });

  },
  create: function(req,res){
    console.log(req.body);
      var user = new User(req.body);
      user.save(function(err, newuser) {
            if (err){
              console.log('MY errors:');
              console.log(err);
              var return_errors = Object.keys(err.errors).map(function(error_key) {
                return err.errors[error_key].message
              })
              console.log(return_errors);
              res.status(400).send(return_errors)
            }
            else{
            res.json(user);
          }
      });
  }
}
