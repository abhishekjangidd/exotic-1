const { Product, CustomizationOption } = require('../models');

const ProductController = {
  async fetchAll(req, res) {
    try {
      const products = await Product.findAll({ include: [{ model: CustomizationOption, as: 'customizations' }] });
      return res.json(products);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch products' });
    }
  },

  async fetchByCategory(req, res) {
    try {
      const { category } = req.params;
      const products = await Product.findAll({
        where: { category },
        include: [{ model: CustomizationOption, as: 'customizations' }],
      });
      return res.json(products);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch products by category' });
    }
  },
};

module.exports = ProductController;
