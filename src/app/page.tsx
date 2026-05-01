import { getTestimonials } from '@/lib/db'
import HeroSection from '@/components/home/HeroSection'
import LiveTrustBar from '@/components/home/LiveTrustBar'
import StatsSection from '@/components/home/StatsSection'
import HowItWorks from '@/components/home/HowItWorks'
import LiveDashboardPreview from '@/components/home/LiveDashboardPreview'
import AIFeaturesBanner from '@/components/home/AIFeaturesBanner'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import CTASection from '@/components/home/CTASection'

export default async function HomePage() {
  const testimonials = await getTestimonials()

  return (
    <>
      <HeroSection />
      <LiveTrustBar />
      <StatsSection />
      <HowItWorks />
      <LiveDashboardPreview />
      <AIFeaturesBanner />
      <TestimonialSlider testimonials={testimonials} />
      <CTASection />
    </>
  )
}
