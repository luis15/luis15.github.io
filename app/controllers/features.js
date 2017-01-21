'use strict';
exports.index = function (req, res) {
  res.render('features/index', {
    description : res.__("The bank that see opportunity in new ways."),
    title : res.__('Our features for you'),
    page:'features'
  });
};
