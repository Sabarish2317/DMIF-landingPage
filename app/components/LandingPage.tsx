import { Suspense } from 'react'
import TopNav from '@/app/components/TopNav'
import HeroSection from './sections/HeroSection'
import AboutDMIF from './sections/AboutDMIF'
import HeroLoader from './HeroLoader'
import DiscoverInstituteSection from './sections/DiscoverInstituteSection'
import Testimonial from './sections/Testimonial'
import FounderSection from './sections/FounderSection'
import CTASection from './sections/CTASection'

export default function LandingPage() {
  return (
    <main className="relative min-h-screen items-center">
      {/* Loader lives outside Suspense so React doesn't forcibly unmount it */}
      <HeroLoader />
      <Suspense fallback={null}>
        <TopNav />
        <HeroSection />
        <AboutDMIF />
        <DiscoverInstituteSection/>
        <Testimonial/>
        <FounderSection/>
        <CTASection />
      </Suspense>
    </main>
  )
}
