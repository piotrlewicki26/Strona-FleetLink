'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ShoppingCart, Package } from 'lucide-react'

type Product = {
  id: number
  name: string
  slug: string
  description: string
  price: number
  category: string
  imageUrl: string
  features: string
  inStock: boolean
  badge: string | null
}

const categoryLabels: Record<string, string> = {
  all: 'Wszystkie',
  tracker: 'Trackery GPS',
  sensor: 'Czujniki',
  camera: 'Kamery',
  module: 'Moduły',
  bundle: 'Zestawy',
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => { setProducts(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = category === 'all' ? products : products.filter((p) => p.category === category)

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <section className="bg-[#0F172A] py-20 text-center">
        <h1 className="text-5xl font-bold text-white font-display mb-4">Sklep FleetLink</h1>
        <p className="text-gray-400 text-xl max-w-xl mx-auto">
          Urządzenia GPS, czujniki i akcesoria do zarządzania flotą
        </p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                category === key
                  ? 'bg-[#0052FF] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => {
              const features = JSON.parse(product.features) as string[]
              return (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#0052FF] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold">Niedostępny</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-[#0052FF] font-medium mb-1 uppercase tracking-wide">{categoryLabels[product.category]}</div>
                    <h3 className="font-bold text-[#0F172A] mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {features.slice(0, 3).map((f) => (
                        <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#0F172A] font-display">{product.price} <span className="text-sm font-normal text-gray-500">zł</span></span>
                      <button
                        disabled={!product.inStock}
                        className="flex items-center gap-1.5 bg-[#0052FF] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors disabled:opacity-40"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Kup
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Package className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Brak produktów w tej kategorii</p>
          </div>
        )}
      </section>
    </div>
  )
}
