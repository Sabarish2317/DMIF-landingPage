'use client'

import { useEffect, useState } from 'react'

export type ScreenSize = 'mobile' | 'tablet' | 'pc'

const BREAKPOINTS = {
  Phone: 640, // sm breakpoint
  tablet: 768, // md breakpoint
  pc: 1024, // lg breakpoint
}

const PADDING = {
  mobile: 16,
  tablet: 36,
  pc: 96,
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>('pc')
  const [padding, setPadding] = useState(PADDING.pc)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let size: ScreenSize
      let padValue: number

      if (width < BREAKPOINTS.tablet) {
        size = 'mobile'
        padValue = PADDING.mobile
      } else if (width < BREAKPOINTS.pc) {
        size = 'tablet'
        padValue = PADDING.tablet
      } else {
        size = 'pc'
        padValue = PADDING.pc
      }

      setScreenSize(size)
      setPadding(padValue)
    }

    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { screenSize, padding }
}
