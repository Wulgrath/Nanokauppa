var     mongoose              = require('mongoose'),
        buyForm               = require('../models/buyform');
        nodemailer            = require('nodemailer');

module.exports = function (req, res) {



  var buy   = new buyForm({
    firstname:    req.body.firstname,
    lastname:     req.body.lastname,
    email:        req.body.email,
    wallet:       req.body.wallet,
    buyAmount:    req.body.buyAmount
  });

  buy.save(function(err, buyForm) {
    var referenceId = buyForm.referenceId
    if(err) {
      console.error(err);
      return res.send(err);
    }
    res.json({ message: 'Form created!' })

    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nanokauppamies@gmail.com',
            pass: 'nanomies1234'
        }
    });
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Nanomies" <nanokauppamies@gmail.com>', // sender address
          to: req.body.email, // list of receivers
          subject: 'Tilauksesi viitteellä ' + referenceId, // Subject line
          text: '', // plain text body
          html: 'Hei '+ buy.firstname + ',' + 
          '<br><br><br>' + 
          'Tilauksesi tiedot: ' + '<br><br>' + 'Nimi: ' + buy.firstname + ' ' + buy.lastname + '<br>' +
          'Sähköposti: ' + buy.email + '<br>' +
          'Nano-lompakko: ' + buy.wallet + '<br>' +
          'Ostohinta: ' + buy.buyAmount + '€' + '<br>' +
          'Viitenumero: ' + referenceId + '<br><br>' +
          'Suorita maksu tilillemme 2 viikon kuluessa. Lisää maksun viitteeksi yllä annettu viitenumero. Lähetämme ostohintaa vastaavan Nano-määrän lompakkoosi saatuamme maksun tilillemme.' // html body
      };
  
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
  });
  });
    
  
  

}