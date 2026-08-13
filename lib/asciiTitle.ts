import figlet from 'figlet';

// Renders text as ASCII art using figlet's "Univers" font. Server-only:
// figlet reads its font files from the filesystem, so this must run on the
// server (it is only imported by server components).
export function asciiTitle(text: string): string {
  const lines = figlet.textSync(text, { font: 'Univers' }).split('\n');

  // Drop leading/trailing blank lines figlet pads around the glyphs so the
  // art sits flush in the layout.
  while (lines.length && lines[0].trim() === '') lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();

  return lines.join('\n');
}
