var buyForm = require('../models/buyform')

module.exports = function (req, res) {

 buyForm.find({}, (err, buyForms) => {
   return res.status(200).json({buyForms: buyForms})
 });
}
