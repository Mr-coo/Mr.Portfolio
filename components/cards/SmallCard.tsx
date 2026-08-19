'use client'

import { useEffect, useState } from 'react'

interface SmallCardProps {
  text: string;
  onClick?: () => void;
}

export function SmallCard({ text }: SmallCardProps) {
  // Tighter inner padding on mobile so the boxes stay compact. Defaults to the
  // desktop value so the first client render matches the server (no hydration
  // mismatch), then narrows once matchMedia resolves on the client.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const xPad = isMobile ? 1 : 3;
  const len = text.length;

  const borderDefault = `•${'-'.repeat(2 * xPad + len)}•`;
  const contentDefault = `|${' '.repeat(xPad)}${text}${' '.repeat(xPad)}|`;

  return (
    <div
      className="font-mono text-success disabled:cursor-not-allowed"
    >
        <pre className="m-0 text-sm leading-tight">{borderDefault}</pre>
        <pre className="m-0 text-sm leading-tight">{contentDefault}</pre>
        <pre className="m-0 text-sm leading-tight">{borderDefault}</pre>
    </div>
  );
}