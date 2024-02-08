const Category = require('../models/categories');

const categoryController = {
  getAllCategories: async (req, res) => {
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
