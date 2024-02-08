const Category = require('../models/categories');

// Controller functions
const categoryController = {
  createCategory: async (req, res) => {
    try {
      const { index, name, description, url } = req.body;
      const category = new Category({ index, name, description, url });
      const savedCategory = await category.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  getAllCategories: async (req, res) => {
    // Fix the syntax error here
    try {
      const categories = await Category.find();
      if (!categories) {
        throw new Error('Categories not found');
      }
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

module.exports = categoryController;
