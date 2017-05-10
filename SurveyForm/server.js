'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/goback', function(req, res) {
  res.redirect('/');
});

app.post('/result', function (req, res){
  res.render('result', {user: req.body});
});

app.listen(8000, function() {
  console.log('listening on port 8000');
});
