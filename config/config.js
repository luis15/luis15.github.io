'use strict';
/**
 * Module dependencies.
 */

var path = require('path');
var extend = require('util')._extend;
var pkg = require('../package.json');

var defaults = {
  appName: 'BdeB',
  company: 'Banco de Bits Ltda.',
  pkg: pkg,

  baseUrl: 'https://bancodebits.com.br',
  shortUrl: 'http://bdeb.com.br',

  root: path.join(__dirname, '..'),
  locales: ['en','pt','es']
};

/**
 * Expose
 */

module.exports = defaults;
