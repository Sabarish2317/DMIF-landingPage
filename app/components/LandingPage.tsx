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
    <main
      id="home"
      className="relative min-h-screen w-screen max-w-screen items-center overflow-clip bg-[linear-gradient(to_right,#FFAE8F33_0%,#C8D5FF33_40%,#A2D7FF33_99%)]"
    >
      <TopNav />
      <HeroSection />
      {/* <AboutDMIF /> */}
      <DiscoverInstituteSection />
      <KeyProgramFeatures />
      <Activities />
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="hall-of-fame">
        <FounderSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <FAQSection />
      <Footer />
    </main>
  )
}
