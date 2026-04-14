'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Building2,
  Hammer,
  KeyRound,
  Hotel,
  PartyPopper,
  Building,
  House,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { CountUp } from '@/components/motion/count-up'

const serviceDetails: Record<string, any> = {
  'commercial': {
    title: 'Commercial & Office',
    subtitle: 'Reliable, high-quality cleaning tailored to your environment',
    icon: Building2,
    overview: 'Whether your space is an office, laboratory, factory, healthcare setting, educational facility, or tech hub, we provide reliable, high-quality cleaning tailored to your environment. Our focus is on consistency, hygiene, and creating a professional space that supports productivity and leaves a lasting impression.',
    keyBenefits: [
      'Tailored to your specific environment',
      'Focus on consistency and hygiene',
      'Professional space support',
      'Reliable high-quality service',
      'Supporting productivity',
      'Maintenance of professional standards',
    ],
    process: [
      'Consultation on environment needs',
      'Tailored cleaning plan',
      'Consistent service delivery',
      'Quality assurance adherence',
      'Professional maintenance focus',
    ],
    relatedServices: ['after-build', 'serviced-accommodation'],
  },
  'after-build': {
    title: 'After Build Cleans',
    subtitle: 'Transforming construction sites into clean, safe, ready-to-use spaces',
    icon: Hammer,
    overview: 'We deliver thorough after-build cleaning to transform construction sites into clean, safe, and ready-to-use spaces. From dust removal to detailed finishing touches, we ensure every surface is properly prepared for handover or occupancy.',
    keyBenefits: [
      'Thorough dust removal',
      'Detailed finishing touches',
      'Ready for immediate occupancy',
      'Safe environment preparation',
      'Support for smooth handovers',
    ],
    process: [
      'Rough debris removal',
      'Deep dust extraction',
      'Detailed surface finish',
      'Quality inspection ready',
      'Final handover prep',
    ],
    relatedServices: ['commercial', 'end-of-tenancy'],
  },
  'end-of-tenancy': {
    title: 'End of Tenancy',
    subtitle: 'Helping ensure properties are left in excellent condition',
    icon: KeyRound,
    overview: 'Our end of tenancy cleaning service helps ensure properties are left in excellent condition. We carry out a comprehensive clean of all areas, supporting smooth transitions between tenants and helping meet landlord or letting agent expectations.',
    keyBenefits: [
      'Excellent property condition',
      'Comprehensive clean of all areas',
      'Smooth tenant transitions',
      'Meeting agent expectations',
      'Hassle-free handover',
    ],
    process: [
      'Pre-tenancy clean assessment',
      'Full property deep clean',
      'Agent standards check',
      'Final cleanliness report',
    ],
    relatedServices: ['serviced-accommodation', 'domestic'],
  },
  'serviced-accommodation': {
    title: 'Serviced Accommodation',
    subtitle: 'Ensuring properties are guest-ready with consistent quality',
    icon: Hotel,
    overview: 'We provide reliable, high-standard cleaning for serviced accommodation, ensuring every property is guest-ready at all times. From changeovers to restocking essentials, our team focuses on detail, presentation, and consistency to support excellent guest experiences and strong reviews.',
    keyBenefits: [
      'Always guest-ready status',
      'Restocking of essentials',
      'Presentation & Detail focus',
      'Consistent quality standards',
      'Strong guest review support',
    ],
    process: [
      'Guest changeover clean',
      'Presentation setup',
      'Essentials restocking',
      'Consistency quality check',
    ],
    relatedServices: ['hotel', 'event'],
  },
  'event': {
    title: 'Event Cleaning',
    subtitle: 'Efficient cleaning for events of all sizes, during and after',
    icon: PartyPopper,
    overview: 'We provide efficient and responsive cleaning services for events of all sizes, both during and after the occasion. Our team ensures spaces remain clean, presentable, and ready for use, helping your event run smoothly from start to finish.',
    keyBenefits: [
      'Responsive cleanup team',
      'Events of all sizes supported',
      'Support during the event',
      'Post-event environment restoration',
      'Professional presentation maintained',
    ],
    process: [
      'Event schedule alignment',
      'Pre-event site prep',
      'Mid-event maintenance',
      'Rapid post-event cleanup',
    ],
    relatedServices: ['commercial', 'serviced-accommodation'],
  },
  'hotel': {
    title: 'Hotel / Holiday Lets',
    subtitle: 'Consistent, high-quality cleaning for guest expectations',
    icon: Building,
    overview: 'We support hotels and holiday lets with consistent, high-quality cleaning that meets guest expectations. From room preparation to communal areas, we focus on presentation, hygiene, and attention to detail to help maintain strong reviews and a welcoming environment.',
    keyBenefits: [
      'Consistent room preparation',
      'Communal area hygiene',
      'Visual presentation focus',
      'Help maintain strong reviews',
      'Welcoming environment care',
    ],
    process: [
      'Room hygiene checklist',
      'Detail-oriented cleaning',
      'Presentation standard check',
    ],
    relatedServices: ['serviced-accommodation', 'domestic'],
  },
  'domestic': {
    title: 'Domestic Clients',
    subtitle: 'Dependable and discreet cleaning services for homes',
    icon: House,
    overview: 'We offer dependable and discreet cleaning services for homes, designed to maintain a clean, comfortable living environment. With attention to detail and flexible scheduling, we help you enjoy your space without the stress of upkeep.',
    keyBenefits: [
      'Dependable & Discreet service',
      'Comfortable living maintenance',
      'Flexible scheduling options',
      'Stress-free home upkeep',
      'Personalized attention',
    ],
    process: [
      'Home needs assessment',
      'Flexible clean schedule',
      'Discreet service delivery',
    ],
    relatedServices: ['end-of-tenancy', 'after-build'],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = serviceDetails[slug]

  if (!service) {
    return (
      <div className="min-h-100 flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-foreground/70 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedServicesData = service.relatedServices.map((slug: string) => ({
    slug,
    ...serviceDetails[slug],
  }))

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(61,109,77,0.35),rgba(0,0,0,0))]" />
        <div className="container mx-auto px-4 py-18 md:py-22">
          <Reveal className="max-w-3xl mx-auto">
            <Link href="/services" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
              <service.icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl text-foreground/70 text-balance">{service.subtitle}</p>
            <div className="mt-8 flex gap-4 flex-col sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-shadow">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-border/70 bg-background/60">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal className="bg-secondary/5 rounded-2xl p-8 mb-12 border border-border/70">
            <p className="text-lg text-foreground/80 text-balance leading-relaxed">
              {service.overview}
            </p>
          </Reveal>

          {/* Key Benefits */}
          <div className="mb-12">
            <Reveal>
              <h2 className="text-3xl font-bold text-foreground mb-8">Key Benefits</h2>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.keyBenefits.map((benefit: string, idx: number) => (
                <StaggerItem key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">{benefit}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Process */}
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Process</h2>
            </Reveal>
            <Stagger className="space-y-4">
              {service.process.map((step: string, idx: number) => (
                <StaggerItem key={idx} className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    <CountUp end={idx + 1} duration={500 + idx * 80} />
                  </div>
                  <p className="text-foreground/80 pt-1 leading-relaxed">{step}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServicesData.length > 0 && (
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <Reveal className="text-3xl font-bold text-foreground mb-12 text-center">
              <h2>Related Services</h2>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedServicesData.map((related: any) => (
                <StaggerItem key={related.slug}>
                  <Card className="p-6 bg-card border-border/70 h-full hover:shadow-lg transition-shadow group">
                    <div className="rounded-2xl bg-primary/10 p-3 w-fit mb-4">
                      <related.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{related.title}</h3>
                    <p className="text-foreground/70 mb-6">{related.subtitle}</p>
                    <Link href={`/services/${related.slug}`}>
                      <Button variant="outline" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold mb-4">Interested in This Service?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help your business with professional {service.title.toLowerCase()}.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
                Request a Quote
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}



