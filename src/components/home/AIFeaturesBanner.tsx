'use client'

import { motion } from 'framer-motion'
import { Brain, Wifi, Camera, Navigation, Leaf, Cpu } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Predykcyjne AI',
    description: 'Algorytmy ML przewidują awarie pojazdów z 2-3 tygodniowym wyprzedzeniem, zanim unieruchomią Twoją flotę.',
    gradient: 'from-blue-600 to-violet-600',
  },
  {
    icon: Wifi,
    title: '5G + IoT',
    description: 'Ultra-szybka łączność 5G zapewnia dane w czasie rzeczywistym z opóźnieniem poniżej 10ms.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Camera,
    title: 'Vision Safety',
    description: 'Kamery AI monitorują zmęczenie kierowcy, korzystanie z telefonu i otoczenie pojazdu 360°.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Navigation,
    title: 'Dynamic Routing',
    description: 'Dynamiczna optymalizacja tras uwzględnia ruch, pogodę i preferencje klientów w czasie rzeczywistym.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Leaf,
    title: 'Carbon Intelligence',
    description: 'Śledzenie emisji CO2 na pojazd, trasę i kierowcę. Automatyczne raporty ESG dla inwestorów.',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Przetwarzanie danych bezpośrednio w urządzeniu. Decyzje podejmowane lokalnie w <1ms.',
    gradient: 'from-purple-600 to-pink-600',
  },
]

export default function AIFeaturesBanner() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0052FF]/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#0052FF]/10 border border-[#0052FF]/30 rounded-full px-4 py-2 mb-4"
          >
            <Brain className="w-4 h-4 text-[#0052FF]" />
            <span className="text-[#0052FF] text-sm font-medium">Technologie przyszłości</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white font-display mb-4"
          >
            Napędzani przez AI i IoT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            FleetLink integruje najnowsze technologie, by dać Twojej flocie przewagę, której konkurencja jeszcze nie ma.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative group rounded-2xl p-6 bg-white/5 border border-white/10 cursor-default overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} p-px`}>
                <div className="w-full h-full rounded-2xl bg-[#0F172A]" />
              </div>
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 font-display">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
