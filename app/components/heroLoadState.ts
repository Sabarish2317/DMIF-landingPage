/**
 * heroLoadState
 *
 * Zero-React pub/sub for hero load state.
 * BrainCanvas calls setReady() after the GLTF resolves.
 * TopNav + HeroSection subscribe to fire their intro animations.
 */

type Listener = () => void

let ready = false
const listeners: Set<Listener> = new Set()

export const heroLoadState = {
  isReady: () => ready,

  setReady() {
    if (ready) return
    ready = true
    listeners.forEach((fn) => fn())
    listeners.clear()
  },

  /** Calls `fn` immediately if already ready, otherwise queues it. */
  onReady(fn: Listener) {
    if (ready) {
      fn()
    } else {
      listeners.add(fn)
    }
    return () => listeners.delete(fn)
  },
}
