'use strict';
exports.index = function (req, res) {
  res.render('contact/index', {
    description : res.__('Contact us'),
    title : res.__('Contact us'),
    page:'contact'
  });
};
