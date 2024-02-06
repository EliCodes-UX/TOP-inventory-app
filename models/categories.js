const { url } = require('inspector');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  description: { String, maxLength: 100 },
  url: url,
});

module.exports = mongoose.model('category', categorySchema);
