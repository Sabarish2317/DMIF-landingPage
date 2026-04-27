import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface AnnouncementData {
  message: string
  type: string
  id: string
}

export function useAnnouncement() {
  const [announcement, setAnnouncement] = useState<AnnouncementData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const { data, error: supabaseError } = await supabase
          .from('marquee_messages')
          .select('id, message, type')
          .eq('is_active', true)
          .single()

        if (supabaseError) {
          if (supabaseError.code === 'PGRST116') {
            // No rows found
            setAnnouncement(null)
          } else {
            setError(supabaseError.message)
          }
        } else if (data) {
          setAnnouncement(data as AnnouncementData)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchAnnouncement()
  }, [])

  return { announcement, loading, error }
}
