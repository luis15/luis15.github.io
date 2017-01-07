'use strict';

exports.index = function (req, res) {
  res.render('team/index', {
    title: res.__('Team'),
    description: res.__("Our people that changes the world"),
    title : res.__('Our people that changes the world'),
    page:'team'
  });
};
