'use client'

interface SmallCardProps {
  text: string;
  onClick?: () => void;
}

export function SmallCard({ text }: SmallCardProps) {
  const xPad = 3;
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