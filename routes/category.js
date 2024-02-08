const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', async (req, res) => {
  try {
    const categories = await categoryController.getAllCategories();

    res.render('categories', { categories });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
