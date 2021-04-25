const { carsAvailable } = require('./testData');
const axios = require('axios');
const Car = require('../models/Car');

// console.log('testData: ',carsAvailable) 

carsAvailable.forEach(function (value) {
  console.log(value);

  
  
});

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


// let car = new Car({ name, slug });

// category.save((err, data) => {
//     if (err) {
//         return res.status(400).json({
//             error: errorHandler(err)
//         });
//     }
//     res.json(data);
// });