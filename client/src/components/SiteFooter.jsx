import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SiteFooter() {
  const [email, setEmail] = useState('')
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight text-white">Exotic Coffee</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500">
              Specialty coffee and signature drinks, roasted with care. This storefront is a demo UI
              with sample products — connect your API when your backend is ready.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-neutral-400">
              <Link to="/menu" className="transition hover:text-white">
                Menu
              </Link>
              <Link to="/about" className="transition hover:text-white">
                About
              </Link>
              <span className="text-neutral-600">Careers (demo)</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Newsletter
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              Occasional brew notes and launch offers. No spam.
            </p>
            <form
              className="mt-4 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-h-11 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-600 outline-none ring-emerald-500/0 transition focus:border-emerald-700/50 focus:ring-2 focus:ring-emerald-600/30"
              />
              <button
                type="submit"
                className="min-h-11 shrink-0 rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-neutral-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Exotic Coffee. Demo project.</p>
          <p className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
