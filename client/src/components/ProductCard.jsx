import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const [selections, setSelections] = useState(() => {
    const init = {}
    ;(product.customizations || []).forEach((c) => {
      init[c.type] = (c.choices && c.choices[0]) || null
    })
    return init
  })

  const handleChange = (type, idx) => {
    const choice = product.customizations.find((c) => c.type === type).choices[idx]
    setSelections((s) => ({ ...s, [type]: choice }))
  }

  const handleAdd = () => dispatch(addItem({ product, customizations: selections }))

  return (
    <div className="bg-gray-900 text-white p-4 rounded shadow">
      <img src={product.image_url} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-sm">${product.base_price}</p>

      {(product.customizations || []).map((c) => (
        <div key={c.type} className="mt-2">
          <label className="block text-xs uppercase">{c.type}</label>
          <select
            className="w-full mt-1 bg-gray-800 p-2"
            value={(selections[c.type] && selections[c.type].name) || ''}
            onChange={(e) => {
              const idx = e.target.selectedIndex
              handleChange(c.type, idx)
            }}
          >
            {c.choices && c.choices.map((ch, i) => (
              <option key={i} value={ch.name}>{ch.name} {ch.price_modifier ? `(+${ch.price_modifier})` : ''}</option>
            ))}
          </select>
        </div>
      ))}

      <button onClick={handleAdd} className="mt-3 w-full bg-emerald-700 py-2 rounded">Add to Cart</button>
    </div>
  )
}
