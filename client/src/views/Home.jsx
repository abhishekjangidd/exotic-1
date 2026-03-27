import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/products').then((r) => setProducts(r.data)).catch(() => {})
  }, [])
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="p-8">
        <h2 className="text-2xl mb-4">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
      <footer className="bg-black text-white p-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>© Exotic Coffee</div>
          <div>
            <input className="p-2 rounded-l bg-gray-800" placeholder="Your email" />
            <button className="bg-emerald-700 px-4 py-2 rounded-r">Subscribe</button>
          </div>
        </div>
      </footer>
    </>
  )
}
