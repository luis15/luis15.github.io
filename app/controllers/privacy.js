'use strict';
var express = require("express");
var myParser = require("body-parser");
var app = express();
exports.index = function (req, res) {
  res.render('privacy/index', {
    title: res.__('Privacy'),
    cookie: req.cookies.lang,
    description: res.__("See how we protected your privacy"),
    title : res.__('Privacy'),
    page:'privacy'
  });
};
