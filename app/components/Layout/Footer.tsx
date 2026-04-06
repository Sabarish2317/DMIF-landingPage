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

<div className="flex gap-4 sm:gap-6 items-center">
  {/* LinkedIn */}
  <Link
      href="https://www.linkedin.com/company/drmadhan/"
  target="_blank"
  rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors"
    aria-label="LinkedIn"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
        2.761 2.239 5 5 5h14c2.761 0 5-2.239 
        5-5v-14c0-2.761-2.239-5-5-5zm-11 
        19h-3v-10h3v10zm-1.5-11.268c-.966 
        0-1.75-.79-1.75-1.764s.784-1.764 
        1.75-1.764 1.75.79 
        1.75 1.764-.784 1.764-1.75 
        1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.865 
        0-2.151 1.454-2.151 2.959v5.704h-3v-10h2.881v1.367h.041c.401-.761 
        1.381-1.561 2.845-1.561 3.044 0 3.604 2.003 
        3.604 4.609v5.585z" />
    </svg>
  </Link>

  {/* YouTube */}
  <Link
     href="https://www.youtube.com/@Dr.MadhanInstituteofFuture"
  target="_blank"
  rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors"
    aria-label="YouTube"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a2.996 2.996 0 00-2.11-2.122C19.505 
        3.5 12 3.5 12 3.5s-7.505 0-9.388.564A2.996 
        2.996 0 00.502 6.186 31.284 31.284 0 
        000 12a31.284 31.284 0 00.502 
        5.814 2.996 2.996 0 002.11 
        2.122C4.495 20.5 12 20.5 12 
        20.5s7.505 0 9.388-.564a2.996 
        2.996 0 002.11-2.122A31.284 
        31.284 0 0024 12a31.284 31.284 
        0 00-.502-5.814zM9.75 15.568V8.432L15.818 
        12 9.75 15.568z" />
    </svg>
  </Link>

  {/* Instagram */}
  <Link
      href="https://www.instagram.com/dr_madhan_institute/"
  target="_blank"
  rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors"
    aria-label="Instagram"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5C19.216 2 22 4.784 22 
        7.75v8.5C22 19.216 19.216 22 16.25 
        22h-8.5C4.784 22 2 19.216 2 
        16.25v-8.5C2 4.784 4.784 2 7.75 
        2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 
        3.75 0 007.75 20h8.5A3.75 3.75 0 
        0020 16.25v-8.5A3.75 3.75 0 
        0016.25 4h-8.5zm4.25 3a5 5 0 110 
        10 5 5 0 010-10zm0 2a3 3 0 100 
        6 3 3 0 000-6zm5.25-.9a1.1 1.1 0 
        110 2.2 1.1 1.1 0 010-2.2z" />
    </svg>
  </Link>
</div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
