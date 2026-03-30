'use client'

import React, { useEffect, useState, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import styles from './Activities.module.css'

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

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  async function fetchAll() {
    const { data } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: false })

    if (data && data.length > 0) {
      const sorted = data as EventItem[]
      setEvents(sorted)
      setSelectedEvent(sorted[0])
    }
  }

  useEffect(() => {
    fetchAll()
  }, [])

  // Reset image when event changes
  useEffect(() => {
    setSelectedImageIndex(0)
  }, [selectedEvent])

  // Auto slideshow
  useEffect(() => {
    if (!selectedEvent || isPaused) return

    intervalRef.current = setInterval(() => {
      setSelectedImageIndex((prev) =>
        prev + 1 >= selectedEvent.images.length ? 0 : prev + 1
      )
    }, 3000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [selectedEvent, isPaused])

  return (
    <section className="flex min-h-screen w-full flex-col bg-white px-4 py-8 sm:px-6 md:px-12">
      <div className="w-full max-w-8xl mx-auto flex flex-col gap-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Activities</h2>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Events that are undertaken and participated by the team
          </p>
        </div>

        {/* Main image at top */}
        <div
          className="rounded-lg shadow-lg md:rounded-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-lg md:rounded-xl">
            {selectedEvent && (
              <img
                src={selectedEvent.images[selectedImageIndex]}
                className="h-48 w-full object-cover transition-all duration-500 sm:h-72 md:h-96"
              />
            )}

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-4 text-white sm:p-5 md:p-6">
              <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">
                {selectedEvent?.title}
              </h3>
              <p className="text-xs sm:text-sm">{selectedEvent?.location}</p>
              <p className="text-xs">
                {new Date(selectedEvent?.event_date || '').toDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnails scroll */}
        <div className="flex flex-row gap-2 overflow-x-auto pb-2">
          {selectedEvent?.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedImageIndex(index)}
              className={`h-16 w-16 shrink-0 cursor-pointer rounded-lg border-2 object-cover transition sm:h-20 sm:w-20 ${
                selectedImageIndex === index
                  ? 'border-[#FD4F0C]'
                  : 'border-transparent'
              }`}
            />
          ))}
        </div>

        {/* Events horizontal scroll at bottom */}
        <div
          className={`flex flex-row gap-2 overflow-x-auto pb-2 ${styles.customScrollbar}`}
        >
          {events.map((event) => {
            const isActive = selectedEvent?.id === event.id

            return (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`relative shrink-0 cursor-pointer rounded-lg p-4 transition-all duration-300 sm:rounded-xl sm:p-5 min-w-72 sm:min-w-80 ${
                  isActive
                    ? 'border-2 border-[#FD4F0C] bg-[#FD4F0C] text-white'
                    : 'border-2 border-gray-200 bg-gray-50'
                }`}
              >
                {/* Status Dot */}
                <div
                  className={`absolute top-3 right-3 h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
                    isActive ? 'bg-white' : 'bg-[#FD4F0C]'
                  }`}
                ></div>

                <p className="text-xs font-medium text-black sm:text-sm">
                  {event.location}
                </p>

                <h4
                  className={`mt-1 text-sm font-semibold sm:text-base ${
                    isActive ? 'text-white' : 'text-[#FD4F0C]'
                  }`}
                >
                  {event.title}
                </h4>

                <p
                  className={`mt-2 text-xs sm:text-sm ${
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
    </section>
  )
}

export default Activities
