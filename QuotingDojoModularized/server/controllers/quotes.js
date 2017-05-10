var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
  find: function(req, res){
    Quote.find({}, function(err, quotes) {
      if(err) {
        res.render('index', {title: 'you have errors!', errors: quote.errors});
      } else {
        console.log(quotes);
        res.render('quotes', {'quotes' : quotes});
      }
    }).sort({likes: 'desc'});
  },

  create: function(req, res){
    var today = new Date();
    var date = (today.getMonth() + 1) + ' ' + today.getDate() + ' ' + today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes();
    var dateTime = time + ' ' + date;
    var quote = new Quote({name: req.body.name, quote: req.body.quote, likes: 0, createdAt: dateTime});
    quote.save(function(err) {
      if(err) {
        res.render('index', {title: 'you have errors!', errors: quote.errors});
      } else {
        console.log('successfully added a quote!');
        res.redirect('/quotes');
      }
    });
  },

  updateLikes: function(req, res){
    Quote.findOne({_id: req.body.id}, function(err, quote){
      quote.likes = quote.likes + 1;
      quote.save(function(err){
        if(err) {
          res.render('quotes', {title: 'you have errors!', errors: quote.errors});
        } else {
          res.redirect('/quotes');
        }
      });
    });
  }
};
