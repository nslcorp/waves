const formidable = require('express-formidable');
const cloudinary = require('cloudinary');
const User = require('../models/user');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const mongoose = require('mongoose');

module.exports = app => {
  app.get('/api/users/auth', auth, (req, res) => {
    const data = {
      isAdmin: req.user.role !== 0,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastName: req.user.lastName,
      cart: req.user.cart,
      history: req.user.history
    };
    res.json(data);
  });

  app.get('/api/users/logout', auth, async (req, res) => {
    try {
      await User.findOneAndUpdate({ _id: req.user._id }, { token: '' });

      return res.json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  });

  app.post('/api/users/register', async (req, res) => {
    try {
      const user = await new User(req.body).save();
      res.json({ success: true, user });
    } catch (error) {
      return res.json({ success: false, error });
    }
  });

  app.post('/api/users/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(403).json({
        loginSuccess: false,
        message: 'Auth failed, email was not find'
      });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) return res.status(403).json({ loginSuccess: false, message: 'Wrong password' });

    const token = user.token || (await user.generateToken());
    if (!token)
      return res.status(403).send({ loginSuccess: false, message: 'Generate token error' });

    return res.cookie('w_auth', user.token).json({ loginSuccess: true });
  });

  app.post('/api/users/uploadimage', /*auth, admin*/ formidable(), async (req, res) => {
    try {
      const data = await cloudinary.uploader.upload(req.files.file.path, {
        public_id: Date.now(),
        resource_type: 'auto'
      });

      res.json({
        public_id: data.public_id,
        url: data.url
      });
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.get(
    '/api/users/removeimage',
    /*auth,admin,*/ async (req, res) => {
      let image_id = req.query.id;

      try {
        await cloudinary.uploader.destroy(req.query.id);
        res.status(200).send('ok');
      } catch (error) {
        res.status(400).json({ succes: false, error });
      }
    }
  );

  app.post('/api/users/add-to-cart', auth, async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });

    if (!user) {
      return res.status(403).json({
        loginSuccess: false,
        message: 'User was not found'
      });
    }

    //const duplicate = user.cart.some(item => item.id === req.query.id);

    const userUpdated = await User.findOneAndUpdate(
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

    if (!userUpdated) {
      return res.status(403).json({
        loginSuccess: false,
        message: 'Error in add data into user cart'
      });
    }

    res.json(userUpdated.cart);
  });
};
