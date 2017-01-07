'use strict'

exports.chooseTemplate = function (templateName, to, obj, cb) {
  console.log('obj:\n');
  console.log(obj);
  if (templateName === 'formulario') {
    var message = {
      'html': '<html><body style="margin:30px; font-family:" Lato ",sans-serif"><meta charset="UTF-8"><div style="text-align:center"><p>'+obj['Mensagem']+'</p><p>Nome:'+obj['nome']+'</p><p> Organização:'+obj['Organização']+'</p><p> Cargo: '+obj['Ocupação']+' </p><p>Email: '+obj['email']+' </p><p>Telefone: '+obj['telefone']+'</p></div></html>',
      'text': 'Test',
      'subject': 'Mensagem de contato do site',
      'from_email': 'i@classapp.com.br',
      'from_name': 'Banco de Bits',
      'to': to,
      'headers': {
          'Reply-To': obj['email']
        }
    }
    //console.log(message);
    cb(message);
  }
};
