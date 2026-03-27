import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSlice'

export default function Navbar() {
  const count = useSelector(selectCartCount)
  return (
    <nav className="bg-emerald-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Exotic Coffee</Link>
      <div className="flex items-center space-x-4">
        <Link to="/menu" className="hover:underline">Menu</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/cart" className="relative">
          <ShoppingCart />
          {count > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full px-2">{count}</span>
          )}
        </Link>
      </div>
    </nav>
  )
}
