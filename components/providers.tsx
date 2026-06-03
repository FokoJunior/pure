'use client'

import { useEffect } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Scroll to initial hash if present in URL on load
    const handleInitialHash = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.substring(1)
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 150)
      }
    }

    handleInitialHash()

    // 2. Intercept click events on hash links to trigger smooth scrolling
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link) {
        const href = link.getAttribute('href')
        if (href) {
          let id = ''
          if (href.startsWith('#')) {
            id = href.substring(1)
          } else if (href.startsWith('/#')) {
            id = href.substring(2)
          }

          if (id) {
            const element = document.getElementById(id)
            if (element) {
              e.preventDefault()
              element.scrollIntoView({ behavior: 'smooth' })
              window.history.pushState(null, '', `/#${id}`)
            }
          }
        }
      }
    }

    document.addEventListener('click', handleHashClick)
    return () => document.removeEventListener('click', handleHashClick)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  )
}

