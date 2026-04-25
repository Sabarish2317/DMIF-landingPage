'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// ── Fonts: add to your index.html <head> ─────────────────────────────────────
// <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
// ─────────────────────────────────────────────────────────────────────────────

const WORDS = [
  'Innovators',
  'Researchers',
  'Entrepreneurs',
  'Inventors',
  'Thinkers',
]

// ── Left illustration: neuron orbit ──────────────────────────────────────────
function LeftIllustration({ scrollY }: { scrollY: number }) {
  const t = scrollY * 0.0008
  return (
    <svg
      viewBox="0 0 260 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
    >
      <ellipse
        cx="130"
        cy="190"
        rx="110"
        ry="110"
        stroke="rgba(240,78,35,0.12)"
        strokeWidth="1"
        style={{
          transform: `rotate(${t * 12}deg)`,
          transformOrigin: '130px 190px',
        }}
      />
      <ellipse
        cx="130"
        cy="190"
        rx="110"
        ry="44"
        stroke="rgba(240,78,35,0.09)"
        strokeWidth="0.8"
        style={{
          transform: `rotate(${30 + t * -8}deg)`,
          transformOrigin: '130px 190px',
        }}
      />
      <ellipse
        cx="130"
        cy="190"
        rx="110"
        ry="44"
        stroke="rgba(240,78,35,0.07)"
        strokeWidth="0.8"
        style={{
          transform: `rotate(${-30 + t * 5}deg)`,
          transformOrigin: '130px 190px',
        }}
      />
      <circle
        cx="130"
        cy="190"
        r="28"
        fill="rgba(240,78,35,0.06)"
        stroke="rgba(240,78,35,0.2)"
        strokeWidth="1"
      />
      <circle cx="130" cy="190" r="13" fill="rgba(240,78,35,0.12)" />
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = ((deg + t * 25) * Math.PI) / 180
        const x = 130 + Math.cos(rad) * 110
        const y = 190 + Math.sin(rad) * 110
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 2 === 0 ? 4 : 2.5}
            fill={i % 2 === 0 ? 'rgba(240,78,35,0.5)' : 'rgba(240,78,35,0.3)'}
          />
        )
      })}
      {[40, 130, 220].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        return (
          <line
            key={i}
            x1="130"
            y1="190"
            x2={130 + Math.cos(rad) * 80}
            y2={190 + Math.sin(rad) * 80}
            stroke="rgba(240,78,35,0.1)"
            strokeWidth="0.8"
            strokeDasharray="3 5"
          />
        )
      })}
      <circle cx="52" cy="88" r="5" fill="rgba(240,78,35,0.15)" />
      <circle cx="210" cy="300" r="3.5" fill="rgba(240,78,35,0.2)" />
      <circle cx="38" cy="268" r="2.5" fill="rgba(240,78,35,0.25)" />
      <circle
        cx="198"
        cy="76"
        r="6"
        fill="rgba(240,78,35,0.08)"
        stroke="rgba(240,78,35,0.18)"
        strokeWidth="1"
      />
      <text
        x="12"
        y="190"
        fontFamily="'DM Sans',sans-serif"
        fontSize="9"
        fill="rgba(240,78,35,0.3)"
        letterSpacing="0.12em"
        transform="rotate(-90, 12, 190)"
      >
        Brain GYM™
      </text>
    </svg>
  )
}

