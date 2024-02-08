const Category = require('../models/categories');

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      if (!categories || categories.length === 0) {
        throw new Error('Categories not found');
      }
      // Assuming you have a view named 'category_list.ejs'
      res.render('categories', { categories });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = categoryController;
