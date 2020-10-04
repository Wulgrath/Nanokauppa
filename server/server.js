
var   express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      router        = require('./router'),
      path          = require('path'),
      mongoose      = require('mongoose'),
      nodemailer    = require('nodemailer');

mongoose.connect('mongodb://localhost/nanokauppa')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS käyttöönotto
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

var port = process.env.PORT || 3000;

router(app);


app.listen(port, function() {
  console.log('Listening on port ' + port);
});