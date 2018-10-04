const mongoose = require('mongoose');
const Product = require('../models/product');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const util = require('util');

module.exports = app => {
  app.post('/api/product/article', auth, admin, async (req, res) => {
    try {
      const product = await new Product(req.body).save();
      res.json(product);
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  });

  //api/product/articles_by_id?id=fsdf,fsdf,ewcv&type=single|array
  app.get('/api/product/articles_by_id', async (req, res) => {
    // const type = req.query.type || 'single';
    // let items = req.query.id;

    // if (type === 'array') {
    //   items = req.query.id.split(',').map(id => {
    //     return mongoose.Types.ObjectId(id);
    //   });
    //   console.log(items);
    // }

    try {
      // const products = await Product.find({ _id: { $in: items } })
      const product = await Product.findOne({ _id: req.query.id })
        .populate('brand')
        .populate('wood')
        .exec();
      res.json(product);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  //articles?sortBy=createdAd&order=desc&limit=4
  //articles?sortBy=sold&order=desc&limit=4
  app.get('/api/product/articles', async (req, res) => {
    const order = req.query.order || 'asc';
    const sortBy = req.query.sortBy || '_id';
    const limit = parseInt(req.query.limit) || 100;
    const skip = req.query.skip || 0;

    try {
      const products = await Product.find({})
        .populate('wood')
        .populate('brand')
        .sort([[sortBy, order]])
        .limit(limit)
        .exec();

      res.json(products);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.post('/api/product/shop', async (req, res) => {
    const order = req.body.order || 'desc';
    const sortBy = req.body.sortBy || '_id';
    const limit = parseInt(req.body.limit, 10) || 100;
    const skip = parseInt(req.body.skip, 10);

    const args = {};

    for (let key in req.body.filters) {
      if (req.body.filters[key].length > 0) {
        if (key === 'price') {
          args[key] = {
            $gte: req.body.filters[key][0],
            $lte: req.body.filters[key][1]
          };
        } else {
          args[key] = req.body.filters[key];
        }
      }
    }

    args['publish'] = true;

    try {
      const products = await Product.find(args)
        .populate('brand')
        .populate('wood')
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec();

      res.json({ products, size: products.length });
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
