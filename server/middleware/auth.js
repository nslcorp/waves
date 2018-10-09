const User = require('../models/user');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const token = req.cookies.w_auth;
  console.log('here... auth');

  try {
    const id = await jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ _id: id, token });
    console.log('here... findOne');

    if (!user) return res.status(400).json({ isAuth: false, message: 'User was not found' });

    req.token = user.token;
    req.user = user;

    next();
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = auth;
