'use strict';
var express = require("express");
var myParser = require("body-parser");
var app = express();
exports.index = function (req, res) {
  res.render('pricing/index', {
    title: res.__('Pricing'),
    cookie: req.cookies.lang,
    description: res.__("See our plans and understand how easy is be a BdeBian"),
    title : res.__('Pricing'),
    page:'features'

  });
};
