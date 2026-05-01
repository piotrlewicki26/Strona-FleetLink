import type { Metadata } from 'next'
import { Truck, Package, HardHat, Building2, Leaf, Ambulance } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Branże - FleetLink',
  description: 'FleetLink obsługuje floty w wielu branżach: transport ciężarowy, logistyka, budownictwo, gospodarka komunalna, rolnictwo i służby ratunkowe.',
}

const industries = [
  {
    icon: Truck,
    name: 'Transport ciężarowy',
    description: 'Monitorowanie ciągników siodłowych, naczep i pojazdów HGV. Integracja z tachografem cyfrowym i systemami ADR.',
    benefits: ['Integracja z tachografem G2V2', 'Monitoring naczep i ciągników', 'Zarządzanie kartami kierowców'],
    color: 'bg-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Package,
    name: 'Logistyka i dostawy',
    description: 'Optymalizacja tras dla firm kurierskich i dostawczych. Śledzenie paczek i powiadomienia dla odbiorców w czasie rzeczywistym.',
    benefits: ['Optymalizacja tras dostawy', 'POD - potwierdzenie dostawy', 'Powiadomienia SMS/email'],
    color: 'bg-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: HardHat,
    name: 'Budownictwo',
    description: 'Zarządzanie maszynami budowlanymi, koparkami, ładowarkami i samochodami budowy. Kontrola godzin pracy sprzętu.',
    benefits: ['Monitoring maszyn budowlanych', 'Kontrola godzin pracy', 'Geofencing placów budowy'],
    color: 'bg-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: Building2,
    name: 'Komunalne i miejskie',
    description: 'Zarządzanie flotą pojazdów komunalnych: śmieciarki, pojazdy do odśnieżania, zamiatarki. Optymalizacja tras odbioru odpadów.',
    benefits: ['Trasy odbioru odpadów', 'Monitoring pojazdów komunalnych', 'Raporty dla samorządów'],
    color: 'bg-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Leaf,
    name: 'Rolnictwo',
    description: 'Monitoring kombajnów, ciągników rolniczych i maszyn polowych. Mapowanie pól i analiza efektywności prac polowych.',
    benefits: ['Monitoring maszyn polowych', 'Mapowanie GPS pól', 'Analiza zużycia paliwa'],
    color: 'bg-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Ambulance,
    name: 'Służby ratunkowe',
    description: 'Systemy dyspozytorskie dla ambulansów, straży pożarnej i policji. Priorytetowa łączność i routing przez korki.',
    benefits: ['Routing priorytetowy', 'Dyspozytornia real-time', 'Integracja z centralą 112'],
    color: 'bg-red-600',
    bg: 'bg-red-50',
  },
]

export default function IndustriesPage() {
  return (
    <div>
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white font-display mb-4">Branże, którym pomagamy</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            FleetLink dostosowuje się do specyfiki każdej branży, dostarczając narzędzia szyte na miarę.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="group rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all bg-white">
                <div className={`w-14 h-14 ${industry.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <industry.icon className={`w-7 h-7 text-${industry.color.split('-')[1]}-${industry.color.split('-')[2]}`} style={{ color: industry.color.includes('blue') ? '#3b82f6' : industry.color.includes('orange') ? '#f97316' : industry.color.includes('yellow') ? '#ca8a04' : industry.color.includes('emerald') ? '#059669' : industry.color.includes('red') ? '#dc2626' : '#16a34a' }} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-display">{industry.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                      {b}
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
