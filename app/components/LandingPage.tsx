'use client'

import { useEffect, useState } from 'react'
import TopNav from '@/app/components/TopNav'
import HeroSection from './sections/HeroSection'
import DiscoverInstituteSection from './sections/DiscoverInstituteSection'
import Testimonial from './sections/Testimonial'
import FounderSection from './sections/FounderSection'
import CTASection from './sections/CTASection'
import Footer from './Layout/Footer'
import FAQSection from './sections/FAQSection'
import Activities from './sections/Activities'
import KeyProgramFeatures from './sections/KeyProgramFeatures'
import PageLoader from './PageLoader'
import CreativeCapabilitiesSection from './sections/CreativeCapabilitiesSection'

export default function LandingPage() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Give the page time to render and hydrate properly
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isReady) {
    return <PageLoader />
  }
  return (
    <main
      id="home"
      className="relative min-h-screen w-screen max-w-screen items-center overflow-clip bg-[linear-gradient(to_right,#FFAE8F33_0%,#C8D5FF33_40%,#A2D7FF33_99%)]"
    >
      <TopNav />
      <HeroSection />
      <CreativeCapabilitiesSection />
      <KeyProgramFeatures />
      {/* <AboutDMIF /> */}
      <DiscoverInstituteSection />

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
