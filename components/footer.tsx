'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'

export default function Footer() {
    return (
        <footer className="bg-[#283524] border-t border-white/5 text-[#f4efe6]">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <Reveal>
                        <div className="space-y-6">
                            <img
                                src="/PWS-Logo/PWS-Webp-Files/PWS wordmark - off white.webp"
                                alt="Pure Work Spaces"
                                className="h-10 w-auto"
                            />
                            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
                                Cleanliness is not just a service, it is a foundation for clarity, confidence, and calm.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Navigation */}
                    <Reveal delay={0.05}>
                        <div>
                            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#d3decf]">Navigation</h3>
                            <ul className="space-y-3">
                                <li><Link href="/#story" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Our Story</Link></li>
                                <li><Link href="/#values" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Core Values</Link></li>
                                <li><Link href="/#who-we-serve" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Who We Serve</Link></li>
                                <li><Link href="/#approach" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Our Approach</Link></li>
                                <li><Link href="/gallery" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Gallery</Link></li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* Contact Details */}
                    <Reveal delay={0.1}>
                        <div>
                            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#d3decf]">Connect</h3>
                            <div className="space-y-4">
                                <a
                                    href="tel:07300864523"
                                    className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                                >
                                    <Phone size={18} className="text-[#d3decf]" />
                                    07300864523
                                </a>
                                <a
                                    href="mailto:jaigar@pureworkspaces.uk"
                                    className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                                >
                                    <Mail size={18} className="text-[#d3decf]" />
                                    jaigar@pureworkspaces.uk
                                </a>
                                <div className="flex items-start gap-3 text-sm opacity-70">
                                    <MapPin size={18} className="mt-1 shrink-0 text-[#d3decf]" />
                                    <span>
                                        Prama House, 267 Banbury Road,<br />
                                        Oxford, OX2 7HT
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Quote Link */}
                    <Reveal delay={0.15}>
                        <div>
                            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#d3decf]">Get Started</h3>
                            <p className="text-sm opacity-70 mb-6">Ready to transform your workspace?</p>
                            <Link href="/#contact">
                                <Button className="bg-[#f4efe6] text-[#283524] hover:bg-white w-full uppercase font-bold tracking-widest text-xs h-12">
                                    Request a Quote
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs opacity-50 font-medium">
                            © 2026 Pure Work Spaces Ltd. Registered in England & Wales.
                        </p>
                        <div className="flex gap-8 text-xs font-medium opacity-50">
                            <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                            <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
