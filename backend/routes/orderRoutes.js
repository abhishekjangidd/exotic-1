const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

// Protected routes
router.use(auth);

router.post('/checkout', orderController.checkout);
router.get('/', orderController.getOrders);

module.exports = router;
