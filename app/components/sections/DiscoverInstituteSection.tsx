'use client'

import Image from 'next/image'
import Button from '../Button'
import { Header } from '../ui/Header'

/* ================================
   Data
================================ */

const instituteSectionData = {
  title: 'Discover Our Institute',
  buttonText: 'Book a Meet',
  buttonLink: '/contact',
  videoUrl:
    'https://dmifstorage.blob.core.windows.net/course-1-videos/DMIF_Video.mp4?sp=racwdl&st=2026-03-23T05:22:18Z&se=2027-03-23T13:37:18Z&spr=https&sv=2024-11-04&sr=c&sig=%2F%2BmuoUu2fMrZsDIcDxo%2BO13qyYujxZ3XBKO5hc01Osg%3D',
  cards: [
    {
      title: 'Facilities',
      description:
        'Live mentorship sessions, research and patent toolkits, and guided documentation support for achieving real innovation outcomes.',
      icon: '/icons/home.svg',
    },
    {
      title: 'Location',
      description:
        'Fully online with global reach open to students from India, the US, Europe, Australia and beyond.',
      icon: '/icons/location.svg',
    },
    {
      title: 'Achievements',
      description:
        'DMIF learners have published in IEEE, Springer, ACM, filed patents, and built strong portfolios for Ivy League admissions.',
      icon: '/icons/trophy.svg',
    },
  ],
} as const

/* ================================
   Component
================================ */

export default function DiscoverInstituteSection() {
  return (
    <section className="flex w-full flex-col gap-8 overflow-hidden px-5 pt-2 pb-8 md:px-12">
      {/* ================= ORANGE HEADER ================= */}
      <div className="relative flex w-full flex-col items-center gap-6 text-center text-white">
        <div className="flex w-full flex-col items-center justify-center gap-3 self-center-safe text-center">
          <Header text="Our Institute" />
          <h2 className="font-inter text-2xl font-semibold tracking-tight text-[#1e1e1e]">
            {instituteSectionData.title}
          </h2>
          <p className="text-sm font-medium text-[#1e1e1e]/80 md:text-sm">
            Get to know us in 3 Minutes! Watch our introduction video to explore
            who we are, what we do, and how <br className="hidden md:flex" /> we
            can help you achieve your goals.
          </p>
          <Button
            variant="fill"
            className="mt-2 bg-[#fd4f0c]! text-sm! text-white!"
          >
            Book a Call →
          </Button>
        </div>

        {/* ================= ABSOLUTE VIDEO ================= */}

        <div className="w-full overflow-hidden rounded-xl border-4 border-white bg-black shadow-2xl lg:w-1/2">
          <div className="aspect-video">
            <video className="h-full" controls playsInline preload="metadata">
              <source src={instituteSectionData.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:px-4">
        {instituteSectionData.cards.map((card, index) => (
          <div
            key={index}
            className="rounded-sm border border-[#565452]/20 bg-white p-6 text-white transition-transform hover:scale-[1.02]"
          >
            <Image
              src={card.icon}
              alt={card.title}
              width={28}
              height={28}
              className="mb-4"
            />

            <h3 className="mb-3 text-base font-semibold text-[#fd4f0c] md:text-lg">
              {card.title}
            </h3>

            <p className="text-sm font-medium text-[#1e1e1e]/75">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
