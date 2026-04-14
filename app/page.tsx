'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Sparkles,
  Heart,
  Users,
  ArrowRight,
  Star,
  Building2,
  Hammer,
  KeyRound,
  Hotel,
  PartyPopper,
  ShieldCheck,
  Timer,
  Leaf,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { CountUp } from '@/components/motion/count-up'
import GallerySection from '@/components/gallery/gallery-section'

export default function Home() {
  const services = [
    {
      title: 'Commercial & Office',
      description: 'Reliable, high-quality cleaning tailored to your environment, supporting productivity and hygiene.',
      icon: Building2,
    },
    {
      title: 'After Build Cleans',
      description: 'Thorough cleaning to transform construction sites into clean, safe, and ready-to-use spaces.',
      icon: Hammer,
    },
    {
      title: 'End of Tenancy',
      description: 'Comprehensive cleaning to ensure properties are left in excellent condition for smooth transitions.',
      icon: KeyRound,
    },
    {
      title: 'Serviced Accommodation',
      description: 'High-standard cleaning and restocking to ensure properties are guest-ready and maintain great reviews.',
      icon: Hotel,
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellbeing',
      description: 'Cleanliness is not just a service, it is a foundation for clarity, confidence, and calm.',
    },
    {
      icon: Users,
      title: 'Trust & Precision',
      description: 'Our identity reflects purity and precision, with movement, consistency, and care.',
    },
    {
      icon: Sparkles,
      title: 'Maintain Standards',
      description: 'We create environments where people can focus, operate effectively, and feel at ease.',
    },
  ]

  const testimonials = [
    {
      name: 'Business Owner',
      company: 'Local Partner',
      text: 'This place is a much more pleasant place to be since you have started.',
      rating: 5,
    },
    {
      name: 'Managing Director',
      company: 'Corporate Client',
      text: 'Wow, what a difference. The fact that it has been 2 weeks and the place still looks great is a testament to your cleaning.',
      rating: 5,
    },
    {
      name: 'Scientist',
      company: 'Lab Facility',
      text: 'This place is so much cleaner now. When I walk into the room I notice the difference.',
      rating: 5,
    },
  ]

  const trust = [
    { icon: ShieldCheck, title: 'Trusted & Vetted', description: 'Consistent teams, clear checklists, quality checks.' },
    { icon: Timer, title: 'Reliable Scheduling', description: 'Early mornings, evenings, and weekends when needed.' },
    { icon: Leaf, title: 'Safe Products', description: 'Professional-grade products with eco options on request.' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(61,109,77,0.35),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[28px_28px]" />

        <div className="container mx-auto px-4 relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-foreground/70">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Pure Spaces. Peace of Mind.
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-balance">
                  The spaces we work and live in shape how we feel.
                </h1>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="mt-5 text-lg md:text-xl text-foreground/70 text-balance max-w-2xl">
                  Professional cleaning services built on the foundation of clarity, confidence, and calm. Serving Swindon, Oxford, and surrounding areas.
                </p>
              </Reveal>

              <Reveal delay={0.4} className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-shadow">
                    Request Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-border/70 bg-background/60">
                    Explore Services
                  </Button>
                </Link>
              </Reveal>

              <Reveal delay={0.5} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                {trust.map((t) => (
                  <div key={t.title} className="rounded-xl border border-border/70 bg-background/70 p-4">
                    <t.icon className="h-5 w-5 text-primary" />
                    <div className="mt-2 text-sm font-semibold">{t.title}</div>
                    <div className="mt-1 text-xs text-foreground/60 leading-relaxed">{t.description}</div>
                  </div>
                ))}
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal className="relative">
                <div className="absolute -inset-6 rounded-[28px] bg-linear-to-br from-primary/25 to-secondary/20 blur-2xl" />
                <Card className="relative overflow-hidden border-border/70 bg-card/80 p-8 shadow-lg">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-sm text-foreground/60">Typical outcomes</div>
                      <div className="mt-2 text-2xl font-bold tracking-tight">Cleaner, calmer, more productive.</div>
                      <div className="mt-2 text-sm text-foreground/70 leading-relaxed">
                        Clear checklists. Visible results. A team you can rely on.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-primary/10 p-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      { value: 24, suffix: 'h', label: 'Quotes' },
                      { value: 5, suffix: '/5', label: 'Quality' },
                      { value: 7, suffix: 'd', label: 'Flex' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-border/70 bg-background/60 p-4 text-center">
                        <div className="text-xl font-bold">
                          <CountUp end={s.value} duration={900} suffix={s.suffix} />
                        </div>
                        <div className="text-xs text-foreground/60 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pure Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Pure?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine professional expertise with a genuine commitment to creating healthy, welcoming workspaces.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="group h-full">
                    <Card className="p-8 bg-card h-full border-border/70 hover:shadow-lg transition-shadow cursor-default">
                      <div className="bg-primary/10 rounded-xl p-3 w-fit mb-4 group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                    </Card>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your specific needs.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ scale: 1.015 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                    <Card className="p-6 bg-card border-border/70 hover:shadow-md transition-shadow cursor-default h-full flex items-start gap-4">
                      <div className="rounded-2xl bg-primary/10 p-3">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-foreground/70 text-sm">{service.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </Stagger>

          <Reveal className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <h2 className="text-4xl font-bold text-foreground mb-4">See the difference in real spaces.</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Quick snapshots of what we improved, how we worked, and the results clients cared about.
              </p>
              <div className="mt-8">
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="border-border/70">
                    Browse Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>

            <Stagger className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Office Refresh', meta: 'Swindon • Weekly', desc: 'Consistent standard across shared areas and desks.' },
                { title: 'Clinic Hygiene', meta: 'Oxford • Daily', desc: 'High-touch sanitization routines and QA checks.' },
                { title: 'Post-build Deep Clean', meta: 'Oxfordshire • One-off', desc: 'Dust removal, detail finish, handover ready.' },
              ].map((cs) => (
                <StaggerItem key={cs.title}>
                  <Card className="p-6 bg-card border-border/70 hover:shadow-lg transition-shadow h-full">
                    <div className="text-xs text-foreground/60">{cs.meta}</div>
                    <div className="mt-2 font-semibold text-foreground">{cs.title}</div>
                    <div className="mt-2 text-sm text-foreground/70 leading-relaxed">{cs.desc}</div>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <GallerySection />

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real experiences from businesses we&apos;ve transformed.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="p-8 bg-card border-border/70 h-full flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-6 text-balance">{testimonial.text}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.company}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workspace?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get in touch with our team today for a free consultation and quote.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
                Get Started
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}



