'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroLoadState } from './heroLoadState'

export default function HeroLoader() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let readyFired = false
    let minTimerDone = false

    const maybeFinish = () => {
      if (readyFired && minTimerDone) setIsLoaded(true)
    }

    // Guarantee at least 2s of visibility regardless of load speed
    const minTimer = setTimeout(() => {
      minTimerDone = true
      maybeFinish()
    }, 2000)

    const unsub = heroLoadState.onReady(() => {
      readyFired = true
      maybeFinish()
    })

    return () => {
      unsub()
      clearTimeout(minTimer)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {!isLoaded && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <svg
            width="110"
            height="84"
            viewBox="0 0 110 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M22.1025 46.6406C16.9608 48.0688 5.57565 51.5573 1.04391 54.1187M22.1025 46.6406C20.7138 42.8697 20.4124 36.7042 20.4124 33.0477V6.5064C40.8901 9.31706 48.2894 5.76295 53.6719 1.35352C61.3276 9.16984 78.6599 7.72354 86.3691 6.02335V33.0477C86.3691 35.9822 86.3691 43.4533 85.1135 46.6965M22.1025 46.6406L13.6409 54.2905C27.047 50.3289 61.7511 44.8007 93.3188 54.3802L85.1135 46.6965M1.00024 54.1435C1.01473 54.1352 1.02928 54.127 1.04391 54.1187M1.04391 54.1187L11.3168 58.2858L5.8459 66.8049C8.55532 65.6065 14.5056 63.1472 16.6315 62.8971L17.2906 64.9075C19.9999 63.9601 23.8324 62.9204 28.5323 62.0243M85.1135 46.6965C91.4762 47.8109 102.174 52.2833 106.727 54.3802L95.9427 58.3794L101.47 67.1415C101.11 66.8899 94.0405 64.2807 90.5506 63.0076L89.7916 64.9075C86.0216 63.7823 82.2692 62.8718 78.5655 62.1473M28.5323 62.0243C31.7918 67.4107 41.3585 79.112 53.549 82.8263C58.4608 81.3419 70.3405 75.128 78.5655 62.1473M28.5323 62.0243C40.8113 59.6832 59.0105 58.3222 78.5655 62.1473"
              stroke="#FD5717"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.3, 1],
              }}
              transition={{
                duration: 2.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
