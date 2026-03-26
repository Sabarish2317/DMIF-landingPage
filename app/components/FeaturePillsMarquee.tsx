'use client'

import React from 'react'

interface FeaturePill {
  highlight: string
  label: string
}

interface FeaturePillsMarqueeProps {
  pills?: FeaturePill[]
  style?: React.CSSProperties
  ref?: React.RefObject<HTMLElement>
}

const defaultPills = [
  { highlight: '1000s', label: 'Mentored' },
  { highlight: 'Brain 2.0', label: 'Framework' },
  { highlight: 'MindNext™', label: 'Movement' },
  { highlight: 'Mentorship over', label: 'Teaching' },
  { highlight: 'Active Learning', label: 'Methodology' },
]

export default React.forwardRef<HTMLElement, FeaturePillsMarqueeProps>(
  function FeaturePillsMarquee({ pills = defaultPills, style }, ref) {
    return (
      <section
        ref={ref}
        className="flex w-full overflow-hidden md:hidden items-center py-4"
        style={style}
      >
        <div className="animate-marquee-reverse flex gap-4 py-3 whitespace-nowrap">
          {[...pills, ...pills].map((item, i) => (
            <div
              key={i}
              className="shrink-0 rounded-lg bg-white px-3 py-1 text-sm font-medium tracking-wide backdrop-blur-sm"
            >
              <span className="text-[#fd4f0c]">{item.highlight}</span>{' '}
              <span className="text-black">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }
)
