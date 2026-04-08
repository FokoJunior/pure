import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/components/providers'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pure Work Spaces | Professional Cleaning Services',
  description: 'Transform your workspace. Professional commercial cleaning services in Swindon, Oxford and surrounding areas.',
  
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
   // <html lang="en" suppressHydrationWarning data-palette="arctic-pine">
  // <html lang="en" suppressHydrationWarning data-palette="arctic-pine">
  //  <html lang="en" suppressHydrationWarning data-palette="mono-gray">

    <html lang="en" suppressHydrationWarning>

      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
