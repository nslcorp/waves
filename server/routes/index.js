const express = require('express');
const users = require('./users');
// const brand = require('./brand');
// const wood = require('./wood');
// const product = require('./product');

const router = express.Router();

router.use('/users', users);
// router.use('/brand', brand);
// router.use('/wood', wood);
// router.use('/product', product);

module.exports = router;
