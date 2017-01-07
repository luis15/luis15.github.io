'use strict';

var template = require('./emailsTemplate');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('DtrgmvLiBKC6cV9aRvKnnA');

exports.sendEmail = function (templateName, to, obj, callback) {
  template.chooseTemplate(templateName, to, obj, function (message) {
    mandrill_client.messages.send({
      'message': message,
      'async': true
    }, function (result) {
      //console.log(result);
      /*
      [{
              "email": "recipient.email@example.com",
              "status": "sent",
              "reject_reason": "hard-bounce",
              "_id": "abc123abc123abc123abc123abc123"
          }]
      */
    }, function (e) {
      // Mandrill returns the error as an object with name and message keys
      console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
      // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
    callback(true);
  });
};
