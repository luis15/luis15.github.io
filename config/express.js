'use strict';
/**
 * Module dependencies.
 */
var pug = require('pug');
var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');
var i18n = require('i18n');
var geoip = require('geoip-lite');
var winston = require('winston');
var config = require('./config');

var env = process.env.NODE_ENV || 'development';

/**
 * Expose
 */
module.exports = function (app, passport) {

/*  if (process.env.NODE_ENV === 'production') {
    app.use(function(req, res, next) {
      if ((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
        return res.redirect(301, 'https://' + req.hostname + req.url);
      }
      next();
    });
  }*/  //TODO: configurar o SSL

  // Compression middleware (should be placed before express.static)
  app.use(compression({
    threshold: 512
  }));

  // Static files middleware
  app.use(express.static(config.root + '/public'));

  // Use winston on production
  var log;
  if (env !== 'development') {
    log = {
      stream: {
        write: function (message, encoding) {
          winston.info(message);
        }
      }
    };
  } else {
    log = 'dev';
  }

  // Don't log during tests
  // Logging middleware
  if (env !== 'test') app.use(morgan(log));

  app.use(cookieParser(config.pkg.name));

  // set views path, template engine and default layout
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'pug');

  i18n.configure({
    locales: config.locales,
    cookie: 'lang',
    queryParameter: 'lang',
    directory: config.root + '/locales'
  });
  app.use(i18n.init);


  // Locale preferences
  app.use(function (req, res, next) {
    // Domain
    if (req.hostname.indexOf('br') > -1) {
      res.setLocale('pt');
    }

    var lang = req.query.lang || req.cookies.lang;

    if (!lang) {
      var ip = req.headers['x-forwarded-for'] ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress;
      if (ip) {
        var country_obj = geoip.lookup(ip.replace('::ffff:'));
        if (country_obj && (country_obj.country == 'BR' || country_obj.country == 'PT' )) {
          res.setLocale('pt');
        }
      }

    } else {
      // User preferences (store in cookie)
      res.setLocale(lang);
      res.cookie('lang', lang, {
        maxAge: 1000*60*60*24*365*2,
        domain: (req.hostname).replace("www"," ")
      });
    }
    next();
  });

  // expose package.json to views
  app.use(function (req, res, next) {
    res.locals.pkg = config.pkg;
    res.locals.env = env;
    res.locals.query = req.query;
    res.locals.req = req;
    res.locals.res = res;
    next();
  });

  // bodyParser should be above methodOverride
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(multer({
    dest: config.root + '/tmp'
  }).array('upload'));
  app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));
};
