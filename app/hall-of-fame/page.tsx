'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTestimonials } from '@/app/components/TestimonialData'
import { X } from 'lucide-react'
import TopNav from '@/app/components/TopNav'
import Footer from '@/app/components/Layout/Footer'

const dotPattern = {
  backgroundImage:
    'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
}

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function HallOfFame() {
  const { items, loading } = useTestimonials()
  const [selectedImage, setSelectedImage] = useState<{
    image: string
    name: string
    position?: string
    patent?: string
  } | null>(null)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Flatten all outcomes from all testimonials
  const allOutcomes = items.flatMap((item) =>
    item.outcomes.map((outcome) => ({
      image: outcome.image,
      label: outcome.label,
      name: item.name,
      position: item.position,
      patent: item.patent,
    }))
  )

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0E0A18]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-[#fd4f0c] border-t-transparent"></div>
          <p className="text-lg text-white/60">Loading Hall of Fame...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#0E0A18]">
      <TopNav />

      {/* Hero Section with Dotted Background */}
      <section
        className="relative min-h-96 overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
        style={dotPattern}
      >
        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E0A18]/80 via-[#0E0A18]/50 to-[#0E0A18]/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="space-y-4"
          >
            <div className="relative inline-block">
              <span className="absolute -top-3 -left-3 h-2.5 w-2.5 rounded-sm bg-[#fd4f0c]" />
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Hall of Fame
              </h1>
            </div>
            <p className="mx-auto max-w-2xl text-lg text-white/70 md:text-xl">
              Celebrating exceptional achievements in patents and groundbreaking
              research that shape the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative bg-[#0E0A18] pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {allOutcomes.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-white/50">
                No outcomes to display yet
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {allOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#787878] bg-[#2B2B2B] transition-all duration-300 hover:scale-105 hover:border-[#fd4f0c]"
                  onClick={() =>
                    setSelectedImage({
                      image: outcome.image,
                      name: outcome.name,
                      position: outcome.position,
                      patent: outcome.patent,
                    })
                  }
                >
                  {/* Status Dot */}
                  <span className="absolute top-3 right-3 z-20 h-1.5 w-1.5 rounded-sm bg-[#fd4f0c]" />

                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                    <img
                      src={outcome.image}
                      alt={`${outcome.name} - ${outcome.label || 'Achievement'}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />

                    {/* Hover Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-full bg-[#fd4f0c] p-3">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-4 sm:p-5">
                    <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-white sm:text-base">
                      {outcome.name}
                    </h3>
                    {outcome.position && (
                      <p className="mb-3 line-clamp-1 text-xs text-white/60 sm:text-sm">
                        {outcome.position}
                      </p>
                    )}
                    {outcome.patent && (
                      <div className="inline-block">
                        <span className="rounded-md border border-[#fd4f0c]/40 bg-[#fd4f0c]/20 px-2 py-1 text-xs font-medium text-white/80">
                          {outcome.patent}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 z-10 rounded-full border border-[#787878] bg-[#2B2B2B] p-2.5 text-white transition-all duration-200 hover:scale-110 hover:bg-[#fd4f0c]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex h-full w-full flex-col items-center gap-6">
              {/* Image */}
              <div className="relative flex max-h-[60vh] w-full items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="max-h-[60vh] max-w-full rounded-lg object-contain shadow-2xl"
                />
              </div>

              {/* Info Card */}
              <div className="relative w-full max-w-md rounded-xl border border-[#787878] bg-[#2B2B2B] p-6 shadow-2xl">
                <span className="absolute -top-3 -right-3 h-2 w-2 rounded-sm bg-[#fd4f0c]" />
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {selectedImage.name}
                </h2>
                {selectedImage.position && (
                  <p className="mb-3 text-sm text-white/70">
                    {selectedImage.position}
                  </p>
                )}
                {selectedImage.patent && (
                  <div className="inline-block">
                    <span className="rounded-md border border-[#fd4f0c]/40 bg-[#fd4f0c]/20 px-3 py-1.5 text-xs font-medium text-white/80">
                      {selectedImage.patent}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Click outside hint */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/50">
            Press ESC or click outside to close
          </p>
        </div>
      )}

      <Footer />
    </div>
  )
}
