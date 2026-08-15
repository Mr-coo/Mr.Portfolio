'use client'

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  text: string;
  logo?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  // When set (and non-empty) the button renders as a link to this URL.
  href?: string;
  // When true, the link downloads the target file instead of navigating to it.
  download?: boolean;
}

const ICON_CHAR_WIDTH = 2; // reserved char-cells for icon + trailing space

export function Button({ text, logo, onClick, disabled = false, href, download = false }: ButtonProps) {
  const xPad = 3;
  const reserved = logo ? ICON_CHAR_WIDTH : 0;
  const len = text.length + reserved;

  const borderDefault = `+${'-'.repeat(2 * xPad + len)}+`;
  const borderHover = `•${'='.repeat(2 * xPad + len)}•`;

  const inner = (
    <>
      <div
        className="[grid-area:1/1] transition-opacity duration-200 ease-out
                   opacity-100 group-hover:opacity-0 flex flex-col items-center"
      >
        <pre className="m-0">{borderDefault}</pre>
        <div className="flex items-center whitespace-pre">
          <pre className="m-0">{`|${' '.repeat(xPad)}`}</pre>
          {logo && <span className="shrink-0 inline-flex">{logo}</span>}
          {logo && <span>&nbsp;</span>}
          <pre className="m-0">{`${text}${' '.repeat(xPad)}|`}</pre>
        </div>
        <pre className="m-0">{borderDefault}</pre>
      </div>

      <div
        className="[grid-area:1/1] text-cmdlet transition-opacity duration-200 ease-out
                   opacity-0 group-hover:opacity-100 flex flex-col items-center"
      >
        <pre className="m-0">{borderHover}</pre>
        <div className="flex items-center whitespace-pre">
          <pre className="m-0">{`|${' '.repeat(xPad)}`}</pre>
          {logo && <span className="shrink-0 inline-flex">{logo}</span>}
          {logo && <span>&nbsp;</span>}
          <pre className="m-0">{`${text}${' '.repeat(xPad)}|`}</pre>
        </div>
        <pre className="m-0">{borderHover}</pre>
      </div>
    </>
  );

  const motionProps = {
    animate: disabled ? { y: 0 } : { y: [0, -4, 0] },
    transition: {
      duration: 1.2,
      ease: 'easeInOut' as const,
      repeat: Infinity,
    },
    whileHover: disabled ? undefined : { y: 0, transition: { duration: 0.15, ease: 'easeOut' as const } },
    whileTap: disabled ? undefined : { y: 0, transition: { duration: 0.1, ease: 'easeOut' as const } },
    // No `group` when disabled so the hover border swap never triggers.
    className: `grid font-mono ${disabled ? 'opacity-40 cursor-not-allowed text-muted' : 'text-param group'}`,
  };

  if (href && !disabled) {
    // For downloads, keep navigation in the same tab so the browser saves the
    // file; otherwise open external links in a new tab.
    return (
      <motion.a
        href={href}
        download={download || undefined}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} disabled={disabled} {...motionProps}>
      {inner}
    </motion.button>
  );
}
