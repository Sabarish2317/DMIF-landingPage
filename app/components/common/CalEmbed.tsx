'use client'

import { useEffect } from 'react'

export default function CalEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Cal = (window as any).Cal
      Cal('init', '30min', { origin: 'https://app.cal.com' })
      Cal.ns['30min']('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
