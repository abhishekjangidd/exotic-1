import React from 'react'
import { useDispatch } from 'react-redux'
import { ArrowRight, Sparkles } from 'lucide-react'
import { addItem } from '../store/cartSlice'

export default function HeroSection({ featuredProduct }) {
  const dispatch = useDispatch()

  if (!featuredProduct) {
    return (
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-emerald-950 via-neutral-950 to-black">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="h-10 w-48 animate-pulse rounded-lg bg-white/10" />
          <div className="mt-6 h-6 w-full max-w-md animate-pulse rounded bg-white/5" />
          <div className="mt-4 h-12 w-40 animate-pulse rounded-full bg-white/10" />
        </div>
      </section>
    )
  }

  const handleAdd = () => {
    const defaultCustomizations = {}
    ;(featuredProduct.customizations || []).forEach((c) => {
      defaultCustomizations[c.type] = (c.choices && c.choices[0]) || null
    })
    dispatch(addItem({ product: featuredProduct, customizations: defaultCustomizations }))
  }

  const tagline =
    featuredProduct.tagline || 'Small-batch roasted beans, crafted for your daily ritual.'
  const price = Number(featuredProduct.base_price).toFixed(2)

  return (
    <section className="relative overflow-hidden border-b border-emerald-900/30 bg-gradient-to-br from-emerald-950/90 via-neutral-950 to-black">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.25), transparent)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300/90">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Featured drink
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {featuredProduct.name}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg">{tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-3xl font-semibold tabular-nums text-white">${price}</span>
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-black/30 transition hover:bg-neutral-100"
            >
              Add to cart
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <p className="mt-8 text-xs text-neutral-600">
            Customize milk, cream, and toppings on each drink below.
          </p>
        </div>
        <div className="relative lg:justify-self-end">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-600/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5">
            <img
              src={featuredProduct.image_url}
              alt=""
              className="aspect-[4/3] w-full max-w-lg object-cover lg:max-w-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
