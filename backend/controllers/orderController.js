const { Order, OrderItem, Cart, Product, sequelize } = require('../models');

// Checkout (create order from cart)
exports.checkout = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    // 1. Get user cart
    const cartItems = await Cart.findAll({
      where: { userId: req.user.id },
      include: [{ model: Product }],
      transaction
    });

    if (!cartItems || cartItems.length === 0) {
      await transaction.rollback();
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // 2. Calculate total amount
    let totalAmount = 0;
    cartItems.forEach(item => {
      totalAmount += item.quantity * item.Product.price;
    });

    // 3. Create Order
    const order = await Order.create({
      userId: req.user.id,
      totalAmount: totalAmount,
      status: 'Completed' // simple status for demo
    }, { transaction });

    // 4. Create OrderItems from Cart
    const orderItems = cartItems.map(item => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.Product.price
    }));

    await OrderItem.bulkCreate(orderItems, { transaction });

    // 5. Clear Cart
    await Cart.destroy({
      where: { userId: req.user.id },
      transaction
    });

    await transaction.commit();

    // 6. Return response
    const completeOrder = await Order.findByPk(order.id, {
      include: [{ model: OrderItem }]
    });

    res.status(201).json(completeOrder);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ message: 'Server Error during checkout' });
  }
};

// Get User Orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id },
      include: [{ model: OrderItem, include: [Product] }],
      order: [['createdAt', 'DESC']]
    });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
