import { Inter, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

// Google Font - Inter
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Google Font - Playfair Display
export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
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
