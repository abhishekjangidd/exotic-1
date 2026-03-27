import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'

export default function HeroSection() {
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('/api/products')
      .then((r) => setProduct(r.data[0]))
      .catch(() => {})
  }, [])

  if (!product) return <div className="p-8 bg-emerald-900 text-white">Loading...</div>

  const handleAdd = () => {
    const defaultCustomizations = {}
    ;(product.customizations || []).forEach((c) => {
      defaultCustomizations[c.type] = (c.choices && c.choices[0]) || null
    })
    dispatch(addItem({ product, customizations: defaultCustomizations }))
  }

  return (
    <section className="bg-emerald-900 text-white p-12 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">Featured: {product.name}</h1>
        <p className="mt-2">Rich, creamy frappuccino</p>
        <div className="mt-4">
          <span className="text-2xl font-semibold">${product.base_price}</span>
          <button onClick={handleAdd} className="ml-4 bg-black px-4 py-2 rounded">Add to Cart</button>
        </div>
      </div>
      <img src={product.image_url} alt={product.name} className="w-64 h-48 object-cover rounded" />
    </section>
  )
}
