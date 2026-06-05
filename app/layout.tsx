import type { Metadata } from 'next'
import { Geist, Geist_Mono, MuseoModerno, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import Providers from '@/components/providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const museoModerno = MuseoModerno({
    subsets: ['latin'],
    variable: '--font-logo',
    weight: ['700']
})

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Pure Work Spaces | Professional Cleaning Services',
    description: 'Transform your workspace. Professional commercial cleaning services in Swindon, Oxford and surrounding areas.',

    icons: {
        icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
        apple: '/apple-icon.png',
    },

    openGraph: {
        title: 'Pure Work Spaces | Professional Cleaning Services',
        description: 'Transform your workspace. Professional commercial cleaning services in Swindon, Oxford and surrounding areas.',
        url: 'https://www.pureworkspaces.uk',
        siteName: 'Pure Work Spaces',
        images: [
            {
                url: '/PWS-Logo/PWS-PNG-files/PWS-Primary-logo/PWS Primary Logo - dark Green@0.5x.png',
                width: 800,
                height: 400,
                alt: 'Pure Work Spaces Logo',
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Pure Work Spaces | Professional Cleaning Services',
        description: 'Transform your workspace. Professional commercial cleaning services in Swindon, Oxford and surrounding areas.',
        images: ['/PWS-Logo/PWS-PNG-files/PWS-Primary-logo/PWS Primary Logo - dark Green@0.5x.png'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning data-palette="sage-stone" className={`${inter.variable} ${museoModerno.variable}`}>
            <body className="font-sans antialiased bg-background text-foreground">
                <Providers>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <ScrollToTop />
                </Providers>
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </body>
        </html>
    )
}
