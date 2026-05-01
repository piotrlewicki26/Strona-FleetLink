'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Truck, LogIn, UserPlus, Share2, ExternalLink } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/branze', label: 'Branże' },
  { href: '/rozwiazania', label: 'Rozwiązania' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/sklep', label: 'Sklep' },
  { href: '/urzadzenia', label: 'Urządzenia' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl font-display">Fleet<span className="text-[#0052FF]">Link</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm px-3 py-2 rounded-md hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-gray-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052FF] transition-colors"><Share2 className="w-4 h-4" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052FF] transition-colors"><Share2 className="w-4 h-4" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052FF] transition-colors"><Share2 className="w-4 h-4" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052FF] transition-colors"><ExternalLink className="w-4 h-4" /></a>
            </div>
            <div className="w-px h-5 bg-white/20" />
            <a
              href="https://app.fleetlink.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
            >
              <LogIn className="w-4 h-4" />
              Logowanie
            </a>
            <a
              href="https://app.fleetlink.pl/register"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm bg-[#0052FF] hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg font-medium transition-all"
            >
              <UserPlus className="w-4 h-4" />
              Rejestracja
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F172A] border-t border-white/10 animate-in slide-in-from-top-2">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex gap-2">
              <a href="https://app.fleetlink.pl" target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm border border-white/20 text-white px-3 py-2 rounded-lg">Logowanie</a>
              <a href="https://app.fleetlink.pl/register" target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm bg-[#0052FF] text-white px-3 py-2 rounded-lg font-medium">Rejestracja</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
