"use client";

import { useState } from "react";
import { useTestimonials } from "@/app/components/TestimonialData";
import { X } from "lucide-react";

export default function HallOfFame() {
  const { items, loading } = useTestimonials();
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    name: string;
    position?: string;
    patent?: string;
  } | null>(null);

  // Flatten all outcomes from all testimonials
  const allOutcomes = items.flatMap((item) =>
    item.outcomes.map((outcome) => ({
      image: outcome.image,
      label: outcome.label,
      name: item.name,
      position: item.position,
      patent: item.patent,
    }))
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FA773A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading Hall of Fame...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          Hall of Fame
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Celebrating achievements in patents and research papers
        </p>
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#FA773A] to-orange-600 mx-auto rounded-full"></div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        {allOutcomes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No outcomes to display yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() =>
                  setSelectedImage({
                    image: outcome.image,
                    name: outcome.name,
                    position: outcome.position,
                    patent: outcome.patent,
                  })
                }
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img
                    src={outcome.image}
                    alt={`${outcome.name} - ${outcome.label || "Achievement"}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Click to view indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <svg
                        className="w-8 h-8 text-[#FA773A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5 border-t-4 border-[#FA773A]">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-2">
                    {outcome.name}
                  </h3>
                  {outcome.position && (
                    <p className="text-sm text-slate-600 line-clamp-2 mb-2">
                      {outcome.position}
                    </p>
                  )}
                  {outcome.patent && (
                    <div className="inline-block">
                      <span className="text-xs text-white bg-[#FA773A] px-3 py-1 rounded-full font-medium">
                        {outcome.patent}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex flex-col items-center">
              {/* Image */}
              <div className="relative w-full max-h-[75vh] mb-6 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Info Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-lg w-full border-t-4 border-[#FA773A]">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {selectedImage.name}
                </h2>
                {selectedImage.position && (
                  <p className="text-slate-700 text-base mb-3">
                    {selectedImage.position}
                  </p>
                )}
                {selectedImage.patent && (
                  <div className="inline-block">
                    <span className="text-sm text-white bg-[#FA773A] px-4 py-2 rounded-full font-medium">
                      {selectedImage.patent}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Click outside hint */}
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Click anywhere to close
          </p>
        </div>
      )}
    </div>
  );
}