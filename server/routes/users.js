const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers');

router.get('/auth', usersController.auth);

router.get('/logout', usersController.logout);

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.post('/uploadimage', usersController.uploadImage);

// router.get('/removeimage', usersController.removeimage);*/

module.exports = router;
