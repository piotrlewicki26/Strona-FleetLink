'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  imageUrl: string
  industry: string
}

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(id)
  }, [testimonials.length])

  if (!testimonials.length) return null

  const t = testimonials[current]

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-display mb-4">
            Co mówią nasi klienci?
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 relative">
          <div className="text-6xl text-[#0052FF]/10 font-serif absolute top-6 left-8">&ldquo;</div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
              ))}
            </div>
            
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl relative z-10">
              &ldquo;{t.content}&rdquo;
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#0052FF]/20">
                <Image src={t.imageUrl} alt={t.name} width={56} height={56} className="object-cover" />
              </div>
              <div className="text-left">
                <div className="font-bold text-[#0F172A]">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}, {t.company}</div>
                <div className="text-[#0052FF] text-xs mt-0.5">{t.industry}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0052FF] hover:border-[#0052FF] hover:text-white transition-all group"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-[#0052FF] w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0052FF] hover:border-[#0052FF] hover:text-white transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
