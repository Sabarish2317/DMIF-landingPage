'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import Button from '@/app/components/Button'
import { heroLoadState } from './heroLoadState'

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export default function TopNav() {
  const navRef = useRef<HTMLElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)

  const openPrograms = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setIsProgramsOpen(true)
  }

  const closeProgramsWithDelay = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    closeTimerRef.current = setTimeout(() => {
      setIsProgramsOpen(false)
      closeTimerRef.current = null
    }, 220)
  }

  useEffect(() => {
    const el = navRef.current
    if (!el) return
    // Start hidden above viewport
    el.style.opacity = '0'
    el.style.transform = 'translateY(-24px)'

    const unsub = heroLoadState.onReady(() => {
      let start: number | null = null
      const DURATION = 900
      const tick = (now: number) => {
        if (start === null) start = now
        const t = Math.min((now - start) / DURATION, 1)
        const v = easeInOut(t)
        el.style.transform = `translateY(${(-24 * (1 - v)).toFixed(2)}px)`
        el.style.opacity = v.toFixed(3)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
      unsub()
    }
  }, [])

  const programLinks = [
    {
      label: 'Global Guided Mentorship Program (DMIF G-GMP)',
      href: '/global-guided-mentorship-program',
    },
    {
      label: 'Global Coding Mentorship Program (DMIF G-CMP)',
      href: '/global-coding-mentorship-program',
    },
    {
      label: 'Executive Technology Immersion Program (DMIF E-TIP)',
      href: '/executive-technology-immersion-program',
    },
    {
      label: 'Professional Certification Program (DMIF PCP)',
      href: '/professional-certification-program',
    },
    {
      label: 'Why It Matters (G-GMP)',
      href: '/global-guided-mentorship-program',
    },
  ]

  return (
    <nav
      ref={navRef}
      className="absolute top-2 right-0 left-0 z-50 w-screen px-8 md:px-16 lg:px-24"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="rounded-2xl bg-white px-4 py-2.5 lg:px-4">
        <div className="flex h-max items-center gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Image
              src="/icons/logo-full.svg"
              alt="DMIF Logo"
              width={48}
              height={48}
              className="w-28"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden items-center gap-8 lg:flex">
            <Link href="/" className="text-lg font-semibold text-black/80 hover:text-black">
              Home
            </Link>
            <Link href="/global-guided-mentorship-program" className="text-lg font-semibold text-black/80 hover:text-black">
              Hall of Fame
            </Link>
            <div
              className="relative"
              onMouseEnter={openPrograms}
              onMouseLeave={closeProgramsWithDelay}
            >
              <button
                onClick={() => setIsProgramsOpen((prev) => !prev)}
                onFocus={openPrograms}
                onBlur={closeProgramsWithDelay}
                className="inline-flex items-center gap-1 text-lg font-semibold text-[#FA773A]"
                type="button"
                aria-expanded={isProgramsOpen}
                aria-haspopup="menu"
              >
                Programs
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProgramsOpen && (
                <div
                  className="absolute left-0 top-full z-50 mt-2 w-85 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
                  onMouseEnter={openPrograms}
                  onMouseLeave={closeProgramsWithDelay}
                >
                  {programLinks.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="block border-b border-slate-200 px-5 py-4 text-[13px] font-semibold leading-snug text-slate-700 transition-colors hover:bg-slate-50"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/#testimonials" className="text-lg font-semibold text-black/80 hover:text-black">
              Testimonials
            </Link>
            <Link href="/#contact" className="text-lg font-semibold text-black/80 hover:text-black">
              Contact Us
            </Link>
          </div>

          {/* Compact Program Links for Tablet */}
          <div className="ml-auto grid grid-cols-2 gap-x-4 gap-y-2 lg:hidden">
            {programLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md font-medium text-black/80 transition-colors hover:text-black"
              >
                <span className="block text-xs leading-tight lg:text-[11px]">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="ml-auto">
            <Button className="py-2.5!" variant="fill">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
