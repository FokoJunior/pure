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
import { pageVariants } from '@/lib/animations'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { CountUp } from '@/components/motion/count-up'

const serviceDetails: Record<string, any> = {
  'commercial': {
    title: 'Commercial Cleaning',
    subtitle: 'Professional cleaning for offices, retail spaces, and corporate environments',
    icon: Building2,
    overview: 'A clean, well-maintained office environment is essential for creating a professional atmosphere, boosting employee morale, and maintaining health standards. Our commercial cleaning services ensure your business always puts its best foot forward.',
    keyBenefits: [
      'Improved employee health and productivity',
      'Professional appearance for clients and visitors',
      'Extended lifespan of office furnishings',
      'Reduced spread of germs and illness',
      'Customizable cleaning schedules',
      'Cost-effective solutions',
    ],
    process: [
      'Initial consultation and assessment',
      'Customized cleaning plan development',
      'Regular scheduled cleaning services',
      'Quality assurance checks',
      'Continuous communication and feedback',
    ],
    relatedServices: ['after-build', 'event'],
  },
  'after-build': {
    title: 'After-Build Cleaning',
    subtitle: 'Complete post-construction cleaning to prepare spaces for occupancy',
    icon: Hammer,
    overview: 'Construction projects leave behind significant dust, debris, and residue. Our specialized after-build cleaning service ensures your newly constructed or renovated space is pristine and ready for immediate use.',
    keyBenefits: [
      'Removal of all construction dust and debris',
      'Deep cleaning of all surfaces',
      'Safe removal of protective coverings',
      'Floor protection and restoration',
      'Final quality inspection',
      'Quick turnaround times',
    ],
    process: [
      'Comprehensive site assessment',
      'Dust suppression setup',
      'Rough cleaning phase',
      'Detail and fine cleaning',
      'Final walkthrough inspection',
      'Client sign-off',
    ],
    relatedServices: ['commercial', 'domestic'],
  },
  'end-of-tenancy': {
    title: 'End-of-Tenancy Cleaning',
    subtitle: 'Thorough cleaning for property transitions and tenant handovers',
    icon: KeyRound,
    overview: 'Moving can be stressful, but with our professional end-of-tenancy cleaning service, you can ensure your security deposit is protected and the property is returned in excellent condition.',
    keyBenefits: [
      'Security deposit protection',
      'Comprehensive property cleaning',
      'Carpet and upholstery care',
      'Kitchen appliance cleaning',
      'Landlord-approved standards',
      'Flexible timing around moving',
    ],
    process: [
      'Pre-move consultation',
      'Detailed cleaning checklist',
      'Systematic room-by-room cleaning',
      'Specialty cleaning tasks',
      'Final inspection',
      'Documentation and photos',
    ],
    relatedServices: ['domestic', 'serviced-accommodation'],
  },
  'serviced-accommodation': {
    title: 'Serviced Accommodation',
    subtitle: 'Regular cleaning for holiday rentals and serviced apartments',
    icon: Hotel,
    overview: 'Short-term rental properties require frequent, high-quality cleaning to maintain guest satisfaction and protect your investment. Our serviced accommodation cleaning ensures your property is always guest-ready.',
    keyBenefits: [
      'Turnover cleaning between guests',
      'Flexible cleaning schedules',
      'Consistent quality standards',
      'Attention to detail',
      'Linen and laundry services available',
      'Rapid response team',
    ],
    process: [
      'Guest checkout inspection',
      'Quick turnaround cleaning',
      'Linen change and laundry',
      'Minor maintenance coordination',
      'Pre-arrival preparation',
      'Quality assurance check',
    ],
    relatedServices: ['hotel', 'event'],
  },
  'event': {
    title: 'Event Cleaning',
    subtitle: 'Pre and post-event cleaning for conferences, functions, and gatherings',
    icon: PartyPopper,
    overview: 'Whether you&apos;re hosting a corporate conference, wedding reception, or community gathering, our event cleaning services ensure your venue is perfectly prepared and expertly cleaned up afterward.',
    keyBenefits: [
      'Pre-event venue preparation',
      'Efficient post-event cleanup',
      'Quick turnaround times',
      'Flexible scheduling',
      'Professional event day coordination',
      'Waste management included',
    ],
    process: [
      'Event planning consultation',
      'Pre-event setup cleaning',
      'Event day support',
      'Immediate post-event cleanup',
      'Deep cleaning phase',
      'Final venue inspection',
    ],
    relatedServices: ['commercial', 'hotel'],
  },
  'hotel': {
    title: 'Hotel & Holiday',
    subtitle: 'Specialized cleaning for hospitality establishments and vacation properties',
    icon: Building,
    overview: 'In the hospitality industry, cleanliness is paramount. Our hotel and holiday cleaning service maintains the highest standards to ensure guest satisfaction and loyalty.',
    keyBenefits: [
      'Room turnover cleaning expertise',
      'High-touch surface sanitization',
      'Public area maintenance',
      'Laundry and linen services',
      'Inventory management',
      'Guest satisfaction focus',
    ],
    process: [
      'Room inspection protocol',
      'Systematic cleaning routine',
      'Quality assurance checks',
      'Incident reporting',
      'Staff communication',
      'Continuous improvement feedback',
    ],
    relatedServices: ['serviced-accommodation', 'event'],
  },
  'domestic': {
    title: 'Domestic Cleaning',
    subtitle: 'Professional home cleaning services for busy households',
    icon: House,
    overview: 'Your home should be a clean, comfortable sanctuary. Our domestic cleaning service gives you back your time while ensuring your home is always fresh and welcoming.',
    keyBenefits: [
      'Regular maintenance cleaning',
      'Deep cleaning options',
      'Flexible scheduling',
      'Friendly, vetted professionals',
      'Eco-friendly cleaning options',
      'Personalized service preferences',
    ],
    process: [
      'Initial home assessment',
      'Service plan customization',
      'Regular cleaning schedule',
      'Quality feedback sessions',
      'Seasonal deep cleans',
      'Ongoing relationship building',
    ],
    relatedServices: ['after-build', 'end-of-tenancy'],
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
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
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
              {relatedServicesData.map((related) => (
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
    </motion.div>
  )
}



