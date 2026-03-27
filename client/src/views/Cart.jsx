import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react'
import Navbar from '../components/Navbar'
import SiteFooter from '../components/SiteFooter'
import {
  addItem,
  decrementItem,
  removeItem,
  selectCartItems,
  selectCartTotal,
} from '../store/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-emerald-400/90 transition hover:text-emerald-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Continue shopping
        </Link>

        <h1 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Your cart
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          Review items before checkout. Demo store — no payment is processed.
        </p>

        {items.length === 0 ? (
          <div className="mt-16 flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/80 text-emerald-400/90">
              <ShoppingBag className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <p className="mt-6 text-lg font-medium text-white">Your cart is empty</p>
            <p className="mt-2 max-w-sm text-sm text-neutral-500">
              Browse the menu and add drinks with your preferred milk, cream, and toppings.
            </p>
            <Link
              to="/menu"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-500"
            >
              View menu
            </Link>
          </div>
        ) : (
          <ul className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {Object.entries(item.customizations || {})
                      .filter(([, v]) => v && v.name)
                      .map(([k, v]) => `${k}: ${v.name}`)
                      .join(' · ') || 'Standard'}
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">
                    ${Number(item.base_price + (item.customizationPrice || 0)).toFixed(2)} each
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:shrink-0">
                  <div className="flex items-center rounded-full border border-white/15 bg-black/40">
                    <button
                      type="button"
                      onClick={() => dispatch(decrementItem(item.id))}
                      className="p-2 text-neutral-400 transition hover:bg-white/5 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-[2rem] text-center text-sm tabular-nums text-white">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          addItem({
                            product: {
                              id: item.productId,
                              name: item.name,
                              base_price: item.base_price,
                            },
                            customizations: item.customizations,
                          })
                        )
                      }
                      className="p-2 text-neutral-400 transition hover:bg-white/5 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="w-24 text-right text-sm font-semibold tabular-nums text-white">
                    ${item.lineTotal.toFixed(2)}
                  </p>
                  <button
                    type="button"
                    onClick={() => dispatch(removeItem(item.id))}
                    className="rounded-lg p-2 text-neutral-500 transition hover:bg-red-950/50 hover:text-red-400"
                    aria-label="Remove line"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-emerald-900/40 bg-emerald-950/20 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-500/90">
                Estimated total
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-white">
                ${total.toFixed(2)}
              </p>
            </div>
            <button
              type="button"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:bg-neutral-100"
            >
              Checkout (demo)
            </button>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