// ── Right illustration: rotating geometry ────────────────────────────────────
function RightIllustration({ scrollY }: { scrollY: number }) {
  const t = scrollY * 0.0006
  return (
    <svg
      viewBox="0 0 260 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
    >
      <rect
        x="65"
        y="120"
        width="130"
        height="130"
        rx="4"
        stroke="rgba(240,78,35,0.13)"
        strokeWidth="1"
        style={{
          transform: `rotate(${12 + t * 6}deg)`,
          transformOrigin: '130px 185px',
        }}
      />
      <rect
        x="90"
        y="145"
        width="80"
        height="80"
        rx="3"
        stroke="rgba(240,78,35,0.18)"
        strokeWidth="0.8"
        style={{
          transform: `rotate(${-8 + t * -4}deg)`,
          transformOrigin: '130px 185px',
        }}
      />
      <rect
        x="108"
        y="162"
        width="44"
        height="44"
        rx="8"
        fill="rgba(240,78,35,0.07)"
        stroke="rgba(240,78,35,0.22)"
        strokeWidth="1"
        style={{
          transform: `rotate(${t * 10}deg)`,
          transformOrigin: '130px 184px',
        }}
      />
      {(
        [
          [65, 120],
          [195, 120],
          [65, 250],
          [195, 250],
        ] as [number, number][]
      ).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="rgba(240,78,35,0.28)" />
      ))}
      <line
        x1="20"
        y1="30"
        x2="80"
        y2="90"
        stroke="rgba(240,78,35,0.09)"
        strokeWidth="0.8"
        strokeDasharray="2 5"
      />
      <line
        x1="180"
        y1="290"
        x2="240"
        y2="350"
        stroke="rgba(240,78,35,0.09)"
        strokeWidth="0.8"
        strokeDasharray="2 5"
      />
      <rect
        x="158"
        y="55"
        width="74"
        height="22"
        rx="11"
        fill="rgba(240,78,35,0.06)"
        stroke="rgba(240,78,35,0.16)"
        strokeWidth="0.8"
      />
      <text
        x="195"
        y="70"
        textAnchor="middle"
        fontFamily="'DM Sans',sans-serif"
        fontSize="8"
        fill="rgba(240,78,35,0.45)"
        letterSpacing="0.1em"
      >
        TOP 1%
      </text>
      <circle cx="32" cy="180" r="3" fill="rgba(240,78,35,0.2)" />
      <circle
        cx="228"
        cy="140"
        r="4.5"
        fill="rgba(240,78,35,0.1)"
        stroke="rgba(240,78,35,0.18)"
        strokeWidth="0.8"
      />
      <circle cx="44" cy="316" r="2" fill="rgba(240,78,35,0.28)" />
      <text
        x="248"
        y="190"
        fontFamily="'DM Sans',sans-serif"
        fontSize="9"
        fill="rgba(240,78,35,0.3)"
        letterSpacing="0.12em"
        transform="rotate(90, 248, 190)"
      >
        DMIF™
      </text>
    </svg>
  )
}

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1600, trigger: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!trigger) return
    const start = performance.now()
    const step = (now: number) => {
      const pct = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - pct, 3)
      setValue(Math.round(ease * target))
      if (pct < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, target, duration])
  return value
}

// ── Stat chip ─────────────────────────────────────────────────────────────────
interface ChipProps {
  value: number
  suffix?: string
  label: string
  trigger: boolean
  delayMs?: number
}

