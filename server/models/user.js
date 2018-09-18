const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const SALT_LENGTH = 10;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 4
  },
  name: {
    type: String,
    required: true,
    maxLength: 20
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 20
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  token: String
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(SALT_LENGTH);
      const hash = await bcrypt.hash(this.password, salt);

      this.password = hash;
      next();
    } catch (error) {
      throw next(error);
    }
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateToken = async function() {
  const token = jwt.sign(this.id, process.env.SECRET);
  this.token = token;
  await this.save();

  return token;
};

// userSchema.statics.findByToken = async function(token) {
//   const id = await jwt.verify(token, process.env.SECRET);
//   console.log('here...1');
//   const user = await this.findOne({ _id: id, token });
//   console.log('here...2');
//   return user;
// };

const User = mongoose.model('User', userSchema);
module.exports = User;
