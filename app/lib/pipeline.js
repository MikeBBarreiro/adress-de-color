'use strict';

var bodyParser = require('body-parser');
var morgan = require('morgan');
var home = require('../controllers/home');
var people = require('../controllers/people');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));
// execute index funciton in home.js

  app.get('/', home.index);
  app.get('/about', home.about);
  app.get('/faq', home.faq);
  app.get('/contact', home.contact);
  app.get('/people', people.index);

  console.log('Pipeline Configured');
};
