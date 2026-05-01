'use client'

import { useEffect, useState, useCallback } from 'react'

type Counter = {
  label: string
  value: number
  delta: number
  unit: string
  flash: boolean
}

const initialCounters: Omit<Counter, 'flash'>[] = [
  { label: 'pojazdy online', value: 12450, delta: 3, unit: '' },
  { label: 'zaoszczędzone litry paliwa', value: 2300000, delta: 500, unit: 'L' },
  { label: 'przejechane km', value: 890000000, delta: 12000, unit: '' },
  { label: 'zapobieżone incydenty', value: 45000, delta: 2, unit: '' },
]

function formatNumber(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1) + 'mld'
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'mln'
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'k'
  return n.toLocaleString('pl-PL')
}

export default function LiveTrustBar() {
  const [counters, setCounters] = useState<Counter[]>(
    initialCounters.map((c) => ({ ...c, flash: false }))
  )

  const tick = useCallback(() => {
    setCounters((prev) =>
      prev.map((c) => {
        const update = Math.random() > 0.4
        return update
          ? { ...c, value: c.value + c.delta, flash: true }
          : { ...c, flash: false }
      })
    )
    setTimeout(() => {
      setCounters((prev) => prev.map((c) => ({ ...c, flash: false })))
    }, 600)
  }, [])

  useEffect(() => {
    const id = setInterval(tick, 2500)
    return () => clearInterval(id)
  }, [tick])

  return (
    <div className="bg-[#0F172A] border-y border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <span className="text-gray-400 text-sm font-medium shrink-0">Zaufali nam już:</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {counters.map((c) => (
              <div key={c.label} className="text-center">
                <div
                  className={`text-2xl font-bold font-display transition-colors duration-300 ${
                    c.flash ? 'text-[#0052FF]' : 'text-white'
                  }`}
                >
                  {formatNumber(c.value)}{c.unit}
                  {c.flash && <span className="inline-block ml-1 text-sm text-green-400 animate-pulse">↑</span>}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
