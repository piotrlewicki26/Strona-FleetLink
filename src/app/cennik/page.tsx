'use client'

import { useState } from 'react'
import { Check, HelpCircle, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 199,
    unit: 'zł/mies.',
    description: 'Dla małych flot do 10 pojazdów',
    color: 'border-gray-200',
    button: 'Zacznij za darmo',
    features: [
      'Do 10 pojazdów',
      'Monitoring GPS na żywo',
      'Historia tras 90 dni',
      'Raporty podstawowe',
      'Aplikacja mobilna',
      'E-mail support',
    ],
    notIncluded: ['Analiza stylu jazdy', 'API dostęp', 'Czujniki paliwa'],
  },
  {
    name: 'Professional',
    price: 349,
    unit: 'zł/mies.',
    description: 'Dla rosnących flot 10-50 pojazdów',
    color: 'border-[#0052FF] ring-2 ring-[#0052FF]',
    badge: 'Najpopularniejszy',
    button: 'Wypróbuj 14 dni za darmo',
    features: [
      'Do 50 pojazdów',
      'Monitoring GPS na żywo',
      'Historia tras 365 dni',
      'Analiza stylu jazdy',
      'Zarządzanie paliwem',
      'Raporty zaawansowane',
      'API dostęp',
      'Priorytetowe wsparcie 24/7',
    ],
    notIncluded: [],
  },
  {
    name: 'Enterprise',
    price: null,
    unit: 'na zapytanie',
    description: 'Dla dużych flot powyżej 50 pojazdów',
    color: 'border-gray-800 bg-[#0F172A]',
    button: 'Skontaktuj się z nami',
    dark: true,
    features: [
      'Nieograniczona liczba pojazdów',
      'Wszystko z Professional',
      'Dedykowany opiekun',
      'Integracje na zamówienie',
      'SLA 99.9% uptime',
      'Szkolenia on-site',
      'Biała etykieta (white-label)',
    ],
    notIncluded: [],
  },
]

const faqs = [
  { q: 'Czy jest umowa długoterminowa?', a: 'Nie. FleetLink działa w modelu miesięcznym. Możesz zrezygnować w dowolnym momencie bez dodatkowych opłat.' },
  { q: 'Jak długo trwa wdrożenie?', a: 'Typowe wdrożenie zajmuje 1-5 dni roboczych, w zależności od wielkości floty i zakresu integracji.' },
  { q: 'Co zawiera cena za pojazd?', a: 'Cena zawiera dostęp do platformy, aktualizacje, support i przestrzeń do przechowywania danych. Sprzęt GPS wyceniany jest osobno.' },
  { q: 'Czy mogę testować przed zakupem?', a: 'Tak! Oferujemy 14-dniowy trial bez karty kredytowej na planie Professional.' },
  { q: 'Jak działa support?', a: 'W planie Starter dostępny e-mail support. W Professional i Enterprise - telefon i czat 24/7 z polskojęzycznym zespołem.' },
]

export default function PricingPage() {
  const [vehicles, setVehicles] = useState(20)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const fuelSavings = vehicles * 180
  const co2Savings = (vehicles * 0.3).toFixed(1)

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <section className="bg-[#0F172A] py-20 text-center">
        <h1 className="text-5xl font-bold text-white font-display mb-4">Przejrzyste ceny</h1>
        <p className="text-gray-400 text-xl max-w-xl mx-auto">
          Płać za to, czego naprawdę używasz. Bez ukrytych opłat.
        </p>
      </section>

      {/* Plans */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 relative ${plan.color} ${plan.dark ? 'text-white' : 'bg-white'}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0052FF] text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <h3 className={`text-xl font-bold font-display mb-1 ${plan.dark ? 'text-white' : 'text-[#0F172A]'}`}>{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
              <div className="mb-6">
                {plan.price ? (
                  <>
                    <span className={`text-4xl font-bold font-display ${plan.dark ? 'text-white' : 'text-[#0F172A]'}`}>{plan.price}</span>
                    <span className={`text-sm ml-1 ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>{plan.unit}</span>
                  </>
                ) : (
                  <span className={`text-2xl font-bold font-display ${plan.dark ? 'text-white' : 'text-[#0F172A]'}`}>{plan.unit}</span>
                )}
              </div>
              <Link
                href={plan.name === 'Enterprise' ? '/kontakt' : '/kontakt'}
                className={`block text-center py-3 px-6 rounded-xl font-semibold mb-8 transition-all ${
                  plan.color.includes('[#0052FF]')
                    ? 'bg-[#0052FF] text-white hover:bg-blue-600'
                    : plan.dark
                    ? 'bg-white text-[#0F172A] hover:bg-gray-100'
                    : 'border border-gray-300 text-[#0F172A] hover:bg-gray-50'
                }`}
              >
                {plan.button}
              </Link>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span className={plan.dark ? 'text-gray-300' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
                {plan.notIncluded?.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm opacity-40">
                    <div className="w-4 h-4 shrink-0 flex items-center justify-center">—</div>
                    <span className={plan.dark ? 'text-gray-400' : 'text-gray-500'}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Savings calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-2 text-center">Kalkulator oszczędności</h2>
          <p className="text-gray-500 text-center mb-10">Ile możesz zaoszczędzić dzięki FleetLink?</p>

          <div className="bg-[#F9FAFB] rounded-2xl p-8">
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Liczba pojazdów w flocie: <strong className="text-[#0052FF]">{vehicles}</strong>
              </label>
              <input
                type="range"
                min="5"
                max="500"
                value={vehicles}
                onChange={(e) => setVehicles(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052FF]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5</span>
                <span>500</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-[#0052FF] font-display mb-1">
                  {fuelSavings.toLocaleString('pl-PL')} zł
                </div>
                <div className="text-gray-600 text-sm">Szacowane oszczędności paliwa miesięcznie</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600 font-display mb-1">
                  {co2Savings} t
                </div>
                <div className="text-gray-600 text-sm">Redukcja CO2 miesięcznie</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">* Szacunki oparte na średnich wynikach klientów FleetLink</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-8 text-center flex items-center justify-center gap-2">
          <HelpCircle className="w-7 h-7 text-[#0052FF]" />
          Często zadawane pytania
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-[#0F172A]">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
