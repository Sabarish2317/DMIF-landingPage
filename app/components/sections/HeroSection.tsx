'use client'

import React from 'react'
import Button from '@/app/components/Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScreenSize } from '@/app/hooks/useScreenSize'

export default function Brain() {
  const { screenSize } = useScreenSize()

  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('contact')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const heroImageSrc =
    screenSize === 'mobile' ? '/hero-section-sm.svg' : '/hero-section.svg'

  // Animation variants
  const headingVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  }

  const bottomToTopVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  }

  const topToBottomVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  }

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  const transitionConfig = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
  } as const

  return (
    <div className="relative z-0 flex h-max w-full flex-col items-center justify-center gap-10 px-4 py-6 pt-12 sm:px-8 sm:py-8 md:h-screen md:max-h-screen md:px-24">
      {/* Hero content */}
      <div className="-mt-0 mt-0 flex w-full flex-col items-center justify-between gap-8 md:-mt-16 md:flex-row md:gap-0">
        {/* Left content */}
        <section className="z-15 flex w-full flex-col items-start justify-between gap-4 sm:gap-6 md:max-w-xl">
          {/* Announcement */}
          <motion.div
            initial={bottomToTopVariants.initial}
            animate={bottomToTopVariants.animate}
            transition={{ ...transitionConfig, delay: 0.2 }}
            className="flex w-max max-w-sm cursor-pointer flex-row items-center gap-4 overflow-hidden rounded-md bg-white pr-4 sm:max-w-95 md:w-full"
          >
            <span className="z-15 shrink-0 rounded-md bg-[#2b2b2b] px-3 py-2.5 text-xs font-medium tracking-wide text-white ring ring-[#2b2b2b] sm:text-sm">
              Announcement
            </span>

            <div className="relative z-12 w-max min-w-max overflow-hidden text-sm font-medium tracking-wide whitespace-nowrap text-[#1e1e1e] sm:text-base md:w-full">
              We are in IIT Madras
            </div>
          </motion.div>
          {/* Heading */}
          <motion.h1
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            initial={headingVariants.initial}
            animate={headingVariants.animate}
            transition={{ ...transitionConfig, delay: 0 }}
            className="font-inter text-4xl leading-[1.15] font-medium tracking-tight text-[#1e1e1e] md:text-4xl lg:text-5xl"
          >
            Dr. Madhan
            <br />
            Institute of Future
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={topToBottomVariants.initial}
            animate={topToBottomVariants.animate}
            transition={{ ...transitionConfig, delay: 0.4 }}
            className="md:text-md w-max text-base leading-[1.2] font-medium tracking-wide text-[#1e1e1e]/80 sm:text-lg"
          >
            Founded by an <span className="font-bold">IIM Calcutta</span>{' '}
            Alumnus and a globally
            <br />
            recognized inventor and technologist.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={topToBottomVariants.initial}
            animate={topToBottomVariants.animate}
            transition={{ ...transitionConfig, delay: 0.5 }}
            className="flex w-full flex-row items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <Button variant="outline" onClick={handleScrollToCTA}>
              Book a Meet
            </Button>
            <Button
              variant="fill"
              onClick={handleScrollToCTA}
              className="bg-[#fd4f0c]! text-white!"
            >
              Get Started →
            </Button>
          </motion.div>
          <motion.div
            initial={topToBottomVariants.initial}
            animate={topToBottomVariants.animate}
            transition={{ ...transitionConfig, delay: 0.6 }}
            className="mt-4 flex flex-row items-center gap-2 md:mt-0"
          >
            <Image
              width={256}
              height={256}
              src="/images/people.png"
              alt="Hero Section"
              className="w-22"
            />
            <div className="flex flex-col gap-0.5 text-sm font-medium text-[#1e1e1e]/80">
              <Image
                width={256}
                className="w-28"
                height={256}
                src="/icons/stars.svg"
                alt="Hero Section"
              />
              Trusted by 1000+ Professionals & Students
            </div>
          </motion.div>
        </section>
        {/*  right content */}

        <motion.div
          initial={fadeVariants.initial}
          animate={fadeVariants.animate}
          className="relative h-full w-full"
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Image
            width={2000}
            height={2000}
            src={heroImageSrc}
            alt="Hero Section"
            className="object-left lg:opacity-0"
          />
          <Image
            width={2000}
            height={2000}
            src={heroImageSrc}
            alt="Hero Section"
            className="absolute top-0 right-0 h-full origin-right scale-[1] opacity-0 lg:opacity-100"
          />
        </motion.div>
      </div>
      {/* Bottom section - Stats cards */}
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
        {[
          {
            title: 'Global Patents',
            value: '100+',
            description: 'Granted Patents in 4 Continents',
          },
          {
            title: 'Global Publications',
            value: '50+',
            description: 'By Internationally Reputed Publishers',
          },
          {
            title: 'Unique Programs',
            value: '4',
            description: 'Industry-Aligned Learning Tracks',
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 gap-4 rounded-lg border border-[#565452]/20 bg-white p-3 p-4"
          >
            <div className="flex items-start justify-between">
              <span className="text-md font-inter line-clamp-2 font-medium text-[#2b2b2b]">
                {stat.title}
              </span>
              <span className="ml-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fd4f0c]" />
            </div>
            <span className="text-base font-medium text-[#fa773a] sm:text-lg md:text-xl">
              {stat.value}
            </span>
            <span className="md:text-md leading-tight font-medium text-[#2b2b2b]">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
