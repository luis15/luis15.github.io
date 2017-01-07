'use strict';
/*!
 * Module dependencies.
 */
var c = {}; // Controller

['home', 'features', 'pricing', 'about', 'love',
  'team', 'terms', 'privacy', 'contact', 'confirm', 'download','brand']
.forEach(function (model) {
  // Init controllers
  c[model] = require('../app/controllers/' + model);
});

/**
 * Expose routes
 */

module.exports = function (app) {

  app.get('/', c.home.index);
  app.get('/features', c.features.index);
  app.get('/team', c.team.index);
  app.get('/pricing', c.pricing.index);
  app.get('/about', c.about.index);
  app.get('/love', c.love.index);
  app.get('/terms', c.terms.index);
  app.get('/privacy', c.privacy.index);
  app.get('/contact', c.contact.index);
  app.get('/download', c.download.index);
  app.get('/brand', c.brand.index);
  app.post('/confirm', c.confirm.index);

  app.use(function (req, res) {
    var domain = req.hostname.replace('www.', '');
    res.redirect(301, 'https://' + domain + req.originalUrl);
  });

};
