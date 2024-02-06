const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemController');

router.get('/items', itemsController.getAllItems);

module.exports = router;
