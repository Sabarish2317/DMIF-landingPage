"use client";

import React, { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";

interface EventItem {
  id: number;
  title: string;
  description: string;
  location: string;
  images: string[];
  event_date: string;
}

const Activities = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  async function fetchAll() {
    const { data } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: false });

    if (data && data.length > 0) {
      const sorted = data as EventItem[];
      setEvents(sorted);
      setSelectedEvent(sorted[0]);
    }
  }

  useEffect(() => {
    fetchAll();
  }, []);

  // Reset image when event changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [selectedEvent]);

  // Auto slideshow
  useEffect(() => {
    if (!selectedEvent || isPaused) return;

    intervalRef.current = setInterval(() => {
      setSelectedImageIndex((prev) =>
        prev + 1 >= selectedEvent.images.length ? 0 : prev + 1
      );
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selectedEvent, isPaused]);

  return (
    <section className="px-4 md:px-12 py-12 bg-white">
      <div className="max-w-8xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Activities</h2>
          <p className="text-gray-500 mt-2">
            Events that are undertaken and participated by the team
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-[120px_1fr_380px] gap-6">

          {/* ================= LEFT SMALL THUMBNAILS ================= */}
          <div className="hidden md:flex flex-col gap-3">
            {selectedEvent?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImageIndex(index)}
                className={`h-16 w-full object-cover rounded-lg cursor-pointer border-2 transition ${
                  selectedImageIndex === index
                    ? "border-[#FD4F0C]"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* ================= CENTER MAIN IMAGE ================= */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {selectedEvent && (
              <img
                src={selectedEvent.images[selectedImageIndex]}
                className="w-full h-[400px] md:h-[520px] object-cover transition-all duration-500"
              />
            )}

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold">
                {selectedEvent?.title}
              </h3>
              <p className="text-sm">{selectedEvent?.location}</p>
              <p className="text-xs">
                {new Date(
                  selectedEvent?.event_date || ""
                ).toDateString()}
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE EVENTS ================= */}
          <div
            className="
              md:max-h-[520px]
              md:overflow-y-auto
              md:pr-2
              flex md:block
              
              
              gap-4
              overflow-x-auto
              md:overflow-x-hidden
            "
          >
            {events.map((event) => {
              const isActive = selectedEvent?.id === event.id;

              return (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`
                    min-w-[280px] md:min-w-full
                    cursor-pointer
                    rounded-xl p-5 mb-2 border transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#FD4F0C] text-white border-[#FD4F0C]"
                        : "bg-white hover:border-[#FD4F0C]"
                    }
                  `}
                >
                  <p className="text-sm font-medium">
                    {event.location}
                  </p>

                  <h4 className="font-semibold mt-1 text-base">
                    {event.title}
                  </h4>

                  <p
                    className={`text-sm mt-2 ${
                      isActive ? "text-white/90" : "text-gray-500"
                    }`}
                  >
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Activities;
