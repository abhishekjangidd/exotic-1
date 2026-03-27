import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSlice'

const navLink =
  'rounded-lg px-3 py-2 text-sm font-medium text-neutral-400 transition hover:bg-white/5 hover:text-white'

const navActive = 'bg-white/10 text-white'

export default function Navbar() {
  const count = useSelector(selectCartCount)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-serif text-lg font-semibold tracking-tight text-white sm:text-xl">
          Exotic Coffee
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/menu"
            className={({ isActive }) => `${navLink} ${isActive ? navActive : ''}`}
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${navLink} ${isActive ? navActive : ''}`}
          >
            About
          </NavLink>
          <Link
            to="/cart"
            className="relative ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-200 transition hover:border-emerald-500/30 hover:bg-emerald-950/50 hover:text-white"
            aria-label={`Shopping cart${count ? `, ${count} items` : ''}`}
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={1.75} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-500 px-1.5 text-[10px] font-bold text-neutral-950">
                {count > 99 ? '99+' : count}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  )
}
