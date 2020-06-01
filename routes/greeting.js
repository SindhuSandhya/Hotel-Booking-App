var express = require('express');
var router = express.Router();
var Amadeus = require('amadeus');
var constants = require('../constants/amadeus_constants')


var amadeus = new Amadeus({
  clientId: constants.clientId,
  clientSecret: constants.clientSecret
});
 
/* GET users listing. */
router.get('/hello', function (req, res, next) {
    amadeus.shopping.hotelOffers.get({
        cityCode : "MAD"
    }).then(function(response){
      res.json(response.data);
    }).catch(function(responseError){
      res.json(responseError.code);
    });
});
 
module.exports = router;