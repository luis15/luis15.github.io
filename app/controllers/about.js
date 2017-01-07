'use strict';

  exports.index = function (req, res) {
      res.render('about/index', {
        description : res.__('The BdeB is a brazilian company, that belives everybody can have opportunity by the new ways of payments.'),
        title : res.__('About us'),
        page:'about'
      });
  };
