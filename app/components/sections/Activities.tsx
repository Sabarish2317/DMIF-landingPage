'use client'

import React, { useEffect, useState, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import styles from './Activities.module.css'
import { Header } from '../ui/Header'
import { CustomScrollbar } from '../ui/CustomScrollBar'

interface EventItem {
  id: number
  title: string
  description: string
  location: string
  images: string[]
  event_date: string
}

const Activities = () => {
  const [events, setEvents] = useState<EventItem[]>([])
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const selectedImages = selectedEvent?.images ?? []
  const safeImageIndex = Math.min(
    selectedImageIndex,
    Math.max(selectedImages.length - 1, 0)
  )
  const currentImage = selectedImages[safeImageIndex] ?? ''

  useEffect(() => {
    const loadEvents = async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false })

      if (data && data.length > 0) {
        const sorted = data as EventItem[]
        setEvents(sorted)
        setSelectedEvent(sorted[0])
        setSelectedImageIndex(0)
      }
    }

    void loadEvents()
  }, [])

  // Auto slideshow
  useEffect(() => {
    if (!selectedEvent || isPaused || selectedImages.length <= 1) return

    intervalRef.current = setInterval(() => {
      setSelectedImageIndex((prev) =>
        prev + 1 >= selectedImages.length ? 0 : prev + 1
      )
    }, 3000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [selectedEvent, isPaused, selectedImages.length])

  return (
    <section className="flex h-screen items-center justify-center bg-white px-4 py-6 pt-12 sm:px-8 sm:py-8 md:px-16 lg:px-24">
      <div className="max-w-8xl mx-auto flex w-full flex-col items-center gap-8">
        {/* Header */}
        <div className="flex w-max flex-col items-center justify-center gap-3 self-center-safe text-center">
          <Header text="Events" />
          <h2 className="font-inter text-2xl font-semibold tracking-tight text-[#1e1e1e]">
            Events & Activites
          </h2>
          <p className="text-sm font-medium text-[#1e1e1e]/80">
            Events & Activites that are undertaken by DMIF & team <br /> and
            participated by the team.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-end">
          {/* ================= LEFT SMALL THUMBNAILS ================= */}
          <div className="hidden w-30 flex-col gap-3 md:flex">
            {selectedEvent?.images?.map((img, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                src={img}
                alt={`${selectedEvent.title} thumbnail ${index + 1}`}
                width={120}
                height={80}
                loading="lazy"
                decoding="async"
                onClick={() => setSelectedImageIndex(index)}
                className={`h-16 w-full cursor-pointer rounded-lg border-2 object-cover transition ${
                  selectedImageIndex === index
                    ? 'border-[#FD4F0C]'
                    : 'border-transparent'
                }`}
              />
            ))}
          </div>

          {/* ================= CENTER MAIN IMAGE ================= */}
          <div
            className="relative h-80 w-full flex-1 overflow-hidden rounded-xl shadow-lg sm:h-95 lg:h-130"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={currentImage}
                alt={selectedEvent?.title || 'Event image'}
                width={1400}
                height={900}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover transition-all duration-500"
              />
            }

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold md:text-2xl">
                {selectedEvent?.title}
              </h3>
              <p className="text-sm">{selectedEvent?.location}</p>
              <p className="text-xs">
                {new Date(selectedEvent?.event_date || '').toDateString()}
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE EVENTS ================= */}
          <div
            className={`no-scrollbar flex flex-col gap-2 overflow-visible overflow-y-scroll md:w-95 md:pr-2`}
            style={{ maxHeight: '520px' }}
          >
            <CustomScrollbar />

            {events.map((event) => {
              const isActive = selectedEvent?.id === event.id

              return (
                <div
                  key={event.id}
                  onClick={() => {
                    setSelectedEvent(event)
                    setSelectedImageIndex(0)
                  }}
                  className={`mb-2 cursor-pointer rounded-xl p-5 transition-all duration-300 md:min-w-full ${
                    isActive
                      ? 'border-2 border-[#FD4F0C] bg-[#FD4F0C] text-white'
                      : 'border-2 border-gray-200 bg-gray-50'
                  } `}
                  style={{ minWidth: '280px' }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-black">
                      {event.location}
                    </p>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        isActive ? 'bg-white' : 'bg-[#FD4F0C]'
                      }`}
                    />
                  </div>

                  <h4
                    className={`mt-1 text-base font-semibold ${
                      isActive ? 'text-white' : 'text-[#FD4F0C]'
                    }`}
                  >
                    {event.title}
                  </h4>

                  <p
                    className={`mt-2 text-sm ${
                      isActive ? 'text-white/90' : 'text-gray-500'
                    }`}
                  >
                    {event.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities