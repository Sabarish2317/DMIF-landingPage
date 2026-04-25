'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { ImageZoomModal } from '../ImageZoomModal'
import type { TestimonialItem } from '../../TestimonialData'

// Define the type for a single review
// Use the shared `TestimonialItem` type coming from TestimonialData
interface TestimonialSliderProps {
  reviews: TestimonialItem[]
  /** Optional class name for the container */
  className?: string
}

/**
 * A reusable, animated testimonial slider component.
 * It uses framer-motion for animations and is styled with
 * shadcn/ui theme variables.
 */
export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // 'direction' helps framer-motion understand slide direction (next vs. prev)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isPaused, setIsPaused] = useState(false)
  const [showFull, setShowFull] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const AUTOPLAY_DELAY = 5000
  const isZoomOpen = zoomedImage !== null
  const activeReview = reviews.length > 0 ? reviews[currentIndex] : undefined

  const handleNext = () => {
    if (reviews.length === 0 || isDialogOpen || isZoomOpen) return
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    resetAutoplay()
  }

  const handlePrev = () => {
    if (reviews.length === 0 || isDialogOpen || isZoomOpen) return
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    resetAutoplay()
  }

  const handleThumbnailClick = (index: number) => {
    // Determine direction for animation
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
    // reset autoplay when user manually navigates
    resetAutoplay()
  }

  const thumbnailReviews =
    reviews.length > 0
      ? Array.from({ length: reviews.length - 1 }, (_, i) => {
          const index =
            (currentIndex - (i + 1) + reviews.length) % reviews.length
          return reviews[index]
        })
      : []

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current as any)
      intervalRef.current = null
    }
  }

  function startAutoplay() {
    stopAutoplay()
    if (reviews.length === 0) return
    intervalRef.current = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, AUTOPLAY_DELAY)
  }

  function resetAutoplay() {
    stopAutoplay()
    startAutoplay()
  }

  useEffect(() => {
    if (isZoomOpen) {
      setIsPaused(true)
      stopAutoplay()
    } else {
      setIsPaused(false)
      startAutoplay()
    }
  }, [isZoomOpen])

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isDialogOpen])

  // start/stop autoplay when reviews change or pause state changes
  useEffect(() => {
    if (!isPaused && !isDialogOpen && !isZoomOpen) {
      startAutoplay()
    }
    return () => stopAutoplay()
  }, [reviews, isPaused, isDialogOpen])

  // reset showFull whenever the active review changes
  useEffect(() => {
    setShowFull(false)
  }, [currentIndex])

  // Animation variants for the main image
  const imageVariants = {
    enter: (direction: 'left' | 'right') => ({
      y: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: 'left' | 'right') => ({
      y: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  // Animation variants for the text content
  const textVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -50 : 50,
      opacity: 0,
    }),
  }

  return (
    <div
      className={cn(
        'bg-background text-foreground relative min-h-162.5 w-full overflow-hidden',
        className
      )}
    >
      <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-12">
        {/* === Left Column: Meta and Thumbnails === */}
        <div className="order-2 flex h-full flex-col justify-between md:order-1 md:col-span-3">
          <div className="flex flex-row justify-between space-x-4 md:flex-col md:justify-start md:space-y-4 md:space-x-0"></div>

          {/* Thumbnail Navigation */}
          <div className="scrollbar-hide mt-8 flex space-x-2 overflow-x-auto md:mt-0">
            {thumbnailReviews.map((review) => {
              // Find the original index to navigate to
              const originalIndex = reviews.findIndex((r) => r.id === review.id)
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="focus:ring-primary focus:ring-offset-background h-20 w-20 min-w-20 shrink-0 overflow-hidden rounded-md opacity-70 transition-opacity duration-300 hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none md:h-24 md:w-24 md:min-w-24"
                  aria-label={`View review from ${review.name}`}
                  style={{ aspectRatio: '1/1' }}
                >
                  <img
                    src={review.image || ''}
                    alt={review.name}
                    className="h-full w-full origin-top object-cover object-top"
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* === Center Column: Main Image === */}
        <div
          className="relative order-1 h-full min-h-64 md:order-2 md:col-span-4"
          onMouseEnter={() => {
            if (isDialogOpen) return
            setIsPaused(true)
            stopAutoplay()
          }}
          onMouseLeave={() => {
            if (isDialogOpen) return
            setIsPaused(false)
            startAutoplay()
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {activeReview && (
              <motion.img
                key={currentIndex}
                src={activeReview.image}
                alt={activeReview.name}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 h-full w-full origin-top rounded-lg object-cover object-top"
              />
            )}
          </AnimatePresence>
        </div>

        {/* === Right Column: Text and Navigation === */}
        <div className="order-3 flex h-full flex-col justify-between md:order-3 md:col-span-5 md:pl-8">
          {/* Text Content */}
          <div
            onMouseEnter={() => {
              setIsPaused(true)
              stopAutoplay()
            }}
            onMouseLeave={() => {
              setIsPaused(false)
              startAutoplay()
            }}
            className="relative min-h-50 overflow-hidden pt-4"
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="mt-1 text-xl font-semibold">
                  {activeReview?.name}
                </h3>
                <p className="line-clamp-1 text-sm font-medium text-[#FD4F0C]">
                  {activeReview?.position ?? activeReview?.patent ?? ''}
                </p>

                <blockquote className="text-md mt-6 line-clamp-4 leading-snug font-medium md:text-xl">
                  &quot;
                  {showFull || !activeReview?.text
                    ? activeReview?.text
                    : activeReview?.text?.slice(0, 200) +
                      (activeReview?.text.length > 240 ? '...' : '')}
                  &quot;
                </blockquote>

                {activeReview?.text && activeReview.text.length > 240 && (
                  <button
                    className="mt-2 text-sm text-[#FD4F0C] underline"
                    onClick={() => {
                      setIsDialogOpen(true)
                      setIsPaused(true)
                      stopAutoplay()
                    }}
                    aria-expanded={showFull}
                  >
                    See more
                  </button>
                )}

          {/* Outcomes Section - render ONLY if data exists */}
{/* Outcomes Section - always reserve space */}
<div className="mt-6 min-h-[120px]">
  <p className="mb-2 font-medium">
    {activeReview?.outcomes?.length ? "Outcomes" : ""}
  </p>

  <div className="overflow-x-auto">
    <div className="flex scale-75 gap-4 pb-2 md:scale-100">
      {activeReview?.outcomes?.map((item, idx) => (
        <div
          key={idx}
          className="group flex shrink-0 cursor-pointer flex-col items-center"
          onClick={() => setZoomedImage(item.image)}
        >
          <img
            src={item.image}
            alt={item.label}
            className="h-16 w-16 rounded-md object-cover shadow-md transition group-hover:opacity-80"
          />
          <span className="mt-1 text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
</div>  
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-12 flex items-center space-x-2 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2 border-gray-200"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="h-5 w-5 text-[#FD4F0C]" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-12 w-12 rounded-full bg-[#FD4F0C] hover:bg-[#e04500]"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      <ImageZoomModal
        isOpen={zoomedImage !== null}
        imageUrl={zoomedImage || ''}
        imageAlt="Zoomed outcome image"
        onClose={() => setZoomedImage(null)}
      />

      {/* Full Text Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[80vh] w-full max-w-2xl overflow-x-hidden overflow-y-auto rounded-3xl bg-white p-8 shadow-xl"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Hide scrollbar for webkit browsers */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {/* Close Button */}
            <button
              onClick={() => {
                setIsDialogOpen(false)
                setIsPaused(false)
                startAutoplay()
              }}
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100"
              aria-label="Close dialog"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Twitter-like Comment Style */}
            <div className="flex gap-4">
              {/* Profile Image */}
              <div className="shrink-0">
                <img
                  src={activeReview?.image}
                  alt={activeReview?.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold">{activeReview?.name}</h3>
                  <p className="text-sm text-gray-500">
                    {activeReview?.position ?? activeReview?.patent ?? ''}
                  </p>
                </div>

                {/* Full Text */}
                <p className="text-lg leading-relaxed text-gray-800">
                  {activeReview?.text}
                </p>

                {/* Outcomes if available */}
                {activeReview?.outcomes && activeReview.outcomes.length > 0 && (
                  <div className="mt-6 border-t pt-6">
                    <p className="mb-4 font-semibold">Outcomes</p>
                    <div className="flex flex-wrap gap-4">
                      {activeReview.outcomes.map((item, idx) => (
                        <div key={idx} className="text-center">
                          <img
                            src={item.image}
                            alt={item.label}
                            onClick={() => setZoomedImage(item.image)}
                            className="mb-2 h-20 w-20 cursor-pointer rounded-lg object-cover shadow-md transition hover:opacity-80"
                          />
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
