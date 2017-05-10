'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/message_board');
var MessageSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4},
  message: { type: String, required: true},
  comments: Array,
  createdAt: Date
});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  var messages = Message.find({}, function(err, messages) {
    if(err) {
      res.render('index', {title: 'you have errors!', errors: message.errors});
    } else {
      res.render('index', {'messages' : messages});
    }
  }).sort({createdAt: 'desc'});
});

app.post('/newcomment', function(req, res) {
  var today = new Date();
  var date = (today.getMonth() + 1) + ' ' + today.getDate() + ' ' + today.getFullYear();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var dateTime = time + ' ' + date;
  Message.findOne({_id: req.body.id}, function(err, message){
    var comment = { commentName: req.body.comment_name, comment: req.body.comment, commentCreatedAt: dateTime};
    message.comments.push(comment);
    message.save(function(err){
      if(err) {
        res.render('index', {title: 'you have errors!', errors: message.errors});
      } else {
        res.redirect('/');
      }
    });
  });
});

app.post('/newmessage', function(req, res) {
  console.log('POST DATA', req.body);
  var today = new Date();
  var date = (today.getMonth() + 1) + ' ' + today.getDate() + ' ' + today.getFullYear();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var dateTime = time + ' ' + date;
  var message = new Message({name: req.body.name, message: req.body.message, comments: [], createdAt: dateTime});
  message.save(function(err) {
    if(err) {
      res.render('index', {title: 'you have errors!', errors: message.errors});
    } else {
      res.redirect('/');
    }
  });
});

app.listen(8000, function() {
  console.log('listening on port 8000');
});
