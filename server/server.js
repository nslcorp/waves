const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

require('./routes/userRoutes')(app);
require('./routes/brandRoutes')(app);
require('./routes/woodRoutes')(app);
require('./routes/woodRoutes')(app);
require('./routes/productRoutes')(app);

const port = process.env.PORT || '3002';

app.listen(port, () => console.log('Server running on: ' + port));
