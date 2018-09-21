const User = require('../models/user');

const auth = require('../middleware/auth');

module.exports = app => {
  app.get('/api/users/auth', auth, (req, res) => {
    const data = {
      isAdmin: req.user.role === 0,
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
    if (!isMatch)
      return res
        .status(403)
        .json({ loginSuccess: false, message: 'Wrong password' });

    const token = user.token || (await user.generateToken());
    if (!token)
      return res
        .status(403)
        .send({ loginSuccess: false, message: 'Generate token error' });

    return res.cookie('w_auth', user.token).json({ loginSuccess: true });
  });
};
