'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import HalftoneBg from '../HalftoneBg'

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: 1,
    tag: 'Foundation',
    tagColor: '#fd4f0c',
    title: "World's 1st Inventor-creation Mentorship Institute",
    description:
      'DMIF is a premier cognitive empowerment institute dedicated to helping students grow from the inside through Neuroscience and Cognitive Science methodologies — sparking curiosity, cultivating purpose, and nurturing self-driven learning.',
    stat: { label: 'Est.', value: '2020' },
    accentBg: '#fff0eb',
  },
  {
    id: 2,
    tag: 'Methodology',
    tagColor: '#fd4f0c',
    title: 'Brain 2.0 Framework',
    description:
      'A patented cognitive architecture that rewires how learners absorb, retain, and apply knowledge. Brain 2.0 moves beyond rote memorisation toward deep conceptual ownership and creative application across disciplines.',
    stat: { label: 'Patents', value: '100+' },
    accentBg: '#fff0eb',
  },
  {
    id: 3,
    tag: 'Movement',
    tagColor: '#fd4f0c',
    title: 'MindNext™ — Think Before You Build',
    description:
      'MindNext™ is a global movement encouraging technologists, students, and leaders to develop intentional, ethics-first thinking. It champions depth over speed and purpose over productivity.',
    stat: { label: 'Members', value: '1000s' },
    accentBg: '#fff0eb',
  },
  {
    id: 4,
    tag: 'Mentorship',
    tagColor: '#fd4f0c',
    title: 'Mentorship Over Teaching',
    description:
      'At DMIF, guides replace lecturers. Every learner receives bespoke mentorship from practicing innovators and globally recognised inventors — enabling real breakthroughs rather than theoretical comprehension.',
    stat: { label: 'Continents', value: '4' },
    accentBg: '#fff0eb',
  },
  {
    id: 5,
    tag: 'Research',
    tagColor: '#fd4f0c',
    title: 'Global Publications & Impact',
    description:
      'With 50+ peer-reviewed publications by internationally reputed publishers, DMIF research shapes policy, industry, and academia — bridging the gap between cutting-edge science and real-world application.',
    stat: { label: 'Publications', value: '50+' },
    accentBg: '#fff0eb',
  },
]

const N = CARDS.length
// How many px each stacked card peeks above the one in front of it
const PEEK_PX = 14
// Max scale reduction per stacked card depth
const SCALE_STEP = 0.04

// ─── Card component (pure presentational) ────────────────────────────────────
interface CardData {
  id: number
  tag: string
  tagColor: string
  title: string
  description: string
  stat: { label: string; value: string }
  accentBg: string
}

