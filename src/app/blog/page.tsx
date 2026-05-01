'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Clock, User, Tag } from 'lucide-react'

type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorRole: string
  imageUrl: string
  publishedAt: string
  readTime: number
  featured: boolean
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Wszystkie')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blog')
      .then((r) => r.json())
      .then((data) => { setPosts(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const categories = ['Wszystkie', ...Array.from(new Set(posts.map((p) => p.category)))]
  const filtered = posts.filter((p) => {
    const matchCat = category === 'Wszystkie' || p.category === category
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <section className="bg-[#0F172A] py-20 text-center">
        <h1 className="text-5xl font-bold text-white font-display mb-4">Blog FleetLink</h1>
        <p className="text-gray-400 text-xl max-w-xl mx-auto">
          Wiedza, trendy i praktyczne wskazówki z branży zarządzania flotą
        </p>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Szukaj artykułu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  category === cat
                    ? 'bg-[#0052FF] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#0052FF] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  {post.featured && (
                    <div className="absolute top-3 right-3 bg-[#FFD700] text-[#0F172A] text-xs font-bold px-3 py-1 rounded-full">
                      Polecany
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0F172A] text-lg mb-2 line-clamp-2 group-hover:text-[#0052FF] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime} min czytania</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Search className="w-12 h-12 mx-auto mb-4 text-gray-200" />
            <p>Brak artykułów spełniających kryteria wyszukiwania</p>
          </div>
        )}
      </section>
    </div>
  )
}
