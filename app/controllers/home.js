'use strict';

exports.index = function (req, res) {
  res.render('home/index', {
    description : res.__("A new bank for a new world."),
    title : res.__("A new bank for a new world."),
    page:''
  });
};
