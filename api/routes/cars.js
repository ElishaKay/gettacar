const express = require('express');
const router = express.Router();

const { getCarsAndFilters, 
		getCarsByMake, 
		getCarsByModel, 
		getCarsBySearch } = require('../controllers/cars')

router.get('/cars', getCarsAndFilters);
router.get('/cars/make/:make', getCarsByMake);
router.get('/cars/model/:model', getCarsByModel);
router.get('/cars/search/:search', getCarsBySearch);

module.exports = router; 
