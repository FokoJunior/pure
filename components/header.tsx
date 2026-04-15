'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: '/#story', label: 'Our Story' },
        { href: '/#values', label: 'Values' },
        { href: '/#who-we-serve', label: 'Who We Serve' },
        { href: '/#approach', label: 'Approach' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/#contact', label: 'Contact' },
    ]

    const isActive = (href: string) => pathname === href

    return (
        <header className="sticky top-0 z-50 w-full bg-[#f4efe6]/90 backdrop-blur-md border-b border-[#283524]/10">
            <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img
                        src="/PWS-Logo/PWS-Webp-Files/PWS-Secondary-logo-webp-files/PWS Secondary logo - dark green.webp"
                        alt="Pure Work Spaces"
                        className="h-10 w-auto md:h-14"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive(item.href)
                                ? 'text-[#283524]'
                                : 'text-[#283524]/60 hover:text-[#283524]'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Link href="/#contact">
                        <Button className="bg-[#283524] hover:bg-[#283524]/90 text-white shadow-sm hover:shadow-md transition-shadow uppercase font-bold tracking-widest text-xs px-6">
                            Get Quote <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 rounded-md hover:bg-[#283524]/5 text-[#283524]"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="lg:hidden border-t border-[#283524]/10 bg-[#f4efe6]"
                    >
                        <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-sm font-bold uppercase tracking-wider py-4 px-3 rounded-md transition-colors ${isActive(item.href)
                                        ? 'text-[#283524] bg-[#283524]/5'
                                        : 'text-[#283524]/60 hover:text-[#283524] hover:bg-[#283524]/5'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-[#283524] hover:bg-[#283524]/90 text-white uppercase font-bold tracking-widest h-12">
                                        Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
