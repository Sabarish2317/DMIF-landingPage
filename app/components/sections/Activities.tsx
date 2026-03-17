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
    <section className="flex h-screen items-center justify-center bg-white px-4 py-12 md:px-12">
      <div className="max-w-8xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Activities</h2>
          <p className="mt-2 text-gray-500">
            Events that are undertaken and participated by the team
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-6 md:grid-cols-[120px_1fr_380px]">
          {/* ================= LEFT SMALL THUMBNAILS ================= */}
          <div className="hidden flex-col gap-3 md:flex">
            {selectedEvent?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
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
            className="relative overflow-hidden rounded-xl shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {selectedEvent && (
              <img
                src={selectedEvent.images[selectedImageIndex]}
                className="h-100 w-full object-cover transition-all duration-500 md:h-130"
              />
            )}

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
            className={`flex flex-col gap-2 overflow-visible overflow-y-scroll md:pr-2 ${styles.customScrollbar}`}
            style={{ maxHeight: '520px' }}
          >
            {events.map((event) => {
              const isActive = selectedEvent?.id === event.id

              return (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`relative mb-2 cursor-pointer rounded-xl p-5 transition-all duration-300 md:min-w-full ${
                    isActive
                      ? 'border-2 border-[#FD4F0C] bg-[#FD4F0C] text-white'
                      : 'border-2 border-gray-200 bg-gray-50'
                  } `}
                  style={{ minWidth: '280px' }}
                >
                  {/* Status Dot */}
                  <div
                    className={`absolute top-3 right-3 h-2 w-2 rounded-full ${
                      isActive ? 'bg-white' : 'bg-[#FD4F0C]'
                    }`}
                  ></div>

                  <p className="text-sm font-medium text-black">
                    {event.location}
                  </p>

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
