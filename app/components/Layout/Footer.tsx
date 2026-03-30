"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const footerSections = [
        {
      title: 'About Us',
      links: [
        { label: 'Founder Story', href: '#founder' },
        { label: 'Hall of Fame', href: '/hall-of-fame' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Our Mission', href: '#mission' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { label: 'Executive Technology Immersion Program', href: '/executive-technology-immersion-program' },
        { label: 'Global Coding Mentorship Program', href: '/global-coding-mentorship-program' },
        { label: 'Global Guided Mentorship Program', href: '/global-guided-mentorship-program' },
        { label: 'Professional Certification Program', href: '/professional-certification-program' },
      ],
    },

  ]

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[#FD4F0C] via-[#ff5a1f] to-[#FD4F0C]" />

      {/* Background watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden">
        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[200px] font-bold opacity-5 select-none leading-none whitespace-nowrap">
          DMIF
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-4 pt-8 sm:px-6 sm:pt-12 md:px-12">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Header Section */}
           

            {/* Footer Grid */}
            <motion.div
              className="flex flex-col gap-8 mb-8 sm:gap-10 sm:mb-12 md:flex-row md:justify-between md:gap-12 md:mb-12"
              variants={containerVariants}
            >
 <motion.div variants={itemVariants} className="mb-8 sm:mb-10 md:mb-0">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <Image
                  src="/icons/logs.webp"
                  alt="DMIF Logo"
                  width={40}
                  height={40}
                  className="sm:w-12.5 sm:h-12.5"
                />
                <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  DMIF™
                </h2>
              </div>
              <p className="text-white/80 max-w-md text-xs sm:text-sm md:text-base">
                Empowering innovation through mentorship, technology immersion,
                and professional development worldwide.
              </p>
            </motion.div>
              {footerSections.map((section) => (
                <motion.div key={section.title} variants={itemVariants}>
                  <h3 className="font-semibold text-white text-xs uppercase tracking-wide sm:text-sm md:text-base mb-3 md:mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Bottom Section */}
        <motion.div
          className="px-4 py-6 sm:px-6 sm:py-8 md:px-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-6 md:flex-row md:justify-between md:items-center">
            {/* Copyright */}
            <div className="text-white/60 text-xs sm:text-sm">
              <p>
                © {currentYear} DMIF. All rights reserved. |{' '}
                <span className="text-white/40">Designed & Developed with ❤️</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 items-center">
              <Link
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Github"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
