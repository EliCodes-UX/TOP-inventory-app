const { url } = require('inspector');
const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const itemsSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  numberInInventory: Number,
  URL: String,
});

const Items = mongoose.model('Items', productSchema);

module.exports = Items;
