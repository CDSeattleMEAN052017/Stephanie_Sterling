var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
  specific: function(req, res){
    Person.findOne({name: req.params.name}, function(err, person) {
      res.json(person);
    });
  },

  allpeople: function(req, res){
    Person.find({}, function(err, people) {
      console.log("************");
      console.log(people);
      res.json(people);
    });
  },

  create: function(req, res){
    var person = new Person({name: req.params.name});
    person.save(function(err) {
      res.redirect('/');
    });
  },

  remove: function(req, res){
    Person.remove({name: req.params.name}, function(err){
      res.redirect('/');
    });
  },
};
