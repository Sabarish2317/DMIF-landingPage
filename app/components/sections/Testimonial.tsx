"use client"

import { TestimonialSlider } from "../ui/Testimonial/testimonial-slider-1";
import { useTestimonials } from "../TestimonialData";


// 2. Render the component with the data
export default function Testimonial() {
  const { items: testimonials } = useTestimonials();
  console.log("Fetched testimonials:", testimonials);
  return (
    <div className="w-full flex flex-col px-4 md:px-8 gap-1 bg-white">
      <h1 className="text-4xl text-start md:text-5xl font-bold text-gray-900 leading-tight mb-4">
        Transformations Powered by DMIF
      </h1>
      <TestimonialSlider reviews={testimonials} />
    </div>
  );
}
