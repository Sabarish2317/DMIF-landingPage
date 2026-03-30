'use client'

import Link from 'next/link'
import Image from 'next/image'

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
    <section className="flex w-full flex-col overflow-hidden">
      {/* ================= ORANGE HEADER ================= */}
      <div
        className="relative flex flex-col items-center px-6 pt-14 pb-30 text-center text-white md:pb-76"
        style={{
          backgroundColor: '#FD4F0C',
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      >
  <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-3 text-center">
  <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold tracking-tight text-white">
    {instituteSectionData.title}
  </h2>
          <p className="text-base leading-relaxed text-white/80">
            Get to know us in 3 Minutes! Watch our introduction video to explore
            who we are, what we do, and how <br /> we can help you achieve your
            goals.
          </p>
          <Link
            href={instituteSectionData.buttonLink}
            className="flex w-max items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            {instituteSectionData.buttonText} →
          </Link>
        </div>

        {/* ================= ABSOLUTE VIDEO ================= */}
        <div className="absolute bottom-0 left-1/2 z-10 w-[90%] max-w-4xl translate-x-[-50%] translate-y-1/2 px-4">
          <div className="overflow-hidden rounded-xl border-4 border-white bg-black shadow-2xl">
            <div className="aspect-video">
              <video
                className="h-full w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source src={instituteSectionData.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* ================= WHITE GRID SECTION ================= */}
      <div className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-70">
        {/* Grid Background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#1e3a8a_1px,transparent_1px),linear-gradient(#1e3a8a_1px,transparent_1px)] bg-size-[70px_70px] opacity-10"></div>

        {/* Content */}
        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {instituteSectionData.cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#FD4F0C] p-6 text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={28}
                height={28}
                className="mb-4"
              />

              <h3 className="mb-3 text-base font-semibold md:text-lg">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed opacity-95">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
