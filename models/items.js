const { url } = require('inspector');
const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const itemsSchema = new mongoose.Schema({
  index: Number,
  name: String,
  description: String,
  price: Number,
  category: String,
  numberInInventory: Number,
  URL: String,
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;
