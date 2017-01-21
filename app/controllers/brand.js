'use strict';
exports.index = function (req, res) {
  res.render('brand/index', {
    description : res.__('Brand'),
    title : res.__('Brand'),
    page:'brand'
  });
};
