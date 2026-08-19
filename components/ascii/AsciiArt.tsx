'use client'

import { useEffect, useRef, useState } from 'react'

interface AsciiArtProps {
  art: string
  // Classes for the <pre> itself (colour, base/natural font-size, etc.).
  className?: string
}

// Fixed-width ASCII art that scales DOWN to fit its container width. On screens
// wide enough to show it at full size it stays at its natural size (scale 1); on
// narrower screens it shrinks proportionally so it never overflows or gets
// clipped into an unreadable sliver. Re-measures on container resize and once the
// monospace font has loaded (fallback metrics differ from the final font).
export function AsciiArt({ art, className = '' }: AsciiArtProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const preRef = useRef<HTMLPreElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number>()

  useEffect(() => {
    const wrap = wrapRef.current
    const pre = preRef.current
    if (!wrap || !pre) return

    // scrollWidth/Height report the pre's un-transformed layout size, so the
    // measurement is stable no matter what scale is currently applied.
    const measure = () => {
      const natW = pre.scrollWidth
      const natH = pre.scrollHeight
      const avail = wrap.clientWidth
      // Fall back to full size (never 0) if the container hasn't been laid out
      // yet, so a transient 0-width can't collapse the art to invisible.
      const s = natW > 0 && avail > 0 ? Math.min(1, avail / natW) : 1
      setScale(s)
      setHeight(natH * s)
    }

    measure()
    // Re-measure once layout has settled (initial pass can run before fonts/
    // flex sizing resolve).
    const raf = requestAnimationFrame(measure)
    const ro = new ResizeObserver(measure)
    ro.observe(wrap)
    document.fonts?.ready.then(measure).catch(() => {})
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [art])

  return (
    <div
      ref={wrapRef}
      className="w-full max-w-full overflow-hidden"
      style={{ height }}
    >
      <pre
        ref={preRef}
        className={`m-0 w-max whitespace-pre ${className}`}
        style={{ transform: `scale(${scale})`, transformOrigin: 'left top' }}
      >
        {art}
      </pre>
    </div>
  )
}
