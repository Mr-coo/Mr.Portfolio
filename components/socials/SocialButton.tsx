'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SocialButtonProps {
  icon: ReactNode
  href: string
  label: string
}

const WIDTH = 5 // inner width (in ch) between the corner glyphs

const borderDefault = `+${'-'.repeat(WIDTH)}+`
const borderHover = `•${'='.repeat(WIDTH)}•`

function Box({ icon, border }: { icon: ReactNode; border: string }) {
  return (
    <>
      <pre className="m-0">{border}</pre>
      <div className="flex items-center whitespace-pre">
        <pre className="m-0">|</pre>
        <span className="inline-flex items-center justify-center" style={{ width: `${WIDTH}ch` }}>
          {icon}
        </span>
        <pre className="m-0">|</pre>
      </div>
      <pre className="m-0">{border}</pre>
    </>
  )
}

export function SocialButton({ icon, href, label }: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      transition={{
        duration: 1.2,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      whileHover={{ y: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
      whileTap={{ y: 0, transition: { duration: 0.1, ease: 'easeOut' } }}
      className="group grid font-mono text-param"
    >
      <div
        className="[grid-area:1/1] transition-opacity duration-200 ease-out
                   opacity-100 group-hover:opacity-0"
      >
        <Box icon={icon} border={borderDefault} />
      </div>

      <div
        className="[grid-area:1/1] text-cmdlet transition-opacity duration-200 ease-out
                   opacity-0 group-hover:opacity-100"
      >
        <Box icon={icon} border={borderHover} />
      </div>
    </motion.a>
  )
}
