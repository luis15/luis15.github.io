var nodemailer = require('nodemailer');

var transporte = nodemailer.createTransport({
  service: 'Zoho',
  auth: {
    user: 'contato@bancodebits.com.br',
    pass: 'querofalarcombdeb'
  }
});

exports.enviarEmailContato = function(destinatario, assunto, mensagem){
  var email = {
    from: 'contato@bancodebits.com.br',
    to: destinatario, // Quem receberá
    subject: assunto,  // Um assunto bacana :-)
    html: mensagem // O conteúdo do e-mail
  };

  transporte.sendMail(email, function(err, info){
    if(err)
      throw err;
    console.log('Email enviado! Leia as informações adicionais: ', info);
  });
}
