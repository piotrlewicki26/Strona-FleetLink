import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'O nas - FleetLink',
  description: 'Poznaj historię FleetLink - lidera w zarządzaniu flotą GPS w Polsce. Od 2010 roku dostarczamy innowacyjne rozwiązania telematyczne.',
}

const timeline = [
  { year: '2010', title: 'Założenie FleetLink', desc: 'Firma powstała w Warszawie z wizją rewolucji w zarządzaniu flotą.' },
  { year: '2013', title: 'Pierwsze 1000 pojazdów', desc: 'Przekroczyliśmy próg tysiąca monitorowanych pojazdów.' },
  { year: '2016', title: 'Ekspansja na rynki UE', desc: 'Wejście na rynki czeski, słowacki i rumuński.' },
  { year: '2019', title: 'Platforma AI', desc: 'Wdrożenie modułów predykcyjnej analityki opartej o AI.' },
  { year: '2022', title: '10 000 pojazdów', desc: 'Przekroczono próg 10 000 monitorowanych pojazdów.' },
  { year: '2025', title: '5G i Edge Computing', desc: 'Wprowadzenie trackerów z modułami 5G i edge computing.' },
]

const team = [
  { name: 'Andrzej Kowalski', role: 'CEO i Współzałożyciel', image: 'https://picsum.photos/seed/ceo1/400/400' },
  { name: 'Marta Nowak', role: 'CTO', image: 'https://picsum.photos/seed/cto1/400/400' },
  { name: 'Piotr Wiśniewski', role: 'Head of Sales', image: 'https://picsum.photos/seed/sales1/400/400' },
  { name: 'Katarzyna Zając', role: 'Head of Customer Success', image: 'https://picsum.photos/seed/cs1/400/400' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0F172A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white font-display mb-6">
            Jesteśmy FleetLink
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Od 2010 roku budujemy technologię, która pozwala firmom transportowym operować wydajniej, 
            bezpieczniej i bardziej ekologicznie.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-4">Misja i wartości</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Misja', desc: 'Sprawiamy, że zarządzanie flotą jest proste, efektywne i dostępne dla każdej firmy - niezależnie od jej wielkości.', color: 'bg-blue-50 text-[#0052FF]' },
              { icon: Eye, title: 'Wizja', desc: 'Dążymy do świata, w którym każdy pojazd jest połączony, a dane działają na rzecz bezpieczniejszego i bardziej zrównoważonego transportu.', color: 'bg-yellow-50 text-yellow-600' },
              { icon: Heart, title: 'Wartości', desc: 'Innowacja, transparentność, partnerstwo z klientem i odpowiedzialność środowiskowa to filary naszej kultury organizacyjnej.', color: 'bg-red-50 text-red-500' },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#0F172A] text-xl mb-3 font-display">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-4">Nasz zespół</h2>
            <p className="text-gray-600 text-lg">Poznaj ludzi, którzy tworzą FleetLink</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-4 ring-4 ring-transparent group-hover:ring-[#0052FF]/20 transition-all">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="font-bold text-[#0F172A] text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] font-display mb-4">Historia FleetLink</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0052FF] to-[#FFD700]" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 pl-16 relative">
                  <div className="absolute left-5 top-1 w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <span className="text-[#0052FF] font-bold text-sm">{item.year}</span>
                    <h3 className="font-bold text-[#0F172A] text-lg mt-0.5">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0F172A] font-display">Certyfikaty i nagrody</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Award, label: 'ISO 27001', sub: 'Bezpieczeństwo informacji' },
              { icon: Award, label: 'ISO 9001', sub: 'System zarządzania jakością' },
              { icon: Globe, label: 'GDPR Compliant', sub: 'Zgodność z RODO' },
              { icon: Users, label: 'Top Employer 2024', sub: 'Najlepszy pracodawca' },
            ].map((cert) => (
              <div key={cert.label} className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100">
                <cert.icon className="w-8 h-8 text-[#0052FF]" />
                <div>
                  <div className="font-bold text-[#0F172A]">{cert.label}</div>
                  <div className="text-gray-500 text-xs">{cert.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
