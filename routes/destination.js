var express = require('express');
var router = express.Router();
var Amadeus = require('amadeus');
var constants = require('../constants/amadeus_constants')


var amadeus = new Amadeus({
  clientId: constants.clientId,
  clientSecret: constants.clientSecret
});


router.get('/hello', (req, res, next) =>{
    var qname = req.query.dest || "";
    if(!qname.length) {
      res.status(404).json({"msg": 'Invalid name in query string'});
      res.end();
      return;
    }
    amadeus.shopping.hotelOffers.get({
        cityCode : qname
    }).then(function(response){
      res.json(response.data);
    }).catch(function(responseError){
      res.json(responseError.code);
    });
  });

 
module.exports = router;