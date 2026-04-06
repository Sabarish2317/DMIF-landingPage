'use client'

import { TestimonialSlider } from '../ui/Testimonial/testimonial-slider-1'
import { useTestimonials } from '../TestimonialData'
import { Header } from '../ui/Header'

// 2. Render the component with the data
export default function Testimonial() {
  const { items: testimonials } = useTestimonials()
  console.log('Fetched testimonials:', testimonials)
  return (
    <div className="flex w-full flex-col gap-8 bg-white px-4 py-6 pt-12 sm:px-8 sm:py-8 md:px-16 lg:px-24">
      {/* Header */}
      <div className="flex w-max flex-col items-center justify-center gap-3 self-center-safe text-center">
        <Header text="Testimonials" />
        <h2 className="font-inter text-2xl font-semibold tracking-tight text-[#1e1e1e]">
          Transformations Powered By DMIF
        </h2>
        <p className="text-sm font-medium text-[#1e1e1e]/80">
          Events & Activites that are undertaken by DMIF & team <br /> and
          participated by the team.
        </p>
      </div>

      <TestimonialSlider reviews={testimonials} />
    </div>
  )
}
