'use strict';

exports.index = function (req, res) {
  res.render('home/index', {
    description : res.__("The bank that see opportunity in new ways."),
    title : res.__("The bank that see opportunity in new ways."),
    page:''
  });
};
