const BaseController = require('./BaseController');
const cloudinary = require('cloudinary');
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

    this.uploadImage = [auth, admin, formidable, this._uploadToCloudinary];

    this.addToCart = [auth, this._findUserByEmail, this._addToCart];
  }

  _getUserData = (req, res, next) => {
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
  };

  _logout = async (req, res, next) => {
    try {
      await User.findOneAndUpdate({ _id: req.user._id }, { token: '' });
      res.responseData = { success: true };
    } catch (error) {
      next(error);
    }

    const user = await User.findOneAndUpdate({ _id: req.user._id }, { token: '' });

    if (!user) {
      // const error = 'Logout error. User was not found';
      const error = new Error('Logout error. User was not found');

      res.responseStatus = 400;
      next(error);
    }

    res.responseData = { success: true };
    next(error);
  };

  _register = async (req, res, next) => {
    try {
      const user = await new User(req.body).save();

      req.responseData = user;
      next();
    } catch (error) {
      return res.json({ success: false, error });
    }
  };

  _findUserByEmail = async (req, res, next) => {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(403).json({
        loginSuccess: false,
        message: 'Auth failed, email was not find'
      });
    }

    res.user = user;
    next();
  };

  _matchPassword = async (req, res) => {
    const isMatch = await req.user.comparePassword(req.body.password);

    if (!isMatch) {
      return res.status(403).json({ loginSuccess: false, message: 'Wrong password' });
    }

    next();
  };

  _generateToken = async (req, res, next) => {
    user.token = user.token || (await user.generateToken());
    if (!user.token) {
      return res.status(403).send({ loginSuccess: false, message: 'Generate token error' });
    }

    next();
  };

  _setCookie = (req, res, next) => {
    res.cookie('w_auth', user.token);

    res.responseData = { success: true };

    next();
  };

  _uploadToCloudinary = async (req, res, next) => {
    try {
      const data = await cloudinary.uploader.upload(req.files.file.path, {
        public_id: Date.now(),
        resource_type: 'auto'
      });

      res.responseData = {
        public_id: data.public_id,
        url: data.url
      };
    } catch (error) {
      res.status(400).json(error);
    }
  };

  _addToCart = async (req, res, next) => {
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
  };
}
