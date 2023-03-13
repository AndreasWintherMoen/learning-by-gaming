// Copied from https://gist.github.com/rosszurowski/67f04465c424a9bc0dae
// except I changed input and return types from string to number because it works better with Pixi
export default function lerpColor(
  a: number,
  b: number,
  amount: number
): number {
  const ah = a,
    ar = ah >> 16,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff,
    bh = b,
    br = bh >> 16,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);

  return ((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0;
}
