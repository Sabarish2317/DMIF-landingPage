'use client'

import dynamic from 'next/dynamic'
import Button from '@/app/components/Button'

const BrainCanvas = dynamic(() => import('../BrainCanvas'), { ssr: false })

export default function Brain() {
  const rotationSpeed = 0.25 // adjust for spin speed (radians per second)

  return (
    <div className="relative z-0 h-screen w-full">
      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between px-8 py-8 md:px-16 lg:px-24">
        {/* Top section - Hero content */}
        <div className="flex flex-1 flex-row items-center justify-between">
          {/* Left content */}
          <section className="flex max-w-xl flex-col items-start justify-center gap-6">
            {/* Badge */}
            <div className="flex cursor-pointer items-center gap-4 overflow-clip rounded-2xl bg-white pr-3">
              <span className="rounded-2xl bg-[#2b2b2b] px-3 py-2.5 text-sm font-medium tracking-wide text-white ring ring-[#2b2b2b]">
                New
              </span>
              <span className="text-md leading-[1.2] font-medium text-[#2b2b2b] hover:underline">
                We are in IIT Madras, view more →
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-inter text-[56px] leading-[1.15] font-medium tracking-tight text-white">
              Dr. Madhan
              <br />
              Institute of Future
            </h1>

            {/* Subheading */}
            <p className="text-xl leading-[1.2] font-medium tracking-wide text-white">
              Founded by an <span className="font-bold">IIM Calcutta</span>{' '}
              Alumnus and a globally
              <br />
              recognized inventor and technologist.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="fill"
                className="text-md bg-white text-[#fd4f0c]!"
              >
                Get Started →
              </Button>
              <Button
                variant="fill"
                className="text-md bg-[#2b2b2b]! text-white!"
              >
                Book a Meet
              </Button>
            </div>
          </section>

          {/* Right content - Feature pills */}
          <section className="flex flex-col items-end justify-center gap-4">
            {[
              { highlight: '1000s', label: 'Mentored' },
              { highlight: 'Brain 2.0', label: 'Framework' },
              { highlight: 'MindNext™', label: 'Movement' },
              { highlight: 'Mentorship over', label: 'Teaching' },
              { highlight: 'Active Learning', label: 'Methodology' },
            ].map((item, i) => (
              <>
                <div
                  key={i + item.label}
                  className="rounded-lg bg-white px-3 py-1 text-[16px] font-medium tracking-wide backdrop-blur-sm"
                >
                  <span className="text-[#fd4f0c]">{item.highlight}</span>{' '}
                  <span className="text-black">{item.label}</span>
                </div>
                {i != 4 && (
                  <div className="circle h-3 w-3 rounded-full bg-white" />
                )}
              </>
            ))}
          </section>
        </div>

        {/* Bottom section - Stats cards */}
        <div className="grid grid-cols-3 gap-6">
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
              className="flex flex-col gap-3 rounded-lg bg-white p-3"
            >
              <div className="flex items-start justify-between">
                <span className="text-md font-inter font-medium text-[#2b2b2b]">
                  {stat.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#fd4f0c]" />
              </div>
              <span className="text-xl font-medium text-[#fa773a]">
                {stat.value}
              </span>
              <span className="text-md font-medium text-[#2b2b2b]">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Brain 3D background */}
      <section className="absolute inset-0 flex overflow-hidden bg-[#fe4709]">
        <BrainCanvas
          rotationSpeed={rotationSpeed}
          modelScale={0.75}
          className="h-full w-full"
        />
      </section>

      {/* Progressive blur overlay: left half only, subtle 1px blur */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-1/2"
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, black 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
