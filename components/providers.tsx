'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  )
}

