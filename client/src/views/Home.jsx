import React, { useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Clock, Star, Truck } from 'lucide-react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import SiteFooter from '../components/SiteFooter'
import { CATEGORIES, DUMMY_PRODUCTS } from '../data/dummyProducts'

export default function Home() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS)
  const [category, setCategory] = useState('all')
  const menuRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    axios
      .get('/api/products')
      .then((r) => {
        if (Array.isArray(r.data) && r.data.length > 0) setProducts(r.data)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (location.pathname === '/menu' && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname])

  const filtered = useMemo(() => {
    if (category === 'all') return products
    return products.filter((p) => (p.category || '').toLowerCase() === category)
  }, [products, category])

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <HeroSection featuredProduct={products[0]} />

      <section className="border-b border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Star, title: '4.9 average', sub: 'Across 12 cafés' },
            { icon: Truck, title: 'Pickup in ~5 min', sub: 'Order ahead, skip the line' },
            { icon: Clock, title: 'Open daily', sub: '7am — 8pm' },
          ].map(({ icon: Icon, title, sub }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-950/80 text-emerald-400">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-medium text-white">{title}</p>
                <p className="mt-0.5 text-sm text-neutral-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main ref={menuRef} id="menu" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">
                Menu
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Signature & seasonal drinks
              </h2>
              <p className="mt-3 max-w-xl text-neutral-400">
                Demo catalog below — your API replaces this list when the server is running. Filter
                by style or browse everything.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === c.id
                    ? 'bg-white text-neutral-950 shadow-lg shadow-black/20'
                    : 'border border-white/10 bg-white/5 text-neutral-300 hover:border-emerald-800/50 hover:bg-white/10'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] py-16 text-center text-neutral-500">
              No drinks in this category yet.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
