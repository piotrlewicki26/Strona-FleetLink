import type { Metadata } from 'next'
import { MapPin, TrendingUp, Fuel, BarChart3, Bell, Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rozwiązania GPS FleetLink',
  description: 'Kompleksowe rozwiązania do zarządzania flotą: monitoring GPS, analiza stylu jazdy, zarządzanie paliwem, raporty i integracje API.',
}

const solutions = [
  {
    icon: MapPin,
    title: 'Monitoring GPS',
    description: 'Śledzenie pojazdów w czasie rzeczywistym z dokładnością do 3 metrów. Historia tras, geofencing, alerty przekroczenia granic stref.',
    features: ['Mapa na żywo z odświeżaniem co 10 sekund', 'Historia trasy 365 dni', 'Geofencing – strefy wjazdu/wyjazdu', 'Playback trasy z prędkością x1-x16', 'Eksport do PDF/Excel/CSV'],
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: TrendingUp,
    title: 'Analiza stylu jazdy',
    description: 'Scoring eco-drivingu dla każdego kierowcy. Identyfikacja agresywnej jazdy, przekroczeń prędkości i biegu jałowego.',
    features: ['Scoring 0-100 dla każdego kierowcy', 'Ranking kierowców w firmie', 'Alerty gwałtownych manewrów', 'Raporty tygodniowe i miesięczne', 'Program premii dla kierowców'],
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Fuel,
    title: 'Zarządzanie paliwem',
    description: 'Precyzyjny monitoring zużycia paliwa z czujnikami poziomu. Wykrywanie kradzieży paliwa i anomalii w zużyciu.',
    features: ['Czujniki paliwa dokładność 0.5%', 'Wykrywanie kradzieży paliwa', 'Porównanie z kartami paliwowymi', 'Prognoza kosztów paliwa', 'Optymalizacja tras pod zużycie'],
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: BarChart3,
    title: 'Raporty i analizy',
    description: 'Ponad 50 gotowych raportów i kreator własnych. Automatyczna wysyłka raportów e-mail do managementu.',
    features: ['50+ gotowych raportów', 'Kreator własnych raportów', 'Dashboard zarządczy', 'Automatyczna wysyłka raportów', 'Raporty zgodności RODO'],
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Bell,
    title: 'Powiadomienia i alerty',
    description: 'System powiadomień push, SMS i e-mail dla ważnych zdarzeń. Konfigurowalny próg alarmów dla każdego parametru.',
    features: ['Powiadomienia push, SMS, email', 'Alerty przekroczenia prędkości', 'Alerty wejścia/wyjścia ze stref', 'Alerty niskiego paliwa', 'Alerty czasu pracy kierowcy'],
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: Code2,
    title: 'Integracje API',
    description: 'REST API i webhooks do integracji z Twoimi systemami: ERP, WMS, TMS, systemy fakturowania i kadrowe.',
    features: ['REST API z dokumentacją OpenAPI', 'Webhooks w czasie rzeczywistym', 'SDK dla JavaScript, Python, PHP', 'Integracja z SAP, Oracle, Microsoft', 'Dedykowane wsparcie dla integracji'],
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
]

export default function SolutionsPage() {
  return (
    <div>
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white font-display mb-4">Nasze rozwiązania</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Kompleksowy ekosystem narzędzi do zarządzania flotą, dostosowany do Twoich potrzeb.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <div key={sol.title} className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 ${sol.bg} rounded-2xl flex items-center justify-center mb-5`}>
                  <sol.icon className={`w-7 h-7 ${sol.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3 font-display">{sol.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{sol.description}</p>
                <ul className="space-y-2">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
