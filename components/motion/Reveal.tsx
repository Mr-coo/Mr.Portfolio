'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'left' | 'right' | 'up'

const OFFSET: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -48 },
  right: { x: 48 },
  up: { y: 32 },
}

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}

// Light scroll-triggered entrance: fades and slides in from `direction` the
// first time it enters the viewport.
export function Reveal({ children, direction = 'up', delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...OFFSET[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
