const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    maxLength: 100
  }
});

const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
