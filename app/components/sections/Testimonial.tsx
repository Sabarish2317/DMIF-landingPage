'use client'

import { TestimonialSlider } from '../ui/Testimonial/testimonial-slider-1'
import { useTestimonials } from '../TestimonialData'

// 2. Render the component with the data
export default function Testimonial() {
  const { items: testimonials } = useTestimonials()
  console.log('Fetched testimonials:', testimonials)
  return (
    <div className="flex w-full flex-col gap-1 bg-white px-4 md:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Transformations Powered By DMIF
        </h2>
        <p className="mt-2 text-gray-500">
          Events that are undertaken and participated by the team
        </p>
      </div>
      <TestimonialSlider reviews={testimonials} />
    </div>
  )
}
