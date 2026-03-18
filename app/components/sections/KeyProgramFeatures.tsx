'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const leftFeatures = [
  {
    title: 'Patents',
    description:
      'Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas.',
    indent: false,
  },
  {
    title: 'Global Exposure',
    description:
      'Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas.',
    indent: true,
  },
  {
    title: 'Innovative Thinking',
    description:
      'Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas.',
    indent: false,
  },
]

const rightFeatures = [
  {
    title: 'Research',
    description:
      'Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas.',
    indent: false,
  },
  {
    title: 'Ivy League Readiness',
    description:
      'Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas.',
    indent: true,
  },
  {
    title: 'Brain Science',
    description:
      'Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas.',
    indent: false,
  },
]

function FeatureCard({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative cursor-default rounded-xl border border-[#787878] bg-[#2B2B2B] p-4 backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      animate={{ y: hovered ? -10 : 0, scale: hovered ? 1.05 : 1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ willChange: 'transform' }}
    >
      {/* Orange accent dot */}
      <span className="absolute top-3 right-3 h-1.5 w-1.5 rounded-sm bg-[#fd4f0c]" />
      <h3 className="mb-2 pr-4 text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs leading-relaxed text-white/80">{description}</p>
      {/* <AnimatePresence>
        {hovered && (
          <motion.p
            key="cta"
            className="cursor-pointer overflow-hidden text-xs font-medium text-[#fd4f0c] hover:underline"
            initial={{ opacity: 0, y: 6, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto', marginTop: 8 }}
            exit={{ opacity: 0, y: 6, height: 0, marginTop: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            Learn More
          </motion.p>
        )}
      </AnimatePresence> */}
    </motion.div>
  )
}

export default function KeyProgramFeatures() {
  return (
    <section className="h-screen w-full overflow-hidden bg-[#0E0A18] py-16">
      {/* Header */}
      <div className="relative z-[30] mb-12 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <h2 className="font-inter text-3xl font-semibold tracking-tight text-white md:text-[2.5rem]">
          Key Program Features
        </h2>
        <p className="text-base leading-relaxed text-white/50">
          Founded by an IIM Calcutta Alumnus and a globally
          <br />
          recognized inventor and technologist.
        </p>
      </div>

      {/* 3-column layout: cards | SVG (absolute behind) | cards */}
      <div className="relative z-[11] mx-auto flex max-w-7xl items-center gap-100 px-6 md:px-12 lg:px-16">
        {/* Left cards */}
        <div className="z-10 flex flex-1 flex-col justify-center gap-5">
          {leftFeatures.map((f, i) => (
            <div key={f.title} style={{ paddingLeft: i === 1 ? '18%' : '0' }}>
              <FeatureCard
                title={f.title}
                description={f.description}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* Center SVG — absolute, centered behind the cards */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
            style={{ willChange: 'transform' }}
          >
            <Image
              src="/icons/rotating-ellipse.svg"
              alt="DMIF feature hub"
              width={700}
              height={500}
              className="z-10 select-none"
              priority
            />
          </motion.div>
        </div>

        {/* Right cards */}
        <div className="z-10 flex flex-1 flex-col justify-center gap-5">
          {rightFeatures.map((f, i) => (
            <div key={f.title} style={{ paddingRight: i === 1 ? '18%' : '0' }}>
              <FeatureCard
                title={f.title}
                description={f.description}
                index={i + 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
