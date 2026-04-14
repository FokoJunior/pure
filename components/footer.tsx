'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'

export default function Footer() {
  return (
    <footer className="bg-foreground/3 border-t border-border/70">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <Reveal>
            <div>
              <img src="/PWS-Logo/PWS-PNG-files/PWS-Primary-logo/PWS Primary Logo - dark Green@0.5x.png" alt="Pure Work Spaces" className="h-10 w-auto mb-4" />
              <p className="text-sm text-foreground/70 mb-5 leading-relaxed">
                Transforming workspaces through professional cleaning services that prioritize health, wellbeing, and consistency.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.05}>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Services */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/commercial" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/after-build" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    After-Build Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/end-of-tenancy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    End-of-Tenancy
                  </Link>
                </li>
                <li>
                  <Link href="/services/event" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Event Cleaning
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Contact & Newsletter */}
          <Reveal delay={0.15}>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 mb-5">
                <a
                  href="tel:07300864523"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  07300864523
                </a>
                <a
                  href="mailto:hello@pureworkspaces.uk"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  hello@pureworkspaces.uk
                </a>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <MapPin size={16} />
                  Prama House, 267 Banbury Road, Oxford, OX2 7HT
                </div>
              </div>

              <Link href="/contact">
                <Button variant="outline" className="w-full justify-between">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-foreground/60">
              © 2026 Pure Work Spaces Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Terms of Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
