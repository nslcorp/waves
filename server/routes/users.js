const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers');

router.get('/auth', usersController.auth);
router.get('/logout', usersController.logout);
router.get('/removeimage', usersController.removeImage);

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.post('/uploadimage', usersController.uploadImage);
router.post('/add-to-cart', usersController.addToCart);

module.exports = router;
