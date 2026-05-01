'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0052FF] relative overflow-hidden">
      {/* Animated bg */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white font-display mb-6"
        >
          Gotowy na inteligentne<br />zarządzanie flotą?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-blue-100 text-xl mb-10"
        >
          Dołącz do 500+ firm, które już optymalizują swoje floty z FleetLink. 
          14 dni za darmo, bez zobowiązań.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/cennik"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0052FF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Zacznij za darmo
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            <Phone className="w-5 h-5" />
            Porozmawiaj z ekspertem
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
