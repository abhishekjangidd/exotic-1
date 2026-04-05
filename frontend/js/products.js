import api from './api';

export const products = {
  getProducts: async ({ category = '', search = '', page = 1, limit = 10 } = {}) => {
    try {
      let queryParams = new URLSearchParams({ page, limit });
      if (category) queryParams.append('category', category);
      if (search) queryParams.append('search', search);

      const response = await api.get(`/products?${queryParams.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return { products: [], total: 0 };
    }
  },

  getProductById: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }
};
