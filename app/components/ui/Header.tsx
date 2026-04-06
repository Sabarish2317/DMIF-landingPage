import React from 'react'

export const Header = ({ text }: { text: string }) => {
  return (
    <div
      className={`relative border border-[#565452]/20 bg-white px-3 py-2 sm:px-4 lg:px-4`}
    >
      {/* Border dots */}
      <div className="pointer-events-none absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#565452]" />
      <div className="pointer-events-none absolute top-0 right-0 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#565452]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#565452]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-1.5 w-1.5 translate-x-1/2 translate-y-1/2 rounded-full bg-[#565452]" />
      <p className="text-sm font-medium text-[#1e1e1e]">{text}</p>
    </div>
  )
}
