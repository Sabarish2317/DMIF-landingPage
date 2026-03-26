'use client'

import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Button from '@/app/components/Button'
import FeaturePillsMarquee from '@/app/components/FeaturePillsMarquee'
import { brainScrollState } from '../brainScrollState'
import { heroLoadState } from '../heroLoadState'
import { supabase } from '@/lib/supabase'

const BrainCanvas = dynamic(() => import('../BrainCanvas'), { ssr: false })

// Ease-in-out cubic
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

/** Animate a single ref from `from` to `to` over `duration` ms with easeInOut.
 *  `apply` receives the interpolated 0→1 value and sets the style. */
function animateRef(
  el: HTMLElement | null,
  duration: number,
  delay: number,
  apply: (v: number) => void
) {
  if (!el) return
  let start: number | null = null
  const tick = (now: number) => {
    if (start === null) start = now
    const elapsed = now - start
    const t = Math.min(elapsed / duration, 1)
    apply(easeInOut(t))
    if (t < 1) requestAnimationFrame(tick)
  }
  setTimeout(() => requestAnimationFrame(tick), delay)
}

export default function Brain() {
  const rotationSpeed = 0.25
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const brainRef = useRef<HTMLElement>(null)
  const blurRef = useRef<HTMLDivElement>(null)
  const [marquee, setmarquee] = React.useState<any>([])
  const rafRef = useRef<number | null>(null)
  // Intro animation targets
  const leftRef = useRef<HTMLElement>(null)
  const rightRef = useRef<HTMLElement>(null)
  const rightRefMobile = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cache section top once — avoids getBoundingClientRect every frame
    let sectionTop = 0
    let ticking = false

    const cacheBounds = () => {
      if (sectionRef.current)
        sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY
    }

    const update = () => {
      ticking = false
      const offset = Math.max(0, window.scrollY - sectionTop)
      // Skip expensive work once section has fully scrolled past
      if (offset > window.innerHeight) return

      brainScrollState.scrollPx = offset

      const contentTranslate = offset * 0.6
      const contentOpacity = Math.max(0, 1 - offset / 500)
      const opacityStr = contentOpacity.toFixed(3)

      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-${contentTranslate.toFixed(2)}px)`
        contentRef.current.style.opacity = opacityStr
      }
      if (brainRef.current) {
        brainRef.current.style.transform = `translateY(${contentTranslate.toFixed(2)}px)`
      }
      if (blurRef.current) {
        blurRef.current.style.opacity = opacityStr
      }
    }

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('marquee_messages')
        .select('*')

      if (error) {
        console.error(error)
      } else {
        setmarquee(data)
      }
    }

    fetchMessages()
    const onScroll = () => {
      if (ticking) return
      ticking = true
      rafRef.current = requestAnimationFrame(update)
    }

    cacheBounds()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', cacheBounds, { passive: true })
    update()

    // ── Intro animations (fire once brain is ready) ───────────────────────
    const DURATION = 900 // ms per element
    const unsub = heroLoadState.onReady(() => {
      // Brain: opacity 0 → 1  (no delay)
      animateRef(brainRef.current, DURATION, 0, (v) => {
        if (brainRef.current) brainRef.current.style.opacity = v.toFixed(3)
      })
      // Left content: translateX -60px → 0 + fade  (50ms delay)
      animateRef(leftRef.current, DURATION, 50, (v) => {
        if (leftRef.current) {
          leftRef.current.style.transform = `translateX(${(-60 * (1 - v)).toFixed(2)}px)`
          leftRef.current.style.opacity = v.toFixed(3)
        }
      })
      // Right content: translateX +60px → 0 + fade  (150ms delay)
      animateRef(rightRef.current, DURATION, 150, (v) => {
        if (rightRef.current) {
          rightRef.current.style.transform = `translateX(${(60 * (1 - v)).toFixed(2)}px)`
          rightRef.current.style.opacity = v.toFixed(3)
        }
      })
      // Right content mobile: same animation (150ms delay)
      animateRef(rightRefMobile.current, DURATION, 150, (v) => {
        if (rightRefMobile.current) {
          rightRefMobile.current.style.transform = `translateX(${(60 * (1 - v)).toFixed(2)}px)`
          rightRefMobile.current.style.opacity = v.toFixed(3)
        }
      })
      // Bottom grid: translateY +40px → 0 + fade  (250ms delay)
      animateRef(gridRef.current, DURATION, 250, (v) => {
        if (gridRef.current) {
          gridRef.current.style.transform = `translateY(${(40 * (1 - v)).toFixed(2)}px)`
          gridRef.current.style.opacity = v.toFixed(3)
        }
      })
      // Blur overlay: fade in with brain
      animateRef(blurRef.current, DURATION, 0, (v) => {
        if (blurRef.current) blurRef.current.style.opacity = v.toFixed(3)
      })
    })

    return () => {
      unsub()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', cacheBounds)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const activeNews = marquee.filter(
    (m: any) => m.type === 'news' && m.is_active
  )

  const activeConstant = marquee.filter(
    (m: any) => m.type === 'constant' && m.is_active
  )

  const activeMarquee = activeNews.length > 0 ? activeNews : activeConstant

  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('contact')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div ref={sectionRef} className="relative z-0 h-screen w-full">
      {/* Content overlay */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 flex flex-col justify-between px-4 py-6 sm:px-8 sm:py-8 md:px-16 lg:px-24"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Top section - Hero content */}
        <div className="mt-24 mb-12 flex flex-1 flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
          {/* Left content */}
          <section
            ref={leftRef as React.RefObject<HTMLElement>}
            className="flex w-full flex-col items-start justify-center gap-4 sm:gap-6 md:max-w-xl"
            style={{
              opacity: 0,
              transform: 'translateX(-60px)',
              willChange: 'transform, opacity',
            }}
          >
            {/* Badge */}
            <div className="flex w-full max-w-sm cursor-pointer items-center gap-4 overflow-hidden rounded-2xl bg-white pr-3 sm:max-w-95">
              <span className="z-15 shrink-0 rounded-2xl bg-[#2b2b2b] px-3 py-2.5 text-xs font-medium tracking-wide text-white ring ring-[#2b2b2b] sm:text-sm">
                {activeNews.length > 0 ? 'Announcement' : 'Vision'}
              </span>

              <div className="relative z-12 w-full overflow-hidden">
                <div className="animate-marquee flex gap-10 whitespace-nowrap md:animate-none">
                  {[...activeMarquee, ...activeMarquee].map(
                    (item: any, index) => (
                      <span
                        key={index}
                        className="sm:text-md text-xs font-medium text-[#2b2b2b] hover:underline"
                        dangerouslySetInnerHTML={{ __html: item.message }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-inter text-3xl leading-[1.15] font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[56px]">
              Dr. Madhan
              <br />
              Institute of Future
            </h1>

            {/* Subheading */}
            <p className="text-base leading-[1.2] font-medium tracking-wide text-white sm:text-lg md:text-xl">
              Founded by an <span className="font-bold">IIM Calcutta</span>{' '}
              Alumnus and a globally
              <br />
              recognized inventor and technologist.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-row items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button
                variant="fill"
                onClick={handleScrollToCTA}
                className="sm:text-md bg-white text-xs text-[#fd4f0c]!"
              >
                Book a Meet →
              </Button>
              <Button
                variant="fill"
                className="sm:text-md bg-[#2b2b2b]! text-xs text-white!"
              >
                View Programs
              </Button>
            </div>
          </section>

          {/* Right content - Feature pills */}
          {/* Mobile Marquee View */}
          <FeaturePillsMarquee
            ref={rightRefMobile}
            style={{
              opacity: 0,
              transform: 'translateX(60px)',
              willChange: 'transform, opacity',
            }}
          />

          {/* Desktop/Tablet View */}
          <section
            ref={rightRef as React.RefObject<HTMLElement>}
            className="hidden md:flex w-full md:w-auto flex-col items-start justify-center gap-3 md:items-end md:gap-4"
            style={{
              opacity: 0,
              transform: 'translateX(60px)',
              willChange: 'transform, opacity',
            }}
          >
            {[
              { highlight: '1000s', label: 'Mentored' },
              { highlight: 'Brain 2.0', label: 'Framework' },
              { highlight: 'MindNext™', label: 'Movement' },
              { highlight: 'Mentorship over', label: 'Teaching' },
              { highlight: 'Active Learning', label: 'Methodology' },
            ].map((item, i) => (
              <React.Fragment key={i + item.label}>
                <div className="rounded-lg bg-white px-3 py-1 text-sm font-medium tracking-wide backdrop-blur-sm sm:text-[16px]">
                  <span className="text-[#fd4f0c]">{item.highlight}</span>{' '}
                  <span className="text-black">{item.label}</span>
                </div>
                {i != 4 && (
                  <div className="circle hidden h-3 w-3 rounded-full bg-white md:block" />
                )}
              </React.Fragment>
            ))}
          </section>
        </div>

        {/* Bottom section - Stats cards */}
        <div
          ref={gridRef}
          className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6"
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            willChange: 'transform, opacity',
          }}
        >
          {[
            {
              title: 'Global Patents',
              value: '100+',
              description: 'Granted Patents in 4 Continents',
            },
            {
              title: 'Global Publications',
              value: '50+',
              description: 'By Internationally Reputed Publishers',
            },
            {
              title: 'Unique Programs',
              value: '4',
              description: 'Industry-Aligned Learning Tracks',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-lg bg-white p-3 sm:gap-3 sm:p-4"
            >
              <div className="flex items-start justify-between">
                <span className="md:text-md font-inter line-clamp-2 text-xs font-medium text-[#2b2b2b] sm:text-sm">
                  {stat.title}
                </span>
                <span className="ml-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fd4f0c]" />
              </div>
              <span className="text-base font-medium text-[#fa773a] sm:text-lg md:text-xl">
                {stat.value}
              </span>
              <span className="md:text-md text-xs leading-tight font-medium text-[#2b2b2b] sm:text-sm">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Brain 3D background */}
      <section
        ref={brainRef}
        className="absolute inset-0 flex overflow-hidden bg-[#fe4709]"
        style={{ opacity: 0, willChange: 'transform, opacity' }}
      >
        <div className="h-full w-full" style={{ transform: 'translateX(0%)' }}>
          <BrainCanvas
            rotationSpeed={rotationSpeed}
            modelScale={0.75}
            className="h-full w-full"
          />
        </div>
      </section>

      {/* Progressive blur overlay: left half only — NO willChange to avoid
          expensive GPU resampling of backdrop-blur every scroll frame */}
      <div
        ref={blurRef}
        className="pointer-events-none absolute inset-y-0 left-0 z-5 w-1/2"
        style={{
          opacity: 0,
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, black 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
