const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/products', ProductController.fetchAll);
router.get('/products/category/:category', ProductController.fetchByCategory);

module.exports = router;
