'use strict';

var express = require('express');
var db      = process.env.DB;
var port    = process.env.PORT;

var app = express();
//exporting  app to config.js
//require('./lib/config')(app)
var config = require('./lib/config');
config(app);
require('./lib/pipeline')(app, express);
require('./lib/mongodb')(db);




app.listen(port, function() {
  console.log('Express is ready on Port!  ' + port);

});
