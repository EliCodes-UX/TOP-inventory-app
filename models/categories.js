const { url } = require('inspector');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  index: Number,
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true, maxLength: 100 },
  url: String,
});

module.exports = mongoose.model('category', categorySchema);
