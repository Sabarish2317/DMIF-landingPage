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
    'px-6 py-3 w-max rounded-2xl font-medium text-md transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 active:scale-95 '

  const variants = {
    fill: 'bg-[#FD4F0C] text-white ',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
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
