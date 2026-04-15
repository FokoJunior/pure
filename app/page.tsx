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
  MapPin,
  Mail,
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
        <div className="absolute inset-0 opacity-20 bg-[url('/PWS-Stock-images-JPG/1.jpg')] bg-cover bg-center" />
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
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/PWS-Stock-images-JPG/2.jpg"
                  alt="Professional cleaning environment"
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#283524]/10 transition-opacity duration-700 group-hover:opacity-0" />
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
              <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/PWS-Stock-images-JPG/3.jpg"
                  alt="Commercial interior"
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#283524]/10 transition-opacity duration-700 group-hover:opacity-0" />
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

      {/* Section 6: Request Assessment */}
      <section id="contact" className="relative py-32 bg-[#283524] text-[#f4efe6] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/PWS-Stock-images-JPG/9.jpg')] bg-cover bg-center bg-fixed mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#283524] via-[#283524]/90 to-[#283524]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column */}
            <div className="space-y-8 pr-0 lg:pr-8">
              <div>
                <Reveal>
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 opacity-70">Partner With Us</div>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-4xl lg:text-[44px] font-heading font-bold mb-6 text-white leading-[1.15] tracking-tight">
                    Request Your Professional Site Assessment
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-[15px] text-white/70 leading-[1.8] font-sans max-w-md">
                    Contact our management team to discuss your specific requirements. We focus on long-term contracts for businesses that require a higher standard of maintenance.
                  </p>
                </Reveal>
              </div>

              <div className="space-y-8 pt-4">
                <Reveal delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/[0.05] flex items-center justify-center shrink-0">
                      <MapPin className="w-[18px] h-[18px] text-white/90" />
                    </div>
                    <div className="pt-0.5">
                      <div className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-1">Service Areas</div>
                      <div className="text-[14px] font-semibold text-white tracking-wide">Oxfordshire & Swindon</div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/[0.05] flex items-center justify-center shrink-0">
                      <Mail className="w-[18px] h-[18px] text-white/90" />
                    </div>
                    <div className="pt-0.5">
                      <div className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-1">Email Enquiries</div>
                      <div className="text-[14px] font-semibold text-white tracking-wide">hello@pureworkspaces.uk</div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: White Card Form */}
            <Reveal delay={0.3} y={0}>
              <div className="bg-white p-8 sm:p-12 shadow-2xl text-[#0a1118]">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#0a1118]/60">Contact Name</label>
                      <input type="text" placeholder="Your name" className="w-full pb-3 text-[14px] bg-transparent border-0 border-b border-[#0a1118]/10 rounded-none text-[#0a1118] placeholder-[#0a1118]/40 focus:outline-none focus:border-[#0a1118]/40 focus:ring-0 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#0a1118]/60">Company Name</label>
                      <input type="text" placeholder="Business name" className="w-full pb-3 text-[14px] bg-transparent border-0 border-b border-[#0a1118]/10 rounded-none text-[#0a1118] placeholder-[#0a1118]/40 focus:outline-none focus:border-[#0a1118]/40 focus:ring-0 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0a1118]/60">Work Email</label>
                    <input type="email" placeholder="email@company.com" className="w-full pb-3 text-[14px] bg-transparent border-0 border-b border-[#0a1118]/10 rounded-none text-[#0a1118] placeholder-[#0a1118]/40 focus:outline-none focus:border-[#0a1118]/40 focus:ring-0 transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0a1118]/60">Requirement Brief</label>
                    <textarea rows={3} placeholder="e.g. Daily office clean in Abingdon..." className="w-full pb-3 pt-2 text-[14px] bg-transparent border-0 border-b border-[#0a1118]/10 rounded-none text-[#0a1118] placeholder-[#0a1118]/40 focus:outline-none focus:border-[#0a1118]/40 focus:ring-0 transition-colors resize-none"></textarea>
                  </div>

                  <div className="pt-6">
                    <Button size="lg" className="w-full bg-[#0e141a] text-white hover:bg-[#1a232b] text-[13px] h-[52px] rounded-none font-bold uppercase tracking-[0.2em] transition-all">
                      Request Site Visit
                    </Button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
