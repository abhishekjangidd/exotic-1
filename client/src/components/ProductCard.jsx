import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Plus } from 'lucide-react'
import { addItem } from '../store/cartSlice'
import { CATEGORIES } from '../data/dummyProducts'

function categoryLabel(category) {
  if (!category) return null
  const found = CATEGORIES.find((c) => c.id === category)
  return found ? found.label : category.replace(/-/g, ' ')
}

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const [selections, setSelections] = useState(() => {
    const init = {}
    ;(product.customizations || []).forEach((c) => {
      init[c.type] = (c.choices && c.choices[0]) || null
    })
    return init
  })

  const label = useMemo(() => categoryLabel(product.category), [product.category])

  const handleChange = (type, idx) => {
    const row = product.customizations.find((c) => c.type === type)
    if (!row) return
    const choice = row.choices[idx]
    setSelections((s) => ({ ...s, [type]: choice }))
  }

  const handleAdd = () => dispatch(addItem({ product, customizations: selections }))

  const price = Number(product.base_price).toFixed(2)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg shadow-black/20 transition hover:border-emerald-800/40 hover:bg-white/[0.05]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image_url}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
        {label && (
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-200/90 backdrop-blur-sm">
            {label}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-semibold leading-snug text-white">{product.name}</h3>
        {product.tagline && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500">{product.tagline}</p>
        )}
        <p className="mt-4 text-xl font-semibold tabular-nums text-white">${price}</p>

        {(product.customizations || []).map((c) => (
          <div key={c.type} className="mt-3">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
              {c.type}
            </label>
            <select
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-black/50 py-2.5 pl-3 pr-8 text-sm text-neutral-200 outline-none ring-emerald-500/0 transition focus:border-emerald-700/50 focus:ring-2 focus:ring-emerald-600/25"
              value={(selections[c.type] && selections[c.type].name) || ''}
              onChange={(e) => {
                const idx = e.target.selectedIndex
                handleChange(c.type, idx)
              }}
            >
              {c.choices &&
                c.choices.map((ch, i) => (
                  <option key={i} value={ch.name}>
                    {ch.name}
                    {ch.price_modifier ? ` (+$${Number(ch.price_modifier).toFixed(2)})` : ''}
                  </option>
                ))}
            </select>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAdd}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden />
          Add to cart
        </button>
      </div>
    </article>
  )
}
