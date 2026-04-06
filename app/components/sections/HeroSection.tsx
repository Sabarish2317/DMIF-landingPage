'use client'

import React from 'react'
import Button from '@/app/components/Button'
import Image from 'next/image'

export default function Brain() {
  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('contact')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative z-0 flex h-screen max-h-screen w-full flex-col items-center justify-center gap-10 px-4 py-6 pt-12 sm:px-8 sm:py-8 md:px-16 lg:px-24">
      {/* Hero content */}
      <div className="-mt-16 flex w-full flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        {/* Left content */}
        <section className="z-15 flex w-full flex-col items-start justify-between gap-4 sm:gap-6 md:max-w-xl">
          {/* Announcement */}
          <div className="flex w-full max-w-sm cursor-pointer flex-row items-center gap-4 overflow-hidden rounded-md bg-white pr-3 sm:max-w-95">
            <span className="z-15 shrink-0 rounded-md bg-[#2b2b2b] px-3 py-2.5 text-xs font-medium tracking-wide text-white ring ring-[#2b2b2b] sm:text-sm">
              Announcement
            </span>

            <div className="relative z-12 w-full min-w-max overflow-hidden text-sm font-medium tracking-wide whitespace-nowrap text-[#1e1e1e] sm:text-base">
              We are in IIT Madras
            </div>
          </div>
          {/* Heading */}
          <h1 className="font-inter text-2xl leading-[1.15] font-medium tracking-tight text-[#1e1e1e] sm:text-4xl md:text-5xl">
            Dr. Madhan
            <br />
            Institute of Future
          </h1>

          {/* Subheading */}
          <p className="md:text-md w-max text-base leading-[1.2] font-medium tracking-wide text-[#1e1e1e]/80 sm:text-lg">
            Founded by an <span className="font-bold">IIM Calcutta</span>{' '}
            Alumnus and a globally
            <br />
            recognized inventor and technologist.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-row items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button variant="outline" onClick={handleScrollToCTA}>
              Book a Meet
            </Button>
            <Button variant="fill" className="bg-[#fd4f0c]! text-white!">
              Get Started →
            </Button>
          </div>
          <div className="flex flex-row items-center gap-2">
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
          </div>
        </section>
        {/*  right content */}

        <Image
          width={2000}
          height={2000}
          src="/hero-section.svg"
          alt="Hero Section"
          className="object-center opacity-0"
        />
        <Image
          width={1200}
          height={1200}
          src="/hero-section.svg"
          alt="Hero Section"
          className="absolute right-0 object-center pr-12"
        />
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
            className="flex flex-col gap-2 rounded-lg border border-[#565452]/20 bg-white p-3 sm:gap-3 sm:p-4"
          >
            <div className="flex items-start justify-between">
              <span className="md:text-md font-inter line-clamp-2 text-xs font-medium text-[#2b2b2b] sm:text-sm">
                {stat.title}
              </span>
              <span className="ml-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fd4f0c]" />
            </div>
            <span className="text-base font-medium text-[#fa773a] sm:text-lg md:text-xl">
              {stat.value}
            </span>
            <span className="md:text-md text-xs leading-tight font-medium text-[#2b2b2b] sm:text-sm">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
