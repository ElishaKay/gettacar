const express = require('express');
const router = express.Router();

const { getCars, 
		getCarsByMake, 
		getCarsByModel, 
		getCarsByColor } = require('../controllers/cars')

router.get('/cars', getCars);
router.get('/cars/make/:make', getCarsByMake);
router.get('/cars/model/:model', getCarsByModel);
router.get('/cars/color/:color', getCarsByColor);


module.exports = router; 
