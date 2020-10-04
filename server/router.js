var BuyController         = require('./controllers/buy'),
    SellController        = require('./controllers/sell'),
    GetBuyFormController  = require('./controllers/getbuyforms'),
    GetSellFormController = require('./controllers/getsellforms'),
    express               = require('express'),
    app                   = express();

module.exports = function(app) {
  let router = express.Router();

  router.post('/buy', BuyController);
  router.post('/sell', SellController);
  router.get('/getbuyforms', GetBuyFormController);
  router.get('/getsellforms', GetSellFormController);
  app.use('/api', router);
}
