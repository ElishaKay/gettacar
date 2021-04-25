const news = require('gnews');
const geoip = require('geoip-lite');
const {countryCodes} = require('../helpers/countryCodes');

exports.getCars = async (req, res) => {
  console.log('api/cars called!')
  const headlines = await news.headlines({n : 9});

  res.json(headlines);
}

exports.getCarsByMake = async (req, res) => {
  console.log('api/articles category called!');

  const headlines = await news.topic(req.params.category.toUpperCase(), {n : 9});
  res.json(headlines);
}


exports.getCarsByModel = async (req, res) => {
  console.log('api/articles country called!');

  const headlines = await news.geo(req.params.country.toUpperCase(), {n : 9});
  res.json(headlines);
}

exports.getCarsByColor = async (req, res) => {
  console.log('ran getCountryNewsByIP controller func');
  let ip = req.params.ip;
  console.log('ip: ',ip)

  let geo = geoip.lookup(ip);
  console.log('geo',geo);
  let selectedCountry = countryCodes[geo.country];

  const headlines = await news.geo(selectedCountry.toUpperCase(), {n : 9});
  res.json({selectedCountry, headlines});
}