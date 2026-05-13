import Link from 'next/link'
import { Truck, Share2, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl font-display">Fleet<span className="text-[#0052FF]">Link</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nowoczesny system GPS i telematyki dla profesjonalnych flot. Zarządzaj pojazdami inteligentnie.
            </p>
            <div className="flex gap-3 text-gray-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052FF] transition-colors p-2 rounded-lg hover:bg-white/5"><Share2 className="w-5 h-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052FF] transition-colors p-2 rounded-lg hover:bg-white/5"><Share2 className="w-5 h-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052FF] transition-colors p-2 rounded-lg hover:bg-white/5"><Share2 className="w-5 h-5" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052FF] transition-colors p-2 rounded-lg hover:bg-white/5"><ExternalLink className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-display">Nawigacja</h3>
            <ul className="space-y-2">
              {[
                { href: '/o-nas', label: 'O nas' },
                { href: '/branze', label: 'Branże' },
                { href: '/rozwiazania', label: 'Rozwiązania' },
                { href: '/cennik', label: 'Cennik' },
                { href: '/sklep', label: 'Sklep' },
                { href: '/blog', label: 'Blog' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-display">Produkty</h3>
            <ul className="space-y-2">
              {[
                { href: '/rozwiazania', label: 'Monitoring GPS' },
                { href: '/rozwiazania', label: 'Analiza jazdy' },
                { href: '/rozwiazania', label: 'Zarządzanie paliwem' },
                { href: '/rozwiazania', label: 'Raporty i analizy' },
                { href: '/urzadzenia', label: 'Urządzenia GPS' },
                { href: '/sklep', label: 'Sklep' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-display">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#0052FF] shrink-0" />
                <span>ul. Technologiczna 15<br />00-001 Warszawa</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#0052FF] shrink-0" />
                <a href="tel:+48221234567" className="hover:text-white transition-colors">+48 22 123 45 67</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#0052FF] shrink-0" />
                <a href="mailto:kontakt@fleetlink.pl" className="hover:text-white transition-colors">kontakt@fleetlink.pl</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 FleetLink Sp. z o.o. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka prywatności</Link>
            <Link href="/regulamin" className="hover:text-white transition-colors">Regulamin</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
