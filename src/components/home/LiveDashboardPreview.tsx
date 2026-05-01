'use client'

import { useState, useEffect } from 'react'
import { MapPin, Gauge, Fuel, Shield, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react'

const vehicles = [
  { id: 1, plate: 'WA 12345', driver: 'Jan Kowalski', status: 'moving', speed: 72, fuel: 68, eco: 87, location: 'A1 - Łódź', color: 'green' },
  { id: 2, plate: 'KR 98765', driver: 'Piotr Nowak', status: 'idle', speed: 0, fuel: 45, eco: 76, location: 'Kraków centrum', color: 'yellow' },
  { id: 3, plate: 'GD 45678', driver: 'Anna Wiśniewska', status: 'moving', speed: 108, fuel: 82, eco: 62, location: 'S6 - Gdańsk', color: 'red' },
  { id: 4, plate: 'WR 11223', driver: 'Michał Zając', status: 'stopped', speed: 0, fuel: 23, eco: 91, location: 'Depot Wrocław', color: 'blue' },
  { id: 5, plate: 'PZ 77889', driver: 'Tomasz Lis', status: 'moving', speed: 89, fuel: 56, eco: 83, location: 'E30 - Poznań', color: 'green' },
]

const alerts = [
  { type: 'warning', msg: 'Przekroczenie prędkości: WA 12345 (108 km/h)' },
  { type: 'info', msg: 'Pojazd KR 98765 wjechał do strefy dostaw' },
  { type: 'error', msg: 'Niski poziom paliwa: WR 11223 (23%)' },
  { type: 'success', msg: 'Zaplanowana trasa GD 45678 ukończona' },
]

const statusColors: Record<string, string> = {
  moving: 'bg-green-500',
  idle: 'bg-yellow-500',
  stopped: 'bg-blue-500',
}

const statusLabels: Record<string, string> = {
  moving: 'W ruchu',
  idle: 'Na biegu jałowym',
  stopped: 'Zatrzymany',
}

export default function LiveDashboardPreview() {
  const [selected, setSelected] = useState(vehicles[0])
  const [alertIndex, setAlertIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % alerts.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const alert = alerts[alertIndex]

  return (
    <section id="dashboard" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Pulpit zarządzania flotą
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Wszystkie dane o Twojej flocie w jednym miejscu. Kliknij pojazd, aby zobaczyć szczegóły.
          </p>
        </div>

        <div className="bg-[#1e293b] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Dashboard header */}
          <div className="bg-[#0f1729] px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-white text-sm font-mono">FleetLink Dashboard v3.0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs">LIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Vehicle list */}
            <div className="border-r border-white/10">
              <div className="px-4 py-3 border-b border-white/10">
                <span className="text-gray-400 text-xs uppercase tracking-wide">Pojazdy ({vehicles.length})</span>
              </div>
              <div className="divide-y divide-white/5">
                {vehicles.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelected(v)}
                    className={`w-full text-left px-4 py-3 transition-colors ${selected.id === v.id ? 'bg-[#0052FF]/20' : 'hover:bg-white/5'}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm font-mono font-bold">{v.plate}</span>
                      <span className={`w-2 h-2 rounded-full ${statusColors[v.status]}`} />
                    </div>
                    <div className="text-gray-400 text-xs">{v.driver}</div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                      <MapPin className="w-3 h-3" />
                      {v.location}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle detail */}
            <div className="p-6">
              <h3 className="text-white font-bold text-lg font-mono mb-1">{selected.plate}</h3>
              <p className="text-gray-400 text-sm mb-4">{selected.driver}</p>
              
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-2 h-2 rounded-full ${statusColors[selected.status]}`} />
                <span className="text-gray-300 text-sm">{statusLabels[selected.status]}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Gauge className="w-3.5 h-3.5" />
                      Prędkość
                    </div>
                    <span className="text-white font-bold">{selected.speed} km/h</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full bg-[#0052FF] rounded-full transition-all" style={{ width: `${Math.min(selected.speed / 130 * 100, 100)}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Fuel className="w-3.5 h-3.5" />
                      Paliwo
                    </div>
                    <span className={`font-bold ${selected.fuel < 25 ? 'text-red-400' : 'text-white'}`}>{selected.fuel}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className={`h-full rounded-full transition-all ${selected.fuel < 25 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${selected.fuel}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Eco Score
                    </div>
                    <span className="text-white font-bold">{selected.eco}/100</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full bg-[#FFD700] rounded-full transition-all" style={{ width: `${selected.eco}%` }} />
                  </div>
                </div>
              </div>

              {/* Mini map placeholder */}
              <div className="mt-6 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/20 h-28 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-[#0052FF] mx-auto mb-1" />
                  <p className="text-gray-400 text-xs">{selected.location}</p>
                </div>
              </div>
            </div>

            {/* Alerts + stats */}
            <div className="border-l border-white/10 p-6">
              <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-4">Alerty w czasie rzeczywistym</h3>
              
              <div className={`p-3 rounded-lg mb-4 text-sm flex items-start gap-2 transition-all ${
                alert.type === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/30' :
                alert.type === 'error' ? 'bg-red-500/10 border border-red-500/30' :
                alert.type === 'success' ? 'bg-green-500/10 border border-green-500/30' :
                'bg-blue-500/10 border border-blue-500/30'
              }`}>
                {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />}
                {alert.type === 'error' && <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />}
                {alert.type === 'success' && <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />}
                {alert.type === 'info' && <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                <span className="text-gray-300 text-xs">{alert.msg}</span>
              </div>

              <div className="space-y-3 mt-6">
                <h3 className="text-gray-400 text-xs uppercase tracking-wide">Statystyki dzisiaj</h3>
                {[
                  { label: 'Łączny przebieg', value: '4,820 km' },
                  { label: 'Zużyte paliwo', value: '892 L' },
                  { label: 'Czas jazdy', value: '156 h' },
                  { label: 'Zdarzenia', value: '3' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between">
                    <span className="text-gray-500 text-xs">{s.label}</span>
                    <span className="text-white text-xs font-mono font-bold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
