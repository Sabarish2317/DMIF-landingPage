'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import Button from '@/app/components/Button'
import { heroLoadState } from './heroLoadState'

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export default function TopNav() {
  const navRef = useRef<HTMLElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false)
  const pathname = usePathname()

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

  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('contact')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileProgramsOpen(false)
  }

  useEffect(() => {
    if (pathname !== '/') {
      heroLoadState.setReady()
    }
  }, [pathname])

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
  ]

  return (
    <nav
      ref={navRef}
      className="absolute top-2 right-0 left-0 z-50 w-screen px-4 sm:px-8 md:px-16 lg:px-24"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="rounded-2xl bg-white px-3 py-2.5 sm:px-4 lg:px-4">
        <div className="flex h-max items-center gap-4 sm:gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Image
              src="/icons/logo-full.svg"
              alt="DMIF Logo"
              width={48}
              height={48}
              className="w-20 sm:w-28"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className="text-lg font-semibold text-black/80 hover:text-black"
            >
              Home
            </Link>
            <Link
              href="/hall-of-fame"
              className="text-lg font-semibold text-black/80 hover:text-black"
            >
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
                className="inline-flex items-center gap-1 text-lg font-semibold text-black/80 transition-colors hover:text-[#FA773A]"
                type="button"
                aria-expanded={isProgramsOpen}
                aria-haspopup="menu"
              >
                Programs
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProgramsOpen && (
                <div
                  className="absolute top-full left-0 z-50 mt-2 w-85 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
                  onMouseEnter={openPrograms}
                  onMouseLeave={closeProgramsWithDelay}
                >
                  {programLinks.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="block border-b border-slate-200 px-5 py-4 text-[13px] leading-snug font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/#testimonials"
              className="text-lg font-semibold text-black/80 hover:text-black"
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="text-lg font-semibold text-black/80 hover:text-black"
            >
              Contact Us
            </Link>
          </div>

          {/* Tablet Navigation */}
          <div className="ml-auto hidden items-center gap-4 md:flex lg:hidden">
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {programLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="line-clamp-1 text-xs font-medium text-black/80 transition-colors hover:text-black sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop & Tablet */}
          <div className="hidden md:block">
            <button
              onClick={handleScrollToCTA}
              className="rounded-lg bg-[#fd4f0c] px-4 py-2 text-xs font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#e04500] sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-auto p-2 text-black/80 hover:text-black md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-50 mx-4 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:hidden">
          <div className="flex flex-col">
            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-black/80 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/hall-of-fame"
              className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-black/80 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Hall of Fame
            </Link>

            {/* Mobile Programs Dropdown */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-black/80 hover:bg-slate-50"
              >
                Programs
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isMobileProgramsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isMobileProgramsOpen && (
                <div className="bg-slate-50">
                  {programLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block border-t border-slate-200 px-6 py-3 text-xs font-medium text-slate-700 hover:bg-slate-100"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#testimonials"
              className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-black/80 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-black/80 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>

            {/* Mobile CTA Button */}
            <button
              onClick={() => {
                handleScrollToCTA()
                closeMobileMenu()
              }}
              className="w-full bg-[#fd4f0c] px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#e04500]"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
