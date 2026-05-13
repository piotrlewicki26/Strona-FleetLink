import type { Metadata } from 'next'
import { getProducts } from '@/lib/db'
import Image from 'next/image'
import { Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urządzenia GPS - FleetLink',
  description: 'Sprawdź urządzenia GPS FleetLink: trackery, czujniki paliwa, kamery dashcam i moduły CAN BUS.',
}

const comparison = {
  headers: ['FleetTracker Lite S2', 'FleetTracker Pro X1', 'FleetTracker Ultra Z3'],
  rows: [
    { feature: 'Łączność', values: ['3G/4G', '4G LTE', '5G'] },
    { feature: 'GPS dokładność', values: ['5m', '3m', '1m'] },
    { feature: 'Wodoodporność', values: ['IP54', 'IP67', 'IP68'] },
    { feature: 'Bateria backup', values: ['8h', '48h', '72h'] },
    { feature: 'Analiza jazdy', values: [false, true, true] },
    { feature: 'Kamera AI', values: [false, false, true] },
    { feature: 'CAN Bus', values: [false, true, true] },
    { feature: 'Edge Computing', values: [false, false, true] },
    { feature: 'Cena', values: ['149 zł', '299 zł', '599 zł'] },
  ],
}

export default async function DevicesPage() {
  const products = await getProducts()

  return (
    <div>
      <section className="bg-[#0F172A] py-20 text-center">
        <h1 className="text-5xl font-bold text-white font-display mb-4">Urządzenia GPS</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Profesjonalny sprzęt do monitorowania floty. Certyfikowane, niezawodne, łatwe w instalacji.
        </p>
      </section>

      {/* Product grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-10">Katalog urządzeń</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const features = JSON.parse(product.features) as string[]
              return (
                <div key={product.id} className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="relative h-48">
                    <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#0052FF] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0F172A] mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2">{product.description}</p>
                    <ul className="space-y-1 mb-4">
                      {features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0F172A] font-display">{product.price} zł</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-10 text-center">
            Porównanie trackerów GPS
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="grid grid-cols-4">
              <div className="bg-gray-50 p-4 border-b border-r border-gray-100 font-medium text-gray-500 text-sm">Funkcja</div>
              {comparison.headers.map((h, i) => (
                <div key={h} className={`p-4 border-b border-gray-100 text-center font-bold text-[#0F172A] text-sm ${i === 1 ? 'bg-[#0052FF]/5' : 'bg-gray-50'}`}>
                  {h}
                </div>
              ))}
            </div>
            {comparison.rows.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-4 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                <div className="p-4 border-r border-gray-100 text-sm text-gray-600 font-medium">{row.feature}</div>
                {row.values.map((val, j) => (
                  <div key={j} className={`p-4 text-center text-sm ${j === 1 ? 'bg-[#0052FF]/5' : ''}`}>
                    {typeof val === 'boolean' ? (
                      val
                        ? <Check className="w-5 h-5 text-green-500 mx-auto" />
                        : <X className="w-5 h-5 text-gray-300 mx-auto" />
                    ) : (
                      <span className="font-medium text-[#0F172A]">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-4">Kompatybilność</h2>
          <p className="text-gray-600 mb-8">Nasze urządzenia działają z ponad 95% pojazdami dostępnymi na rynku</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Mercedes-Benz', 'Volvo', 'MAN', 'Scania', 'DAF', 'Iveco', 'Renault', 'Ford', 'Volkswagen', 'Toyota'].map((brand) => (
              <div key={brand} className="bg-gray-100 px-5 py-2 rounded-full text-gray-700 text-sm font-medium">{brand}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
