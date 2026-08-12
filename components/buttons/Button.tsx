'use client'

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  text: string;
  logo?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const ICON_CHAR_WIDTH = 2; // reserved char-cells for icon + trailing space

export function Button({ text, logo, onClick, disabled = false }: ButtonProps) {
  const xPad = 3;
  const reserved = logo ? ICON_CHAR_WIDTH : 0;
  const len = text.length + reserved;

  const borderDefault = `+${'-'.repeat(2 * xPad + len)}+`;
  const borderHover = `•${'='.repeat(2 * xPad + len)}•`;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      animate={disabled ? { y: 0 } : { y: [0, -4, 0] }}
      transition={{
        duration: 1.2,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      whileHover={{ y: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
      whileTap={{ y: 0, transition: { duration: 0.1, ease: 'easeOut' } }}
      className="group grid font-mono text-param disabled:cursor-not-allowed"
    >
      <div
        className="[grid-area:1/1] transition-opacity duration-200 ease-out
                   opacity-100 group-hover:opacity-0"
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
                   opacity-0 group-hover:opacity-100"
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
    </motion.button>
  );
}