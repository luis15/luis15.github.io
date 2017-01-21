'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var inspector = require('schema-inspector');
var email = require('../../lib/email');

exports.index = function (req, res) {
  var ddi = (req.body.ddi).substring(3);

  let destinatario = 'luis@bancodebits.com.br, yuri@bancodebits.com.br';
  let assunto = 'Contato recebido de '+ req.body.name;
  let mensagem = '<p>Contato recebido de' + req.body.name +'</p>';
  mensagem += '<p>Email: '+ String(req.body.email) + '</p>';
  mensagem += '<p>Telefone: '+ String((ddi) + (req.body.phone)) + '</p>';
  mensagem += '<p>Trabalha como: '+ String(req.body.job) + '</p>';
  mensagem += '<p>Trabalha em: '+  String(req.body.organization) + '</p>';
  mensagem += '<p>Deixou a seguinte mensagem</p>';
  mensagem += '<p>'+String(req.body.comment)+'</p>';

  email.enviarEmailContato(destinatario, assunto, mensagem);

  }
