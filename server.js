var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override')
  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/react_blug');

// Middleware
app.use(bodyParser.JSON());
app.use(bodyParser({extended:true});
app.use(methodOverride('_method');
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
