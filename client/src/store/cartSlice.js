import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] }

const sameCustomization = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { product, customizations = {} } = action.payload
      const customizationPrice = Object.values(customizations || {}).reduce(
        (sum, c = {}) => sum + Number(c.price_modifier || 0),
        0
      )

      const existing = state.items.find(
        (i) => i.productId === product.id && sameCustomization(i.customizations, customizations)
      )

      if (existing) {
        existing.qty += 1
        existing.lineTotal = (existing.base_price + existing.customizationPrice) * existing.qty
      } else {
        const item = {
          id: Date.now().toString(),
          productId: product.id,
          name: product.name,
          base_price: Number(product.base_price),
          customizationPrice,
          customizations,
          qty: 1,
          lineTotal: Number(product.base_price) + customizationPrice,
        }
        state.items.push(item)
      }
    },

    decrementItem(state, action) {
      const id = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        item.qty -= 1
        if (item.qty <= 0) state.items = state.items.filter((i) => i.id !== id)
        else item.lineTotal = (item.base_price + item.customizationPrice) * item.qty
      }
    },

    removeItem(state, action) {
      const id = action.payload
      state.items = state.items.filter((i) => i.id !== id)
    },

    clearCart(state) {
      state.items = []
    },
  },
})

export const { addItem, decrementItem, removeItem, clearCart } = cartSlice.actions
export const selectCartItems = (s) => s.cart.items
export const selectCartCount = (s) => s.cart.items.reduce((sum, i) => sum + i.qty, 0)
export const selectCartTotal = (s) => s.cart.items.reduce((sum, i) => sum + i.lineTotal, 0)

export default cartSlice.reducer
