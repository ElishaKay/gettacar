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

  res.json({cars, allFilters});
}

exports.getCarsByMake = async (req, res) => {
  const cars = await Car.find({make: req.params.make});  
  res.json({cars});
}

exports.getCarsByModel = async (req, res) => {
  const cars = await Car.find({model: req.params.model});  
  res.json({cars});
}

exports.getCarsBySearch = async (req, res) => {
  console.log('ran getCountryNewsByIP controller func');
  let search = req.params.search.toLowerCase();
  search = search.charAt(0).toUpperCase() + search.slice(1);

  const cars = await Car.find({$or:[{color: { "$regex": search }},
                                    {make:{ "$regex": search }},
                                    {model:{ "$regex": search }}]});

  res.json({cars});
}