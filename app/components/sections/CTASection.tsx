'use client'

import CalEmbed from '@/app/components/common/CalEmbed'

export default function CTASection() {
  return (
    <section className="flex h-[80vh] w-full items-center justify-center bg-[#0E0A18] px-4 py-16 text-center md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
          Get Started Now!
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed font-medium text-white/80 sm:text-base md:mt-6 md:text-lg">
          Join now and enjoy the benefits of unlimited learning experience and
          lorem ipsum from DMIF, click now to get started
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-white/80 sm:flex-row sm:gap-8 sm:text-base md:mt-8 md:text-lg">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FD4F0C] font-medium text-white"></span>
            <span className="text-white">Brain 2.0 Discovery Framework™</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FD4F0C] font-medium text-white"></span>
            <span className="text-white">Active Learning Methodology™</span>
          </div>
        </div>

        {/* Cal.com Booking */}
        <CalEmbed />

        {/* Button */}
        <div className="mt-8 md:mt-10">
          <button
            data-cal-namespace="30min"
            data-cal-link="sabarish-vs/30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-[#FD4F0C] hover:text-white sm:px-8 sm:text-base"
          >
            Book a Meet
          </button>
        </div>
      </div>
    </section>
  )
}
