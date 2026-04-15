'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    // Set the top scroll behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#f4efe6] text-[#283524] shadow-xl border border-[#283524]/10 hover:bg-[#283524] hover:text-[#f4efe6] transition-all duration-300"
                    aria-label="Scroll up"
                >
                    <ArrowUp className="h-6 w-6" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
