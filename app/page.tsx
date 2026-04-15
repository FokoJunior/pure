'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Heart,
  Target,
  Users,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'

export default function HomePage() {
  const values = [
    {
      title: 'Responsibility',
      description: 'We take ownership of every space we serve, completing tasks thoroughly and proactively so clients never have to worry.',
      icon: ShieldCheck,
    },
    {
      title: 'Reliability',
      description: 'We deliver consistent, calm, and precise service every time. No surprises, no shortcuts.',
      icon: Zap,
    },
    {
      title: 'Care',
      description: 'We bring thoughtful attention to both the people and the spaces we work in. Every environment is treated with respect.',
      icon: Heart,
    },
    {
      title: 'Calm Competence',
      description: 'Our expertise speaks for itself. No hype, no rush, just confident and professional execution.',
      icon: Target,
    },
    {
      title: 'Simplicity',
      description: 'We hold ourselves to a high standard while remaining approachable, relatable, and easy to work with.',
      icon: Users,
    },
  ]

  const approachPillars = [
    { title: 'Caring & Nurturing', description: 'Thoughtful attention to people and spaces; goes above and beyond.' },
    { title: 'Trustworthy & Reliable', description: 'Clients feel safe leaving spaces in our hands.' },
    { title: 'Calm & Competent', description: 'Quiet confidence; professional expertise without hype.' },
    { title: 'Approachable & Human', description: 'Real people, not faceless service.' },
    { title: 'Premium & Simple', description: 'Clean, uncluttered, high-standard approach.' },
  ]

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#283524] text-[#f4efe6]">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/IMG_20260331_180412.jpg')] bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4 py-24 flex flex-col items-center text-center">
          <Reveal className="mb-12">
            <Image
              src="/PWS-Logo/PWS-Webp-Files/PWS-Primary-logo-webp-files/PWS Primary Logo - White.webp"
              alt="Pure Work Spaces Logo"
              width={180}
              height={180}
              className="mx-auto"
              priority
            />
          </Reveal>
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6">
              Pure Spaces, <br className="hidden md:block" /> Peace of Mind
            </h1>
            <p className="text-xl md:text-2xl font-sans opacity-90 max-w-2xl mx-auto mb-4">
              Professional Workspaces. Pure Reliability.
            </p>
            <p className="text-lg opacity-75 max-w-3xl mx-auto mb-10">
              Specialist, contract-led commercial cleaning for businesses in Oxfordshire and Swindon who value consistency, compliance, and excellence.
            </p>
            <Button size="lg" className="bg-[#f4efe6] text-[#283524] hover:bg-[#f4efe6]/90 text-lg px-10 h-14" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Section 2: Brand Story */}
      <section id="story" className="py-24 bg-[#f4efe6] text-[#283524]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#283524]/10 shadow-xl">
                <Image
                  src="/images/1a.jpg"
                  alt="Professional cleaning environment"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Brand Story</h2>
              <div className="space-y-6 text-lg leading-relaxed opacity-90">
                <p>
                  Pure Workspaces was built on responsibility, resilience, and care. It was not created from a pursuit of hustle or rapid growth, but from a simple commitment to doing what needs to be done, properly and consistently.
                </p>
                <p>
                  What began as a practical step forward became a clear realisation: when done well, cleaning brings more than just order. It creates calm, clarity, and a better environment for people to work in.
                </p>
                <p>
                  Pure Workspaces exists to take the pressure of cleaning off its clients. It is a trust-led, quietly premium service for workplaces that value reliability, care, and high standards. The result is simple: spaces that feel sorted, and clients who can get on with what matters.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section id="values" className="py-24 bg-[#283524] text-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Core Values</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-6 rounded-full bg-white/10 p-5 group-hover:bg-white/20 transition-colors">
                    <v.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <div className="w-12 h-1 bg-white/20 mb-4 mx-auto" />
                  <p className="text-sm opacity-80 leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Section 4: Who We Serve */}
      <section id="who-we-serve" className="py-24 bg-[#d3decf] text-[#283524]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Who We Serve</h2>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                Pure Workspaces serves commercial and industrial businesses, including offices, warehouses, factories, and business parks.
              </p>
              <p className="text-lg opacity-85 mb-8">
                Our clients are typically facility managers, office managers, and business owners who are responsible for maintaining clean, professional environments. They value reliability, high standards, and peace of mind, and want a trusted partner who takes full responsibility without needing to be managed.
              </p>
              <Button size="lg" className="bg-[#283524] text-white hover:bg-[#283524]/90" asChild>
                <Link href="#contact">Request a consultation</Link>
              </Button>
            </Reveal>
            <Reveal>
              <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/2b.jpg"
                  alt="Commercial interior"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach */}
      <section id="approach" className="py-24 bg-[#f4efe6] text-[#283524]">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Approach</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {approachPillars.map((p, i) => (
              <StaggerItem key={i}>
                <Card className="p-8 h-full bg-white/50 border-[#283524]/10 hover:shadow-lg transition-all text-center">
                  <h3 className="text-lg font-bold mb-4">{p.title}</h3>
                  <p className="text-sm opacity-80">{p.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Section 6: Get In Touch */}
      <section id="contact" className="py-24 bg-[#283524] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center mb-16">
              <Image
                src="/PWS-Logo/PWS-Webp-Files/PWS-Primary-logo-webp-files/PWS Primary Logo - White.webp"
                alt="Pure Work Spaces"
                width={120}
                height={120}
                className="mx-auto mb-8 opacity-90"
              />
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Get In Touch</h2>
            </Reveal>

            <Reveal>
              <Card className="p-8 md:p-12 bg-white text-[#283524]">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                      <input type="text" placeholder="Your name" className="w-full p-4 border border-[#283524]/20 rounded-none focus:outline-none focus:ring-2 focus:ring-[#283524]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Company</label>
                      <input type="text" placeholder="Company name" className="w-full p-4 border border-[#283524]/20 rounded-none focus:outline-none focus:ring-2 focus:ring-[#283524]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                    <input type="email" placeholder="email@address.com" className="w-full p-4 border border-[#283524]/20 rounded-none focus:outline-none focus:ring-2 focus:ring-[#283524]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                    <textarea rows={5} placeholder="Tell us about your cleaning needs..." className="w-full p-4 border border-[#283524]/20 rounded-none focus:outline-none focus:ring-2 focus:ring-[#283524]"></textarea>
                  </div>
                  <Button size="lg" className="w-full bg-[#283524] text-white hover:bg-[#283524]/90 text-lg h-14 rounded-none">
                    Send Message
                  </Button>
                </form>
              </Card>
            </Reveal>

            <Reveal className="mt-16 text-center opacity-80">
              <p className="mb-2">www.pureworkspaces.uk</p>
              <p>jaigar@pureworkspaces.uk</p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
