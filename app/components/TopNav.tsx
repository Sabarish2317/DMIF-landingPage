'use client'

import Link from 'next/link'
import Image from 'next/image'
import Button from '@/app/components/Button'

export default function TopNav() {
  const navLinks = [
    { label: 'Home', href: '#home', isDark: false },
    { label: 'Process', href: '#process', isDark: true },
    { label: 'Our Works', href: '#works', isDark: true },
    { label: 'Contact', href: '#contact', isDark: true },
  ]

  return (
    <nav className="absolute top-2 right-0 left-0 z-50 w-screen px-8 md:px-16 lg:px-24">
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
