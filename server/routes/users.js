const express = require('express');
const router = express.Router();

const formidable = require('express-formidable');
const auth = require('../middleware/auth');
const { usersController } = require('../controllers');

router.get('/auth', auth, usersController.doAuth);
router.get('/logout', auth, usersController.doLogout);
router.get('/removeimage', /*,auth,admin,*/ usersController.doRemoveImage);
router.post('/register', usersController.doRegister);
router.post('/login', usersController.doLogin);
// router.post('/uploadimage', /*auth, admin*/ formidable(), usersController.doUploadImage);

router.post('/uploadimage', usersController.doUploadImage);

module.exports = router;
