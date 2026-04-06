'use client'

import CalEmbed from '@/app/components/common/CalEmbed'
import { Header } from '../ui/Header'

export default function CTASection() {
  return (
    <section className="flex h-max w-full flex-col items-center justify-center px-4 pt-16 text-center md:pt-20">
      <div className="mx-auto flex flex-col items-center justify-center gap-3 self-center-safe text-center">
        {/* Header */}
        <div className="flex w-max flex-col items-center justify-center gap-3 self-center-safe text-center">
          <Header text="Join Us" />
          <h2 className="font-inter text-2xl font-semibold tracking-tight text-[#1e1e1e]">
            Get Started with DMIF
          </h2>
          <p className="text-sm font-medium text-[#1e1e1e]/80">
            Join now and enjoy the benefits of unlimited learning experience and{' '}
            <br />
            lorem ipsum from DMIF, click now to get started
          </p>
        </div>

        {/* Features */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-[#1e1e1e]/80 sm:flex-row sm:gap-8 sm:text-base md:mt-8 md:text-lg">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FD4F0C] font-semibold text-[#1e1e1e]"></span>
            <span className="text-md font-medium text-[#1e1e1e]">
              Brain 2.0 Discovery Framework™
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FD4F0C] font-semibold text-[#1e1e1e]"></span>
            <span className="text-md font-medium text-[#1e1e1e]">
              Active Learning Methodology™
            </span>
          </div>
        </div>
      </div>
      {/* Cal.com Booking */}
      <CalEmbed />

      {/* Button */}
      {/* <div className="mt-8 md:mt-10">
          <button
            data-cal-namespace="30min"
            data-cal-link="sabarish-vs/30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="inline-block rounded-xl bg-[#1e1e1e] px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-[#FD4F0C] hover:text-white sm:px-8 sm:text-base"
          >
            Book a Meet
          </button>
        </div> */}
    </section>
  )
}
