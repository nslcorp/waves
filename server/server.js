const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');

const routes = require('./routes');

require('dotenv').config();

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', routes);

// require('./routes/userRoutes')(app);
require('./routes/brandRoutes')(app);
require('./routes/woodRoutes')(app);
require('./routes/woodRoutes')(app);
require('./routes/productRoutes')(app);

const port = process.env.PORT || '3002';
app.listen(port, () => console.log('Server running on: ' + port));
