"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-14 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Get Started Now!
        </h2>

        {/* Subtext */}
        <p className="mt-4 md:mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Join now and enjoy the benefits of unlimited learning experience and
          lorem ipsum from DMIF, click now to get started
        </p>

        {/* Features */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base md:text-lg text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FD4F0C] rounded-full"></span>
            <span>Brain 2.0 Discovery Framework™</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FD4F0C] rounded-full"></span>
            <span>Active Learning Methodology™</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 md:mt-10">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-black transition duration-300"
          >
            Book a Meet
          </Link>
        </div>
      </div>
    </section>
  );
}
