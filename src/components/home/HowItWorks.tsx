'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Wrench, Settings, Monitor } from 'lucide-react'

const steps = [
  { icon: FileText, title: 'Podpisz umowę', desc: 'Wybierz odpowiedni plan i podpisz umowę online. Bez długoterminowych zobowiązań, możliwość rezygnacji w każdym czasie.' },
  { icon: Wrench, title: 'Instalacja urządzenia', desc: 'Nasz certyfikowany technik przyjedzie do Ciebie i zainstaluje trackery GPS w pojazdach. Instalacja zajmuje ok. 30 minut na pojazd.' },
  { icon: Settings, title: 'Konfiguracja systemu', desc: 'Skonfigurujemy system pod Twoje potrzeby: alerty, raporty, geofencing, integracje z innymi systemami.' },
  { icon: Monitor, title: 'Monitoruj flotę', desc: 'Masz pełen dostęp do platformy 24/7 z przeglądarki lub aplikacji mobilnej. Nasz support jest zawsze do dyspozycji.' },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-display mb-4"
          >
            Jak zacząć w 4 krokach?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Wdrożenie FleetLink jest szybkie i bezproblemowe. Jesteśmy z Tobą na każdym etapie.
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0052FF] to-[#FFD700]"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <div className="w-full h-full rounded-full bg-[#0052FF]/10 flex items-center justify-center relative z-10">
                    <step.icon className="w-7 h-7 text-[#0052FF]" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0052FF] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-[#0F172A] text-lg mb-2 font-display">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
