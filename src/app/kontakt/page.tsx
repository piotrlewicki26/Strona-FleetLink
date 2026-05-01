'use client'

import { useEffect, useRef, useState } from 'react'
import { submitContact } from '@/app/actions/contact'
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const startTimeRef = useRef<HTMLInputElement>(null)
  const [state, setState] = useState<{ success?: boolean; error?: string }>({})
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    if (startTimeRef.current) {
      startTimeRef.current.value = String(Date.now())
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsPending(true)
    const formData = new FormData(e.currentTarget)
    const result = await submitContact({}, formData)
    setState(result)
    setIsPending(false)
  }

  return (
    <div>
      <section className="bg-[#0F172A] py-20 text-center">
        <h1 className="text-5xl font-bold text-white font-display mb-4">Kontakt</h1>
        <p className="text-gray-400 text-xl max-w-xl mx-auto">Skontaktuj się z nami – jesteśmy tu, by pomóc</p>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">Wyślij wiadomość</h2>

              {state.success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  Twoja wiadomość została wysłana. Odpiszemy w ciągu 24h!
                </div>
              )}
              {state.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {state.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <input type="hidden" name="_formStartTime" ref={startTimeRef} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Imię i nazwisko *</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-sm" placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail *</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-sm" placeholder="jan@firma.pl" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefon</label>
                    <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-sm" placeholder="+48 123 456 789" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Firma</label>
                    <input type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-sm" placeholder="Nazwa firmy" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Temat *</label>
                  <select name="subject" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-sm bg-white">
                    <option value="">Wybierz temat</option>
                    <option value="demo">Prośba o demo</option>
                    <option value="oferta">Zapytanie o ofertę</option>
                    <option value="wsparcie">Wsparcie techniczne</option>
                    <option value="partnerstwo">Partnerstwo</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Wiadomość *</label>
                  <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-sm resize-none" placeholder="Opisz swoje potrzeby..." />
                </div>

                <button type="submit" disabled={isPending} className="w-full bg-[#0052FF] text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                  {isPending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-6">Dane kontaktowe</h2>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: 'Telefon', value: '+48 22 123 45 67', href: 'tel:+48221234567' },
                    { icon: Mail, label: 'E-mail', value: 'kontakt@fleetlink.pl', href: 'mailto:kontakt@fleetlink.pl' },
                    { icon: MapPin, label: 'Adres', value: 'ul. Technologiczna 15, 00-001 Warszawa', href: null },
                    { icon: Clock, label: 'Godziny pracy', value: 'Pn-Pt 8:00-18:00, Sob 9:00-14:00', href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-[#0052FF]/10 rounded-xl flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#0052FF]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-[#0F172A] font-medium hover:text-[#0052FF] transition-colors">{item.value}</a>
                        ) : (
                          <div className="text-[#0F172A] font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#0052FF]/5 rounded-2xl h-64 flex items-center justify-center border border-[#0052FF]/20">
                <div className="text-center text-gray-400">
                  <MapPin className="w-10 h-10 mx-auto mb-2 text-[#0052FF]" />
                  <p className="text-sm">ul. Technologiczna 15</p>
                  <p className="text-sm">00-001 Warszawa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
