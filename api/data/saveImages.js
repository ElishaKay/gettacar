const { carsAvailable } = require('./carsAvailable');
const axios = require('axios');
const Car = require('../models/Car');
const mongoose = require('mongoose')
require('dotenv').config()

mongoose
    .connect(process.env.MONGO_DEV, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => true)
    .catch(err => {
        console.log(err);
    });
// console.log('testData: ',carsAvailable) 

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

carsAvailable.forEach(function (car) {
	// sleep(2000);

	let { carID, make, model, color } = car; 

	axios.get(`https://api.carsxe.com/images?key=${process.env.CARSXE_KEY}&make=${make}&model=${model}&color=${color}&format=json`)
	  .then(function (response) {
	    // handle success
	    let imageURL = response.data.images[0].height == 300 ? response.data.images[0].link : response.data.images[1].link;

	    let car = new Car({ carID, make, model, color, imageURL });

		car.save((err, data) => {
		    if (err) {
		        console.log('err', err)
		    } else {
		    	console.log('car saved successful')	
		    }
		});

	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  })  
  
});


//   .then(function () {
//     // always executed
//   });