function DMIFCard({ card }: { card: CardData }) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-xl">
      <span
        className="w-fit py-1 text-xs font-semibold tracking-widest uppercase"
        style={{ color: card.tagColor }}
      >
        {card.tag}
      </span>

      <div
        className="flex h-36 w-full items-center justify-center rounded-xl"
        style={{ backgroundColor: card.accentBg }}
      >
        {/* <span
          className="text-4xl font-black tracking-tight"
          style={{ color: card.tagColor }}
        >
          {card.stat.value}
        </span>
        <span className="ml-2 text-sm font-medium text-[#2b2b2b] opacity-60">
          {card.stat.label}
        </span> */}
      </div>

      <h4
        className="text-xl leading-snug font-semibold"
        style={{ color: card.tagColor }}
      >
        {card.title}
      </h4>

      <p className="text-sm leading-relaxed text-[#444]">{card.description}</p>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function AboutDMIF() {
  const sectionRef = useRef<HTMLElement>(null)
  // Imperative refs — avoid React state entirely so scroll never triggers re-render
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const pipRefs = useRef<(HTMLSpanElement | null)[]>([])
  const rafRef = useRef<number | null>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cache bounds once — avoids layout reflow every scroll frame
    let sectionTop = 0
    let vh = window.innerHeight
    let ticking = false

    const cacheBounds = () => {
      if (sectionRef.current)
        sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY
      vh = window.innerHeight
    }

    const update = () => {
      ticking = false
      const scrolled = Math.max(0, window.scrollY - sectionTop)
      // progress: 1.0 = card 0 fully in, 2.0 = card 1 fully in, …
      const progress = Math.min(1 + scrolled / vh, N)

      cardRefs.current.forEach((el, i) => {
        if (!el) return

        // entry: 0 (off-screen below) → 1 (fully visible)
        const entry = Math.max(0, Math.min(1, progress - i))
        // stackDepth: continuous progress of how buried this card is
        const stackDepth = Math.max(0, progress - (i + 1))

        // --- Translate Y ---
        // Each card's FINAL resting nudge is fixed by its index:
        //   card 0 (bottom of deck) nudges up the most: -(N-1)*PEEK_PX
        //   card N-1 (top of deck)  nudges 0px
        // We interpolate from 0 (just entered) → finalNudge (fully stacked).
        const finalNudge = -(N - 1 - i) * PEEK_PX
        // stackDepth goes 0→1 as this card gets buried by the next card
        const stackT = Math.min(stackDepth, 1)
        const stackedY = finalNudge * stackT

        // Entry slides in from below
        const offscreenY = (1 - entry) * vh * 0.85
        const translateY = offscreenY + stackedY

        // --- Scale: each card index has a unique fixed final scale ---
        // card 0 → smallest (most buried), card N-1 → scale 1.0
        const finalScale = 1 - (N - 1 - i) * SCALE_STEP
        const scale = 1 - (1 - finalScale) * stackT

        // --- Opacity ---
        const finalOpacity = Math.max(0.72, 1 - (N - 1 - i) * 0.06)
        const opacity = entry < 1 ? entry : 1 - (1 - finalOpacity) * stackT

        el.style.transform = `translateY(calc(-50% + ${translateY.toFixed(2)}px)) scale(${scale.toFixed(4)})`
        el.style.opacity = opacity.toFixed(3)
      })

      // ── Entrance slide-in ──────────────────────────────────────────────
      // Starts when the section enters the bottom of the viewport
      // (window.scrollY === sectionTop - vh) and ends when the section
      // top reaches the viewport top (window.scrollY === sectionTop).
      // Range is exactly 1 viewport height.
      const rawEntry = Math.min(
        Math.max((window.scrollY - (sectionTop - vh)) / vh, 0),
        1
      )
      // Cubic ease-out: fast start, smooth finish
      const easedEntry = 1 - Math.pow(1 - rawEntry, 3)
      const slideOffset = 80 * (1 - easedEntry)
      const entryOpacity = easedEntry

      if (leftRef.current) {
        leftRef.current.style.transform = `translateX(-${slideOffset.toFixed(2)}px)`
        leftRef.current.style.opacity = entryOpacity.toFixed(3)
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translateX(${slideOffset.toFixed(2)}px)`
        rightRef.current.style.opacity = entryOpacity.toFixed(3)
      }

      // ── Card deck ─────────────────────────────────────────────────────────
      // ── Pips ─────────────────────────────────────────────────────────────
      pipRefs.current.forEach((pip, i) => {
        if (!pip) return
        const filled = progress >= i + 1.0
        pip.style.backgroundColor = filled ? 'white' : 'rgba(255,255,255,0.35)'
        pip.style.transform = filled ? 'scale(1.35)' : 'scale(1)'
      })
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      rafRef.current = requestAnimationFrame(update)
    }

    cacheBounds()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', cacheBounds, { passive: true })
    update() // initial paint
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', cacheBounds)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#fe4709]"
      style={{ height: `${N * 100}vh` }}
    >
      {/* Halftone dither background — matches BrainCanvas post-processing */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <HalftoneBg className="h-full w-full" />
      </div>

      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen flex-row items-center justify-between gap-8 px-8 py-16 md:px-16 lg:px-24">
        {/* ── Left — locked ── */}
        <div
          ref={leftRef}
          className="flex shrink-0 flex-col items-center justify-center gap-2"
          style={{
            opacity: 0,
            transform: 'translateX(-80px)',
            willChange: 'transform, opacity',
          }}
        >
          <div className="h-72 w-64">
            <Image
              src="/icons/logo.svg"
              alt="DMIF Logo"
              width={256}
              height={256}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            <h2 className="text-2xl font-bold text-white">
              Innovators Today; Entrepreneurs Tomorrow!
            </h2>
          </div>

          {/* Progress pips — driven imperatively */}
          <div className="flex gap-2">
            {CARDS.map((_, i) => (
              <span
                key={i}
                ref={(el) => {
                  pipRefs.current[i] = el
                }}
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: i === 0 ? 'white' : 'rgba(255,255,255,0.35)',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Right — card deck ── */}
        <div
          ref={rightRef}
          className="relative h-full w-full max-w-md overflow-hidden"
          style={{
            opacity: 0,
            transform: 'translateX(80px)',
            willChange: 'transform, opacity',
          }}
        >
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className="absolute top-1/2 right-0 left-0"
              style={{
                zIndex: i + 1,
                transform: `translateY(calc(-50% + 90vh)) scale(1)`,
                opacity: 0,
                transformOrigin: 'center center',
                willChange: 'transform, opacity',
              }}
            >
              <DMIFCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
