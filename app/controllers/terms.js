'use strict';
var express = require("express");
var myParser = require("body-parser");
var app = express();

exports.index = function (req, res) {
  res.render('terms/index', {
    title: res.__('Terms of service'),
    cookie: req.cookies.lang,
    description: res.__("What we do to improve your life every day"),
    title : res.__('Terms of use'),
    page:'terms'

  });
};
