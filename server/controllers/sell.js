var     mongoose  = require('mongoose'),
        sellForm  = require('../models/sellform');


module.exports = function (req, res) {
  
  var sell   = new sellForm({
    firstname:  req.body.firstname,
    lastname:   req.body.lastname,
    email:      req.body.email,
    wallet:     req.body.wallet,
    account:    req.body.account,
    sellAmount: req.body.sellAmount
  });

  sell.save(function(err, sellForm) {
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
          to: sell.email, // list of receivers
          subject: 'Tilauksesi nanokauppaan', // Subject line
          text: '', // plain text body
          html: 'Hei '+ sell.firstname + ',' + 
          '<br><br><br>' + 
          'Tilauksesi tiedot: ' + '<br><br>' + 'Nimi: ' + sell.firstname + ' ' + sell.lastname + '<br>' +
          'Sähköposti: ' + sell.email + '<br>' +
          'Nano-lompakko: ' + sell.wallet + '<br>' +
          'Myyntimäärä: ' + sell.sellAmount + ' ' + 'NANO' + '<br>' +
          'Tilinumerosi: ' + sell.account + '<br><br>' +
          'Suorita siirto nano-lompakkoomme 2 viikon kuluessa.' // html body
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