'use strict';
var express = require("express");
var myParser = require("body-parser");
var http = require('http');
var app = express();

exports.index = function (req, res) {
  res.render('love/index', {
        description : res.__("Everybody loves BdeB, and you will love too"),
        title : res.__('Wall of love'),
        page:'love'
  });

};
