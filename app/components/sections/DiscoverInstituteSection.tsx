"use client";

import Link from "next/link";
import Image from "next/image";

/* ================================
   Data
================================ */

const instituteSectionData = {
  title: "Discover Our Institute",
  subtitle:
    "Get to know us in 3 Minutes! Watch our introduction video to explore who we are, what we do, and how we can help you achieve your goals.",
  buttonText: "Book a Meet",
  buttonLink: "/contact",
  videoUrl:
    "https://dmifstorage.blob.core.windows.net/course-1-videos/DMIF_Video.mp4?sv=2024-11-04&ss=bfqt&srt=sc&sp=rwlacuptf&se=2026-06-18T20:06:10Z&st=2026-02-18T11:51:10Z&spr=https&sig=BN4mY07o8x1dfn3Pq5Os%2FbJBR07gA32Q%2FLM98TVs4YM%3D",
  cards: [
    {
      title: "Facilities",
      description:
        "Live mentorship sessions, research and patent toolkits, and guided documentation support for achieving real innovation outcomes.",
      icon: "/icons/home.svg",
    },
    {
      title: "Location",
      description:
        "Fully online with global reach open to students from India, the US, Europe, Australia and beyond.",
      icon: "/icons/location.svg",
    },
    {
      title: "Achievements",
      description:
        "DMIF learners have published in IEEE, Springer, ACM, filed patents, and built strong portfolios for Ivy League admissions.",
      icon: "/icons/trophy.svg",
    },
  ],
} as const;

/* ================================
   Component
================================ */

export default function DiscoverInstituteSection() {
  return (
    <section className="w-full flex flex-col overflow-hidden">

      {/* ================= ORANGE HEADER ================= */}
      <div
        className="relative text-white text-center px-6 pt-14 pb-30 md:pb-76"
        style={{
          backgroundColor: "#FD4F0C",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {instituteSectionData.title}
        </h2>

        <p className="max-w-xl mx-auto text-sm md:text-base opacity-95 mb-6">
          {instituteSectionData.subtitle}
        </p>

        <Link
          href={instituteSectionData.buttonLink}
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          {instituteSectionData.buttonText} →
        </Link>

        {/* ================= ABSOLUTE VIDEO ================= */}
        <div className="absolute  z-10 left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 w-[90%] max-w-4xl px-4">
          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-black">
            <div className="aspect-video">
            <video
  className="w-full h-full"
  controls
  playsInline
  preload="metadata"
>
  <source
    src={instituteSectionData.videoUrl}
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>

            </div>
          </div>
        </div>
      </div>

      {/* ================= WHITE GRID SECTION ================= */}
      <div className="relative bg-white pt-32 md:pt-70 pb-20 overflow-hidden">

        {/* Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(90deg,#1e3a8a_1px,transparent_1px),linear-gradient(#1e3a8a_1px,transparent_1px)] bg-size-[70px_70px] opacity-10 pointer-events-none"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {instituteSectionData.cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FD4F0C] text-white rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform"
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={28}
                height={28}
                className="mb-4"
              />

              <h3 className="text-base md:text-lg font-semibold mb-3">
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
  );
}
