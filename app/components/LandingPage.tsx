import { Suspense } from 'react'
import TopNav from '@/app/components/TopNav'
import HeroSection from './sections/HeroSection'
import AboutDMIF from './sections/AboutDMIF'
import HeroLoader from './HeroLoader'
import DiscoverInstituteSection from './sections/DiscoverInstituteSection'
import Testimonial from './sections/Testimonial'
import FounderSection from './sections/FounderSection'
import CTASection from './sections/CTASection'
import Footer from './Layout/Footer'
import FAQSection from './sections/FAQSection'
import Activities from './sections/Activities'
import KeyProgramFeatures from './sections/KeyProgramFeatures'

export default function LandingPage() {
  return (
    <main id="home" className="relative min-h-screen items-center">
      {/* Loader lives outside Suspense so React doesn't forcibly unmount it */}
      <HeroLoader />
      <Suspense fallback={null}>
        <TopNav />
        <HeroSection />
        <AboutDMIF />
        <DiscoverInstituteSection />
        <KeyProgramFeatures />
        <Activities />
        <div id="testimonials">
          <Testimonial />
        </div>
        <div id="founder">
          <FounderSection />
        </div>
        <div id="contact">
          <CTASection />
        </div>
        <FAQSection />
        <Footer />
      </Suspense>
    </main>
  )
}
