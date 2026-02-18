'use client'

/**
 * HalftoneBg
 *
 * A pure-Canvas2D replica of the halftone post-processing pass used in
 * BrainCanvas.tsx.  It matches the same shader parameters so both layers
 * look visually identical:
 *
 *   gridSize    = 6     (px between cell centres)
 *   gridSpacing = -1.2  (negative = dots overlap slightly)
 *   dotRadius   = (gridSize - gridSpacing) / 2 = 3.6
 *   dotColor    = #fe4709  (rgb 254,71,9)
 *   bgColor     = #ffffff
 *
 * The shader samples the *rendered scene* luminance to vary dot size.
 * Since we have no scene here we approximate with a fixed uniform
 * luminance value (0 = full-size dots everywhere) which produces the
 * densest halftone pattern — matching what the brain shader outputs over
 * the dark orange background.
 *
 * Resize-aware via ResizeObserver; renders once per resize (static, no RAF).
 */

import { useEffect, useRef } from 'react'

// ── Match BrainCanvas HalftonePostProcessing defaults exactly ──────────────
const GRID_SIZE = 4 // u_gridSize
const GRID_SPACING = -5 // overlap amount
const DOT_RADIUS = (GRID_SIZE - GRID_SPACING) / 2 // = 3.6
// BrainCanvas shader: orange dots (#fe4709) on white background
// The halftone post-process runs over the rendered scene;
// over the orange background the output is orange dots on white.
const DOT_COLOR = '#fe4709'
const BG_COLOR = '#ffffff'

// Simulate the luminance of the orange scene background
// orange (254,71,9) → luminance ≈ 0.299*0.996 + 0.587*0.278 + 0.114*0.035 ≈ 0.46
// dotSize = dotRadius * (1 - luminance) → ~1.94px — matches what you see on brain bg
const SCENE_LUMINANCE = 0.46

export default function HalftoneBg({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      // Match device pixel ratio for sharp dots
      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr

      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.scale(dpr, dpr)

      // Background
      ctx.fillStyle = BG_COLOR
      ctx.fillRect(0, 0, w, h)

      // Halftone grid — mirrors the GLSL cell loop
      // dotSize = dotRadius * (1 - luminance)
      const dotSize = DOT_RADIUS * (1 - SCENE_LUMINANCE)

      ctx.fillStyle = DOT_COLOR

      // Iterate over every grid cell
      for (let cy = GRID_SIZE * 0.5; cy < h + GRID_SIZE; cy += GRID_SIZE) {
        for (let cx = GRID_SIZE * 0.5; cx < w + GRID_SIZE; cx += GRID_SIZE) {
          if (dotSize <= 0) continue
          ctx.beginPath()
          ctx.arc(cx, cy, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    draw()

    const ro = new ResizeObserver(draw)
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  )
}
