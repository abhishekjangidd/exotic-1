const { Cart, Product } = require('../models');

// Get user cart
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
      where: { userId: req.user.id },
      include: [{ model: Product }]
    });
    res.json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // Check if product exists
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if already in cart
    let cartItem = await Cart.findOne({
      where: { userId: req.user.id, productId }
    });

    if (cartItem) {
      cartItem.quantity += parseInt(quantity || 1);
      await cartItem.save();
    } else {
      cartItem = await Cart.create({
        userId: req.user.id,
        productId,
        quantity: parseInt(quantity || 1)
      });
    }

    // Fetch the updated item with product details
    const updatedCartItem = await Cart.findByPk(cartItem.id, {
      include: [{ model: Product }]
    });

    res.status(201).json(updatedCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update cart quantity
exports.updateCart = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItemId = req.params.id;

    let cartItem = await Cart.findOne({
      where: { id: cartItemId, userId: req.user.id }
    });

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    if (quantity <= 0) {
      await cartItem.destroy();
      return res.json({ message: 'Item removed from cart' });
    } else {
      cartItem.quantity = quantity;
      await cartItem.save();
      
      const updatedCartItem = await Cart.findByPk(cartItem.id, {
        include: [{ model: Product }]
      });
      return res.json(updatedCartItem);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Remove from cart
exports.removeFromCart = async (req, res) => {
  try {
    const cartItemId = req.params.id;

    const cartItem = await Cart.findOne({
      where: { id: cartItemId, userId: req.user.id }
    });

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    await cartItem.destroy();
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
