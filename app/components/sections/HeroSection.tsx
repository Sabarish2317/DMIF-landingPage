'use client'

import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Button from '@/app/components/Button'
import { brainScrollState } from '../brainScrollState'
import { heroLoadState } from '../heroLoadState'

const BrainCanvas = dynamic(() => import('../BrainCanvas'), { ssr: false })

// Ease-in-out cubic
const easeInOut = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

/** Animate a single ref from `from` to `to` over `duration` ms with easeInOut.
 *  `apply` receives the interpolated 0→1 value and sets the style. */
function animateRef(
  el: HTMLElement | null,
  duration: number,
  delay: number,
  apply: (v: number) => void,
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
  const rafRef = useRef<number | null>(null)
  // Intro animation targets
  const leftRef = useRef<HTMLElement>(null)
  const rightRef = useRef<HTMLElement>(null)
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

  return (
    <div ref={sectionRef} className="relative z-0 h-screen w-full">
      {/* Content overlay */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 flex flex-col justify-between px-8 py-8 md:px-16 lg:px-24"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Top section - Hero content */}
        <div className="flex flex-1 flex-row items-center justify-between">
          {/* Left content */}
          <section
            ref={leftRef as React.RefObject<HTMLElement>}
            className="flex max-w-xl flex-col items-start justify-center gap-6"
            style={{ opacity: 0, transform: 'translateX(-60px)', willChange: 'transform, opacity' }}
          >
            {/* Badge */}
            <div className="flex cursor-pointer items-center gap-4 overflow-clip rounded-2xl bg-white pr-3">
              <span className="rounded-2xl bg-[#2b2b2b] px-3 py-2.5 text-sm font-medium tracking-wide text-white ring ring-[#2b2b2b]">
                New
              </span>
              <span className="text-md leading-[1.2] font-medium text-[#2b2b2b] hover:underline">
                We are in IIT Madras, view more →
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-inter text-[56px] leading-[1.15] font-medium tracking-tight text-white">
              Dr. Madhan
              <br />
              Institute of Future
            </h1>

            {/* Subheading */}
            <p className="text-xl leading-[1.2] font-medium tracking-wide text-white">
              Founded by an <span className="font-bold">IIM Calcutta</span>{' '}
              Alumnus and a globally
              <br />
              recognized inventor and technologist.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="fill"
                className="text-md bg-white text-[#fd4f0c]!"
              >
                Get Started →
              </Button>
              <Button
                variant="fill"
                className="text-md bg-[#2b2b2b]! text-white!"
              >
                Book a Meet
              </Button>
            </div>
          </section>

          {/* Right content - Feature pills */}
          <section
            ref={rightRef as React.RefObject<HTMLElement>}
            className="flex flex-col items-end justify-center gap-4"
            style={{ opacity: 0, transform: 'translateX(60px)', willChange: 'transform, opacity' }}
          >
            {[
              { highlight: '1000s', label: 'Mentored' },
              { highlight: 'Brain 2.0', label: 'Framework' },
              { highlight: 'MindNext™', label: 'Movement' },
              { highlight: 'Mentorship over', label: 'Teaching' },
              { highlight: 'Active Learning', label: 'Methodology' },
            ].map((item, i) => (
              <>
                <div
                  key={i + item.label}
                  className="rounded-lg bg-white px-3 py-1 text-[16px] font-medium tracking-wide backdrop-blur-sm"
                >
                  <span className="text-[#fd4f0c]">{item.highlight}</span>{' '}
                  <span className="text-black">{item.label}</span>
                </div>
                {i != 4 && (
                  <div className="circle h-3 w-3 rounded-full bg-white" />
                )}
              </>
            ))}
          </section>
        </div>

        {/* Bottom section - Stats cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 gap-6"
          style={{ opacity: 0, transform: 'translateY(40px)', willChange: 'transform, opacity' }}
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
              className="flex flex-col gap-3 rounded-lg bg-white p-3"
            >
              <div className="flex items-start justify-between">
                <span className="text-md font-inter font-medium text-[#2b2b2b]">
                  {stat.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#fd4f0c]" />
              </div>
              <span className="text-xl font-medium text-[#fa773a]">
                {stat.value}
              </span>
              <span className="text-md font-medium text-[#2b2b2b]">
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
        <BrainCanvas
          rotationSpeed={rotationSpeed}
          modelScale={0.75}
          className="h-full w-full"
        />
      </section>

      {/* Progressive blur overlay: left half only — NO willChange to avoid
          expensive GPU resampling of backdrop-blur every scroll frame */}
      <div
        ref={blurRef}
        className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-1/2"
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
