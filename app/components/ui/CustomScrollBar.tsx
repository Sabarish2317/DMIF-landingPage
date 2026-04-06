'use client'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

export const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll()

  // Add a slight spring physics to the scrollbar for that premium, buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  })

  // The thumb is 15vh tall. To keep it perfectly within the screen,
  // it needs to travel a maximum of 85vh (100vh - 15vh = 85vh).
  const y = useTransform(smoothProgress, [0, 1], ['0vh', '85vh'])

  return (
    <div className="pointer-events-none fixed top-0 right-0 bottom-0 z-[100] w-2 px-[2px] py-1">
      <motion.div
        style={{ y, height: '15vh' }}
        className="w-full rounded-full bg-black/50 backdrop-blur-sm transition-colors"
      />
    </div>
  )
}
