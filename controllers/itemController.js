const Items = require('../models/items');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    res.render('items/index', { items });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
