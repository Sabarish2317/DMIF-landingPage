'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ZoomOut } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ImageZoomModalProps {
  isOpen: boolean
  imageUrl: string
  imageAlt?: string
  onClose: () => void
}

export const ImageZoomModal = ({
  isOpen,
  imageUrl,
  imageAlt = 'Zoomed image',
  onClose,
}: ImageZoomModalProps) => {
  const [zoom, setZoom] = useState(1)

  // Reset zoom when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setZoom(1)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 1))
  }

  const handleResetZoom = () => {
    setZoom(1)
  }

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative flex w-full max-w-4xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 transition hover:bg-white"
              aria-label="Close zoom"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>

            {/* Image Container */}
        <div className="relative flex max-h-[80vh] w-full items-center justify-center overflow-auto rounded-2xl bg-black">
  <motion.img
    src={imageUrl}
    alt={imageAlt}
    className="max-h-full max-w-full object-contain"
                style={{
                  scale: zoom,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleZoomOut}
                className="rounded-lg border-2 border-white bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Zoom out"
                disabled={zoom <= 1}
              >
                <ZoomOut className="h-5 w-5" />
              </button>

              <span className="min-w-20 text-center text-white">
                {Math.round(zoom * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                className="rounded-lg border-2 border-white bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Zoom in"
                disabled={zoom >= 3}
              >
                <ZoomIn className="h-5 w-5" />
              </button>

              <button
                onClick={handleResetZoom}
                className="ml-2 rounded-lg border-2 border-white px-4 py-2 text-white transition hover:bg-white/10"
                aria-label="Reset zoom"
              >
                Reset
              </button>
            </div>

            {/* Keyboard Hint */}
            <p className="mt-4 text-center text-xs text-white/60">
              Press <kbd className="rounded bg-white/10 px-2 py-1">ESC</kbd> to
              close
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
