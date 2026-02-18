'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/app/components/Button'
import { heroLoadState } from './heroLoadState'

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export default function TopNav() {
  const navRef = useRef<HTMLElement>(null)

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
    return unsub 
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home', isDark: false },
    { label: 'Process', href: '#process', isDark: true },
    { label: 'Our Works', href: '#works', isDark: true },
    { label: 'Contact', href: '#contact', isDark: true },
  ]

  return (
    <nav
      ref={navRef}
      className="absolute top-2 right-0 left-0 z-50 w-screen px-8 md:px-16 lg:px-24"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="rounded-2xl bg-white px-4 py-2.5 lg:px-4">
        <div className="flex h-max items-center gap-12">
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

          {/* Desktop Navigation Grid */}
          <div className="ml-auto flex flex-row items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md font-medium transition-colors ${
                  link.isDark
                    ? 'text-black/80 hover:text-black'
                    : 'font-semibold text-black hover:text-black'
                }`}
              >
                {link.label}
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