function Chip({ value, suffix = '', label, trigger, delayMs = 0 }: ChipProps) {
  const count = useCountUp(value, 1600, trigger)
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '5px',
        padding: '7px 16px',
        borderRadius: '4px',
        border: '1px solid rgba(0,0,0,0.08)',
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(8px)',
        opacity: trigger ? 1 : 0,
        transform: trigger ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity 0.5s ease ${delayMs}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms`,
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '18px',
          fontWeight: 400,
          color: '#F04E23',
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 300,
          color: '#b8b8b8',
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
        }}
      >
        {label}
      </span>
    </div>
  )
}

// ── Word cycler hook ──────────────────────────────────────────────────────────
function useWordCycle(words: string[], interval = 2400) {
  const [index, setIndex] = useState(0)
  const [out, setOut] = useState(false)
  useEffect(() => {
    const t = setInterval(() => {
      setOut(true)
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setOut(false)
      }, 350)
    }, interval)
    return () => clearInterval(t)
  }, [words.length, interval])
  return { word: words[index], out }
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function CreativeCapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const top1Ref = useRef<HTMLSpanElement>(null)
  const leftIllRef = useRef<HTMLDivElement>(null)
  const rightIllRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  const [entered, setEntered] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const { scrollYProgress: top1Progress } = useScroll({
    target: top1Ref,
    offset: ['start end', 'center center'],
  })
  const top1Scale = useTransform(top1Progress, [0, 1], [1, 1.22])

  const { word, out } = useWordCycle(WORDS)

  // Intersection observer → trigger enter
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setEntered(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Scroll parallax
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return
        const rect = sectionRef.current.getBoundingClientRect()
        const raw = -rect.top
        const prog = raw / (rect.height || 1)
        setScrollY(raw)
        if (leftIllRef.current)
          leftIllRef.current.style.transform = `translateY(${prog * -44}px)`
        if (rightIllRef.current)
          rightIllRef.current.style.transform = `translateY(${prog * -28}px)`
        if (orbRef.current)
          orbRef.current.style.transform = `translate(-50%, calc(-50% + ${prog * 60}px))`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const d = (n: number) => `${n}ms`

  return (
    <section
      ref={sectionRef}
      className="creative-capabilities-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '110px 0 124px',
        background: '#F7F6F3',
      }}
    >
      {/* Blurred centre orb */}
      <div
        ref={orbRef}
        style={{
          position: 'absolute',
          top: '44%',
          left: '50%',
          width: '960px',
          height: '960px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 44% 44%, rgba(240,78,35,0.13) 0%, rgba(255,110,50,0.05) 50%, transparent 68%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      {/* Dot-grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, black 15%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, black 15%, transparent 100%)',
        }}
      />

      {/* 3-col grid */}
      <div
        className="content-grid"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '200px 1fr 200px',
          alignItems: 'center',
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* LEFT */}
        <div
          ref={leftIllRef}
          className="left-illustration"
          style={{
            height: '340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            opacity: entered ? 1 : 0,
            transition: 'opacity 1.1s ease 0.25s',
            willChange: 'transform',
          }}
        >
          <div style={{ width: '190px', height: '300px' }}>
            <LeftIllustration scrollY={scrollY} />
          </div>
        </div>

        {/* CENTRE */}
        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            padding: '0 24px',
          }}
        >
          {/* Badge */}
          <div
            className="bg-white badge-container"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(240,78,35,0.2)',
              borderRadius: '3px',
              padding: '5px 13px',
              marginBottom: '30px',
              opacity: entered ? 1 : 0,
              transform: entered ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 0.5s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: '#F04E23',
                display: 'block',
                animation: entered ? 'pdot 2.2s ease infinite' : 'none',
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px',
                fontWeight: 400,
                color: '#F04E23',
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
              }}
            >
              Brain GYM™ Framework
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            {/* Line 1 — "We make you" */}
            <div style={{ overflow: 'hidden', lineHeight: 0 }}>
              <h2
                className="headline-text"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(34px, 4.8vw, 62px)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.15,
                  color: '#1c1c1c',
                  margin: 0,
                  paddingBottom: '2px',
                  display: 'inline-block',
                  opacity: entered ? 1 : 0,
                  transform: entered ? 'translateY(0)' : 'translateY(110%)',
                  transition: `opacity 0.01s, transform 0.82s cubic-bezier(0.16,1,0.3,1) ${d(60)}`,
                }}
              >
                We make you
              </h2>
            </div>

            {/* "Top 1%" — parallax, no gap above/below */}
            <div
              className="inline-flex h-fit w-fit items-center justify-center top-one-container"
              style={{ overflow: 'visible', margin: '4px 0 6px' }}
            >
              <motion.span
                ref={top1Ref}
                className="top-one-text"
                style={{
                  display: 'flex',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(72px, 13vw, 168px)',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  letterSpacing: '-0.04em',
                  textAlign: 'center',

                  lineHeight: 1.2,
                  color: '#F04E23',
                  opacity: entered ? 1 : 0,
                  scale: entered ? top1Scale : 1,
                  y: entered ? 0 : '110%',
                  transition: entered
                    ? 'opacity 0.01s'
                    : `opacity 0.01s, y 0.82s cubic-bezier(0.16,1,0.3,1) ${d(150)}`,
                  willChange: 'transform',
                }}
              >
                Top 1%
              </motion.span>
            </div>

            {/* Line 3 — "in the World at your age" */}
            <div
              className="mt-14 world-text-container"
              style={{
                overflow: 'hidden',
                lineHeight: 0,
                marginBottom: '10px',
              }}
            >
              <h2
                className="headline-text"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(34px, 4.8vw, 62px)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.15,
                  color: '#1c1c1c',
                  margin: 0,
                  paddingTop: '2px',
                  display: 'inline-block',
                  opacity: entered ? 1 : 0,
                  transform: entered ? 'translateY(0)' : 'translateY(110%)',
                  transition: `opacity 0.01s, transform 0.82s cubic-bezier(0.16,1,0.3,1) ${d(230)}`,
                }}
              >
                in the World{' '}
                <span style={{ color: '#c4c4c4', fontStyle: 'italic' }}>
                  at your age
                </span>
              </h2>
            </div>
          </div>

          {/* Subline — powered by + cycling word */}
          <div
            className="mt-12 powered-by-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '34px',
              opacity: entered ? 1 : 0,
              transform: entered ? 'translateY(0)' : 'translateY(12px)',
              transition: `opacity 0.5s ease ${d(370)}, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${d(370)}`,
            }}
          >
            <span
              className="powered-by-text"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(14px, 1.6vw, 18px)',
                fontWeight: 300,
                color: '#8A8A8A',
                letterSpacing: '0.01em',
              }}
            >
              Powered by{' '}
              <span style={{ color: '#F04E23', fontWeight: 500 }}>
                Brain GYM™
              </span>{' '}
              · For Future
            </span>
            <span
              className="cycling-word"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(16px, 1.8vw, 22px)',
                fontWeight: 500,
                fontStyle: 'italic',
                color: '#D9471F',
                minWidth: '115px',
                textAlign: 'left',
                display: 'inline-block',
                opacity: out ? 0 : 1,
                transform: out ? 'translateY(-5px)' : 'translateY(0)',
                transition:
                  'opacity 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {word}
            </span>
          </div>

          {/* CTAs */}
        </div>

        {/* RIGHT */}
        <div
          ref={rightIllRef}
          className="right-illustration"
          style={{
            height: '340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            opacity: entered ? 1 : 0,
            transition: 'opacity 1.1s ease 0.35s',
            willChange: 'transform',
          }}
        >
          <div style={{ width: '190px', height: '300px' }}>
            <RightIllustration scrollY={scrollY} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pdot {
          0%,100% { box-shadow: 0 0 0 2px rgba(240,78,35,0.15); }
          50%      { box-shadow: 0 0 0 5px rgba(240,78,35,0.05); }
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .creative-capabilities-section {
            padding: 60px 0 70px !important;
          }

          .content-grid {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
            gap: 0 !important;
          }

          .left-illustration,
          .right-illustration {
            display: none !important;
          }

          .badge-container {
            margin-bottom: 20px !important;
          }

          .headline-text {
            font-size: clamp(28px, 8vw, 40px) !important;
          }

          .top-one-container {
            margin: 0 0 4px !important;
          }

          .top-one-text {
            font-size: clamp(56px, 18vw, 90px) !important;
          }

          .world-text-container {
            margin-top: 8px !important;
            margin-bottom: 6px !important;
          }

          .powered-by-container {
            flex-direction: column !important;
            gap: 8px !important;
            margin-top: 24px !important;
            margin-bottom: 24px !important;
          }

          .powered-by-text {
            font-size: clamp(13px, 3.5vw, 16px) !important;
            text-align: center !important;
          }

          .cycling-word {
            font-size: clamp(15px, 4vw, 20px) !important;
            min-width: auto !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .creative-capabilities-section {
            padding: 50px 0 60px !important;
          }

          .content-grid {
            padding: 0 16px !important;
          }

          .badge-container {
            padding: 4px 10px !important;
            margin-bottom: 16px !important;
          }

          .headline-text {
            font-size: clamp(24px, 7vw, 32px) !important;
          }

          .top-one-text {
            font-size: clamp(48px, 16vw, 72px) !important;
          }
        }
      `}</style>
    </section>
  )
}