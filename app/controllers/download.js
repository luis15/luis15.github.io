'use strict';
exports.index = function (req, res) {
  res.render('download/index', {
    description : res.__('Download'),
    title : res.__('Download'),
    page:'download'
  });
};
