import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Google Font - Inter
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Local Font - Satoshi
export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Variable.ttf',
      weight: '100 900',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})
