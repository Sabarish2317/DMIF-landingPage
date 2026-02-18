/**
 * Shared mutable state written by HeroSection on scroll,
 * read by BrainModel on every useFrame tick.
 * Using a plain object avoids React state and re-renders entirely.
 */
export const brainScrollState = {
  /** Raw scroll offset in px from top of HeroSection */
  scrollPx: 0,
}
