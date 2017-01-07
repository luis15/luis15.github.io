'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var inspector = require('schema-inspector');
var emailSender = require('../../lib/email');


function toRD(obj) {
  request({
          url: 'https://www.rdstation.com.br/api/1.3/conversions',
          method: 'POST',
          json: true,
          headers: {
            'content-type': 'application/json',
          },
          body: obj
        },
        function (error, resp, body) {
          console.log(body);
          if (error) {
            return console.log('Integração com RDStation falhou:', err);
          }
          //console.log('Integração com RDStation OK! Resposta: ', body);
        });
}

exports.index = function (req, res) {
  var ddi = (req.body.ddi).substring(3);
  var rdObj = {
    'email': String(req.body.email),
    'nome': String(req.body.name).replace(/[&\/\\#,+=_()$~%.'':;*?<>{}@¨!0-9]/g, ''),
    'telefone': String((ddi) + (req.body.phone)),
    'Ocupação': String(req.body.job),
    'Organização': String(req.body.organization),
    'Número de Alunos': String(req.body.members),
    'Mensagem': String(req.body.comment),
    'identificador': 'Contact Site',
    'token_rdstation': '6e3ff9b1667059eae7cc1ea989d22d16'
  };
//  toRD(rdObj); TODO: ver uma base de leads para nós
  console.log(rdObj);
  var to = [{
                 email: 'luis@bancodebits.com.br',
               }];
  emailSender.sendEmail('formulario',to, rdObj, function (send) {});
  var to = [{
                 email: 'yuri@bancodebits.com.br',
               }];
  emailSender.sendEmail('formulario',to, rdObj, function (send) {});

  res.render('confirm/index', {
    description : res.__('BdeB have received your data'),
    title : res.__('Success'),
    page:'confirm'
  });

};
