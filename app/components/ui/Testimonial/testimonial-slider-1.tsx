"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import type { TestimonialItem } from "../../TestimonialData";

// Define the type for a single review
// Use the shared `TestimonialItem` type coming from TestimonialData
interface TestimonialSliderProps {
  reviews: TestimonialItem[];
  /** Optional class name for the container */
  className?: string;
}

/**
 * A reusable, animated testimonial slider component.
 * It uses framer-motion for animations and is styled with
 * shadcn/ui theme variables.
 */
export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 'direction' helps framer-motion understand slide direction (next vs. prev)
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const AUTOPLAY_DELAY = 5000;

  const activeReview = reviews.length > 0 ? reviews[currentIndex] : undefined;

  const handleNext = () => {
    if (reviews.length === 0) return;
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    // reset autoplay when user manually navigates
    resetAutoplay();
  };

  const handlePrev = () => {
    if (reviews.length === 0) return;
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    // reset autoplay when user manually navigates
    resetAutoplay();
  };

  const handleThumbnailClick = (index: number) => {
    // Determine direction for animation
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    // reset autoplay when user manually navigates
    resetAutoplay();
  };

const thumbnailReviews =
  reviews.length > 0
    ? Array.from({ length: Math.min(3, reviews.length - 1) }, (_, i) => {
        const index =
          (currentIndex - (i + 1) + reviews.length) % reviews.length;
        return reviews[index];
      })
    : [];

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current as any);
      intervalRef.current = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (reviews.length === 0) return;
    intervalRef.current = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, AUTOPLAY_DELAY);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // start/stop autoplay when reviews change or pause state changes
  useEffect(() => {
    if (!isPaused) startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews, isPaused]);

  // reset showFull whenever the active review changes
  useEffect(() => {
    setShowFull(false);
  }, [currentIndex]);

  // Animation variants for the main image
  const imageVariants = {
    enter: (direction: "left" | "right") => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Animation variants for the text content
  const textVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-162.5 md:min-h-150 overflow-hidden bg-background text-foreground p-8 md:p-12",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        {/* === Left Column: Meta and Thumbnails === */}
        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            {/* Pagination */}
            <span className="text-sm text-muted-foreground font-mono">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            {/* Vertical "Reviews" Text */}
            <h2 className="text-sm text-[#FD4F0C] font-medium tracking-widest uppercase [writing-mode:vertical-rl] md:rotate-180 hidden md:block">
              Testimonials
            </h2>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-2 mt-8 md:mt-0">
            {thumbnailReviews.map((review) => {
              // Find the original index to navigate to
              const originalIndex = reviews.findIndex(
                (r) => r.id === review.id
              );
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`View review from ${review.name}`}
                >
                    <img
                      src={review.image || ""}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                </button>
              );
            })}
          </div>
        </div>

        {/* === Center Column: Main Image === */}
        <div
          className="md:col-span-4 relative h-80 min-h-100 md:min-h-125 order-1 md:order-2"
          onMouseEnter={() => {
            setIsPaused(true);
            stopAutoplay();
          }}
          onMouseLeave={() => {
            setIsPaused(false);
            startAutoplay();
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {activeReview && (
              <motion.img
                key={currentIndex}
                src={activeReview.image}
                alt={activeReview.name}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            )}
          </AnimatePresence>
        </div>

        {/* === Right Column: Text and Navigation === */}
        <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          {/* Text Content */}
          <div 
           onMouseEnter={() => {
            setIsPaused(true);
            stopAutoplay();
          }}
          onMouseLeave={() => {
            setIsPaused(false);
            startAutoplay();
          }}
          className="relative overflow-hidden pt-4 md:pt-24 min-h-50">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="text-sm text-[#FD4F0C] font-medium ">
                  {activeReview?.position ?? activeReview?.patent ?? ""}
                </p>
                <h3 className="text-xl font-semibold mt-1">{activeReview?.name}</h3>
                <blockquote className="mt-6 text-2xl md:text-3xl font-medium leading-snug">
                  "{showFull || !activeReview?.text
                    ? activeReview?.text
                    : activeReview?.text?.slice(0, 200) + (activeReview?.text.length > 240 ? "..." : "")}
                  "
                </blockquote>

                {activeReview?.text && activeReview.text.length > 240 && (
                  <button
                    className="mt-2 text-sm text-[#FD4F0C] underline"
                    onClick={() => {
  setShowFull((s) => {
    const next = !s;

    if (next) {
      // If expanding → stop autoplay
      setIsPaused(true);
      stopAutoplay();
    } else {
      // If collapsing → resume autoplay
      setIsPaused(false);
      startAutoplay();
    }

    return next;
  });
}}

                    aria-expanded={showFull}
                  >
                    {showFull ? "See less" : "See more"}
                  </button>
                )}

                {activeReview?.outcomes && activeReview.outcomes.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-2 font-medium">Outcomes</p>

                    <div className="overflow-x-auto">
                      <div className="flex gap-4 pb-2">
                        {activeReview.outcomes.map((item, idx) => (
                          <div
                            key={idx}
                            className="cursor-pointer flex flex-col items-center shrink-0 group"
                          >
                            <img
                              src={item.image}
                              alt={item.label}
                              className="h-16 w-16 object-cover rounded-md shadow-md group-hover:opacity-80 transition"
                            />
                            <span className="text-xs mt-1">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2 mt-8 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-muted-foreground/50"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5 text-[#FD4F0C]" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full w-12 h-12 bg-[#FD4F0C] hover:bg-[#e04500]"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};