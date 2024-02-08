const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
console.log('router');
// Define routes using the controller methods
// router.get('/', async (req, res) => {
//   try {
//     const categories = await categoryController.getAllCategories();
//     res.render('categories', { categories });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

router.get('/', categoryController.getAllCategories);

module.exports = router;
