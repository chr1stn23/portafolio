/**
 * Indica si el usuario prefiere reducir las animaciones.
 * Incluye comprobaciones defensivas para entornos sin `matchMedia` (SSR, tests).
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
