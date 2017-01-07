'use strict';
/**
 * Module dependencies
 */

var config = require('./config/config');

var express = require('express');

var env = process.env.NODE_ENV || 'development';

/*if (env !== 'production') {
  require('dotenv').load();
}*/

var app = express();
var port = process.env.PORT || 3333;

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);

app.listen(port, function () {
  var env = app.get('env');

  console.log('✔ Express server listening on port %d in %s mode', port, env);


  // Reload chrome, run `brew install chrome-cli` first
  if (env === 'development') {
    var exec = require('child_process').exec;
    exec('chrome-cli reload', function (error) {
      if (error !== null) {
        console.log('exec error: ' + error);
      } else {
        console.log('✔ Chrome reloaded');
      }
    });
  }


});

/**
 * Expose
 */

module.exports = app;
