'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function BookingSection() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()

      cal('ui', {
        theme: 'dark', // Switch to "light" based on your site's design
        styles: {
          branding: { brandColor: '#000000' }, // Your primary brand color
        },
        hideEventTypeDetails: false, // Essential: Keeps the left details column visible
        layout: 'month_view', // Essential: Forces the 3-column calendar view
      })
    })()
  }, [])

  return (
    <section className="mx-auto w-full py-12">
      <Cal
        calLink="/sabarish-vs/30min" // Replace with your actual Cal.com link
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        config={{ layout: 'month_view' }} // Double enforcing the layout
      />
    </section>
  )
}
