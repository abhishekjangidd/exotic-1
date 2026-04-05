import api from './api';
import { auth } from './auth';

export const cart = {
  getCart: async () => {
    try {
      const response = await api.get('/cart');
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      return [];
    }
  },

  addToCart: async (productId, quantity = 1) => {
    if (!auth.isAuthenticated()) {
      alert('Please login to add items to cart');
      window.location.href = '/pages/login.html';
      return null;
    }
    
    try {
      const response = await api.post('/cart/add', { productId, quantity });
      alert('Added to cart successfully!');
      return response.data;
    } catch (error) {
      alert(error.response?.data?.message || 'Error adding to cart');
      return null;
    }
  },

  updateQuantity: async (cartItemId, quantity) => {
    try {
      const response = await api.put(`/cart/update/${cartItemId}`, { quantity });
      return response.data;
    } catch (error) {
      console.error('Error updating cart:', error);
      return null;
    }
  },

  removeItem: async (cartItemId) => {
    try {
      await api.delete(`/cart/remove/${cartItemId}`);
      return true;
    } catch (error) {
      console.error('Error removing item:', error);
      return false;
    }
  },

  checkout: async () => {
    try {
      const response = await api.post('/orders/checkout');
      return { success: true, order: response.data };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Checkout failed' };
    }
  }
};

// Expose globally for inline onclick handlers
window.addToCart = (productId) => cart.addToCart(productId);
