'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Linkedin, Instagram, Youtube, Mail, Facebook } from 'lucide-react'
import { useInView } from 'framer-motion'

// Counter Component
function AnimatedCounter() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const finalCount = 130
    const duration = 2 // seconds
    const steps = 60
    const increment = finalCount / steps
    let currentStep = 0

    const interval = setInterval(
      () => {
        currentStep++
        setCount(Math.min(Math.ceil(currentStep * increment), finalCount))

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      },
      (duration * 1000) / steps
    )

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <div ref={ref}>
      <h2 className="text-5xl leading-none font-bold md:text-6xl">{count}+</h2>
      <p className="mt-2 text-sm">Patent inventor</p>
    </div>
  )
}

export default function FounderSection() {
  return (
    <section className="w-full px-4 py-6 pt-12 sm:px-8 sm:py-8 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-500">Meet the</p>
        <h2 className="text-3xl font-medium text-gray-900 md:text-4xl">
          Founder
        </h2>
      </div>

      {/* Main Card */}
      <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-[#FD4F0C] text-white md:grid-cols-12">
        {/* === LEFT IMAGE === */}
        <div className="flex items-center justify-center p-6 md:col-span-3">
          <div className="w-fit rounded-lg bg-white p-2">
            <Image
              src="/img/drmadhan.png"
              alt="Dr. Madhan Kumar Srinivasan"
              width={280}
              height={320}
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* === CENTER DETAILS === */}
        <div className="flex flex-col justify-between border-t border-white/30 p-6 md:col-span-6 md:border-t-0 md:border-l md:p-10">
          <p className="text-base leading-relaxed md:text-2xl">
            Inventor of <strong>136 Patents</strong> | 3-times TEDx Speaker | Accenture
            Prolific Inventor & Infosys Cloud Tech Guru awardee | Cloud AI &
            Futuristic Tech Expert | Serial Entrepreneur with{' '}
            <strong>23+ years</strong> of experience &{' '}
            <strong>30+ research publications</strong>
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">
              Dr. Madhan Kumar Srinivasan
            </h3>
            <p className="text-sm opacity-90">Chief Mentor & CEO</p>
          </div>
        </div>

        {/* === RIGHT SOCIAL + COUNT === */}
        <div className="flex flex-col justify-between border-t border-white/30 p-6 md:col-span-3 md:border-t-0 md:border-l md:p-8">
          {/* Social Icons */}
          <div className="flex gap-3 md:justify-end">
            <a href="https://www.linkedin.com/in/drmadhaniimcal/" target="_blank">
              <div className="rounded-md bg-white p-2 text-[#FD4F0C] transition hover:scale-110">
                <Linkedin size={18} />
              </div>
            </a>

            <a href="mailto:madhan@drmadhan.org " target="_blank">
              <div className="rounded-md bg-white p-2 text-[#FD4F0C] transition hover:scale-110">
                <Mail size={18} />
              </div>
            </a>

            <a href="https://www.instagram.com/madhankrs/" target="_blank">
              <div className="rounded-md bg-white p-2 text-[#FD4F0C] transition hover:scale-110">
                <Instagram size={18} />
              </div>
            </a>

            <a href="https://www.youtube.com/@MadhanKumarSrinivasan" target="_blank">
              <div className="rounded-md bg-white p-2 text-[#FD4F0C] transition hover:scale-110">
                <Youtube size={18} />
              </div>
            </a>

            {/* <a href="https://facebook.com" target="_blank">
              <div className="rounded-md bg-white p-2 text-[#FD4F0C] transition hover:scale-110">
                <Facebook size={18} />
              </div>
            </a> */}
          </div>

          <div className="hidden md:block">
            <Image
              src="/img/socials.svg"
              alt="Social Icons"
              width={180}
              height={40}
            />
          </div>
          {/* Patent Count */}
          <div className="mt-10 md:mt-0">
            <AnimatedCounter />
          </div>
        </div>
      </div>
    </section>
  )
}
