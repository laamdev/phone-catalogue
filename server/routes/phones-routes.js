const express = require('express');
const phonesControllers = require('../controllers/phones-controllers');
const router = express.Router();

//ROUTES
router.get('/', phonesControllers.getPhones);
router.get('/:phoneId', phonesControllers.getPhoneById);

module.exports = router;
