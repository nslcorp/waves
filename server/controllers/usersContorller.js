const cloudinary = require('cloudinary');
const User = require('../models/user');

const doAuth = (req, res) => {
  const { role, email, name, lastName, cart, history } = req.user;

  const data = {
    isAdmin: role === 0,
    isAuth: true,
    email,
    name,
    lastName,
    cart,
    history
  };
  res.json(data);
};

const doLogout = async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.user._id }, { token: '' });

    return res.json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const doRegister = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, error });
  }
};

const doLogin = async (req, res) => {
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
  if (!token) return res.status(403).send({ loginSuccess: false, message: 'Generate token error' });

  return res.cookie('w_auth', user.token).json({ loginSuccess: true });
};

// function uploadAvatar() {
//   return [formidable(), prepareImgData, doUploadImg, someClass.sendResponse];
// }

// async function prepareImgData(req, res, next) {
//   req.cloudinaryResult = await cloudinary.uploader.upload(req.files.file.path, {
//     public_id: Date.now(),
//     resource_type: 'auto'
//   });
//
//   if (!req.cloudinaryResult) {
//     const err = new Error('bla');
//
//     return next(err);
//   }
//
//   next();
// }
//
// function doUploadImg(req, res, next) {
//   const { public_id, url } = req.cloudinaryResult;
//
//   if (public_id < 123321) {
//     const err = new Error('another');
//     return next(err);
//   }
//
//   req.responceData = {
//     public_id,
//     url
//   };
//
//   next();
// }

const doUploadImage = async (req, res) => {
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
};

const doRemoveImage = async (req, res) => {
  try {
    await cloudinary.uploader.destroy(req.query.id);
    res.status(200).send('ok');
  } catch (error) {
    res.status(400).json({ succes: false, error });
  }
};

module.exports = {
  doAuth,
  doLogout,
  doRegister,
  doLogin,
  doUploadImage,
  doRemoveImage
  // uploadAvatar
};
