const Wood = require('../models/wood');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

module.exports = app => {
  app.post('/api/product/woods', auth, admin, async (req, res) => {
    try {
      const wood = await new Wood(req.body).save();
      res.json(wood);
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  });

  app.get('/api/product/woods', async (req, res) => {
    try {
      const brands = await Wood.find({}).select('-__v');
      return res.json(brands);
    } catch (error) {
      return res.status(400).json(error);
    }
  });
};
