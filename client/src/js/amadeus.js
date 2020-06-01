var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'k5taeIvJ1PM39q3AczcVCxDSuSSMAQ3x',
  clientSecret: 'fEeQPpuKJNtcfXmA'
});

amadeus.shopping.hotelOffers.get({
    cityCode : 'MAD'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});
