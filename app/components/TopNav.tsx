'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './Button'
import { useScreenSize } from '@/app/hooks/useScreenSize'

export default function TopNav() {
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { padding } = useScreenSize()

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
    const onScroll = () => setIsScrolled(window.scrollY > 1080)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
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
    <motion.nav
      className={`sticky top-2 right-0 left-0 z-50 w-full items-center justify-center will-change-transform`}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        paddingLeft: padding,
        paddingRight: padding,
      }}
      transition={{
        y: { type: 'spring', stiffness: 100, damping: 20, mass: 0.8 },
        opacity: { duration: 0.3 },
        paddingLeft: { duration: 0.1, ease: 'easeInOut' },
        paddingRight: { duration: 0.1, ease: 'easeInOut' },
      }}
      style={{
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    >
      <motion.div
        className={`relative self-center border border-[#565452]/20 px-3 py-2.5 sm:px-4 lg:px-4 ${
          isScrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'
        }`}
        initial={false}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      >
        {/* Border dots */}
        <div className="pointer-events-none absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#565452]" />
        <div className="pointer-events-none absolute top-0 right-0 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#565452]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#565452]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-1.5 w-1.5 translate-x-1/2 translate-y-1/2 rounded-full bg-[#565452]" />
        <div className="flex h-max items-center gap-4 sm:gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Image
              src="/icons/logo-full.svg"
              alt="DMIF Logo"
              width={80}
              height={112}
              className="w-20 sm:w-28"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className="text-md font-medium text-black/80 hover:text-black"
            >
              Home
            </Link>
            <Link
              href="/hall-of-fame"
              className="text-md font-medium text-black/80 hover:text-black"
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
                className="text-md inline-flex cursor-pointer items-center gap-1 font-medium text-black/80 transition-colors hover:text-[#FA773A]"
                type="button"
                aria-expanded={isProgramsOpen}
                aria-haspopup="menu"
              >
                Programs
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProgramsOpen && (
                <div
                  className="absolute top-full left-0 z-50 mt-8 w-85 overflow-hidden rounded-sm border border-slate-200 bg-white shadow-xl"
                  onMouseEnter={openPrograms}
                  onMouseLeave={closeProgramsWithDelay}
                >
                  {programLinks.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="block border-b border-slate-200 px-5 py-4 text-[13px] leading-snug font-medium text-slate-700 transition-colors hover:bg-slate-50"
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
              className="text-md font-medium text-black/80 hover:text-black"
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="text-md font-medium text-black/80 hover:text-black"
            >
              Contact Us
            </Link>
          </div>

          {/* Tablet Navigation */}
          <div className="ml-auto hidden items-center gap-4 md:hidden">
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
          <div className="hidden lg:block">
            <button
              onClick={handleScrollToCTA}
              className="rounded-sm bg-[#fd4f0c] px-4 py-2 text-xs font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#e04500] sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-auto p-2 text-black/80 hover:text-black lg:hidden"
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
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-50 mx-4 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:hidden">
          <div className="flex flex-col">
            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="border-b border-slate-200 px-4 py-3 text-sm font-medium text-black/80 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/hall-of-fame"
              className="border-b border-slate-200 px-4 py-3 text-sm font-medium text-black/80 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Hall of Fame
            </Link>

            {/* Mobile Programs Dropdown */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-black/80 hover:bg-slate-50"
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
              className="border-b border-slate-200 px-4 py-3 text-sm font-medium text-black/80 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="border-b border-slate-200 px-4 py-3 text-sm font-medium text-black/80 hover:bg-slate-50"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>

            {/* Mobile CTA Button */}
            <Button
              variant="fill"
              className="rounded-sm!"
              onClick={() => {
                handleScrollToCTA()
                closeMobileMenu()
              }}
            >
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
