// const {carsAvailable:cars} = require('../data/carsAvailable')
const Car = require('../models/Car');
const uniqueValues = (data, key) => [...new Set(data.map(item => item[key]))];

exports.getCarsAndFilters = async (req, res) => {
  console.log('api/cars called!')
  const cars = await Car.find({});

  let uniqueMakes = uniqueValues(cars, 'make')
  let uniqueModels = uniqueValues(cars, 'model')
  let uniqueColors = uniqueValues(cars, 'color')

  let allFilters = {uniqueMakes, uniqueModels, uniqueColors}
  // console.log('AllFilters: ', AllFilters)

  res.json({cars, allFilters});
}

exports.getCarsByMake = async (req, res) => {
  console.log('api/articles category called!');

  
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