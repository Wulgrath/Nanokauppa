var sellForm = require('../models/sellform')

module.exports = function (req, res) {

  sellForm.find({}, (err, sellForms) => {
    return res.status(200).json({sellForms: sellForms})
 
  });
 }