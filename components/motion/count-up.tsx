'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

type CountUpProps = {
  end: number
  start?: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  once?: boolean
  className?: string
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function CountUp({
  end,
  start = 0,
  duration = 1000,
  decimals = 0,
  prefix = '',
  suffix = '',
  once = true,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(start)
  const [hasStarted, setHasStarted] = useState(false)
  const [hasCompleted, setHasCompleted] = useState(false)
  const inView = useInView(ref, { once, margin: '0px 0px -10% 0px' })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (hasCompleted) return
    if (inView) {
      setHasStarted(true)
      return
    }

    // Fallback: if element is already visible on mount (hero/KPI), start anyway.
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const viewportH = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < viewportH && rect.bottom > 0) {
      setHasStarted(true)
    }
  }, [hasCompleted, inView])

  useEffect(() => {
    if (!hasStarted || hasCompleted) return
    if (prefersReducedMotion) {
      setValue(end)
      setHasCompleted(true)
      return
    }

    let rafId = 0
    const from = start
    const to = end
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      setValue(from + (to - from) * eased)

      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setValue(to)
        setHasCompleted(true)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [duration, end, hasCompleted, hasStarted, prefersReducedMotion, start])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
