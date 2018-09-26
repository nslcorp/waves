const Brand = require('../models/brand');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

module.exports = app => {
  app.post('/api/product/brands', auth, admin, async (req, res) => {
    try {
      const brand = await new Brand(req.body).save();
      res.json(brand);
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  });

  app.get('/api/product/brands', async (req, res) => {
    try {
      const brands = await Brand.find().select('-__v');
      return res.json(brands);
    } catch (error) {
      return res.status(400).json(error);
    }
  });
};
