const cloudinary = require('cloudinary');
const formidable = require('express-formidable');
const mongoose = require('mongoose');

const BaseController = require('./BaseController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const User = require('../models/user');

class UserController extends BaseController {
  constructor() {
    super();

    this.auth = [auth, this._getUserData, this.sendResponse];
    this.logout = [auth, this._logout, this.sendResponse];
    this.register = [this._register, this.sendResponse];
    this.login = [
      this._findUserByEmail,
      this._matchPassword,
      this._generateToken,
      this._setCookie,
      this.sendResponse
    ];

    this.uploadImage = [auth, admin, formidable(), this._uploadToCloudinary, this.sendResponse];
    this.removeImage = [auth, admin, this._removeImage, this.sendResponse];

    this.addToCart = [auth, this._findUserById, this._addToCart, this.sendResponse];
  }

  async _getUserData(req, res, next) {
    console.log('_getUserData...');
    req.responseData = {
      isAdmin: req.user.role !== 0,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastName: req.user.lastName,
      cart: req.user.cart,
      history: req.user.history
    };

    next();
  }

  async _logout(req, res, next) {
    console.log('_logout...');
    try {
      await User.findOneAndUpdate({ _id: req.user._id }, { token: '' });
      res.responseData = { success: true };

      next();
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  }

  async _register(req, res, next) {
    try {
      const user = await new User(req.body).save();

      req.responseData = user;
      next();
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  }

  async _findUserByEmail(req, res, next) {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User was not found by email'
      });
    }

    req.user = user;
    next();
  }

  async _findUserById(req, res, next) {
    let user = await User.findOne({ _id: req.user._id });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User was not found'
      });
    }

    req.user = user;
    next();
  }

  async _matchPassword(req, res, next) {
    const isMatch = await req.user.comparePassword(req.body.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Wrong password' });
    }

    next();
  }

  async _generateToken(req, res, next) {
    req.user.token = req.user.token || (await req.user.generateToken());

    if (!req.user.token) {
      return res.status(400).send({ success: false, message: 'Generate token error' });
    }

    next();
  }

  _setCookie(req, res, next) {
    res.cookie('w_auth', req.user.token);

    res.responseData = { success: true };

    next();
  }

  async _uploadToCloudinary(req, res, next) {
    try {
      const data = await cloudinary.uploader.upload(req.files.file.path, {
        public_id: Date.now(),
        resource_type: 'auto'
      });

      req.responseData = {
        public_id: data.public_id,
        url: data.url
      };

      next();
    } catch (error) {
      return res.status(406).json(error);
    }
  }

  async _addToCart(req, res, next) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          cart: {
            id: mongoose.Types.ObjectId(req.body.id),
            quantity: 1,
            date: Date.now()
          }
        }
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(403).json({
        loginSuccess: false,
        message: 'Error in add data into user cart'
      });
    }

    req.responseData = updatedUser.cart;
    next();
  }

  async _removeImage(req, res, next) {
    try {
      await cloudinary.uploader.destroy(req.query.id);

      req.responseData = { success: true };
      next();
    } catch (error) {
      return res.status(406).json({ success: false, error });
    }
  }
}

module.exports = UserController;
