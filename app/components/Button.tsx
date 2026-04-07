import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'fill' | 'outline' | 'ghost'
  className?: string
  onClick?: () => void
  [key: string]: any
}

export default function Button({
  children,
  variant = 'fill',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 w-max rounded-md font-medium text-sm md:text-md transition-all duration-200 ease-in-out cursor-pointer '

  const variants = {
    fill: 'bg-[#FD4F0C] text-white ',
    outline:
      'border bg-white border-[#565452]/20 text-[#1e1e1e] hover:bg-black hover:text-white',
    ghost: 'text-black hover:text-orange-500',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
