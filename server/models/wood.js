const mongoose = require('mongoose');

const woodSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    maxLength: 100
  }
});

const Brand = mongoose.model('Wood', woodSchema);
module.exports = Brand;
