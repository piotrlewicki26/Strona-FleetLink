'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 10000, suffix: '+', label: 'pojazdów', description: 'aktywnie monitorowanych' },
  { value: 500, suffix: '+', label: 'klientów', description: 'zaufanych firm' },
  { value: 99.9, suffix: '%', label: 'uptime', description: 'gwarantowanej dostępności' },
  { value: 15, suffix: ' lat', label: 'doświadczenia', description: 'w branży telematyki' },
]

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

function StatCard({ value, suffix, label, description, active }: { value: number; suffix: string; label: string; description: string; active: boolean }) {
  const count = useCountUp(value, 2000, active)
  const display = Number.isInteger(value) ? count.toLocaleString('pl-PL') : count.toFixed(1)
  
  return (
    <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="text-5xl font-bold text-[#0052FF] font-display mb-2">
        {display}{suffix}
      </div>
      <div className="text-xl font-semibold text-[#0F172A] mb-1">{label}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-display mb-4">
            Liczby, które mówią same za siebie
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            FleetLink to zaufany partner dla setek firm w całej Polsce
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
