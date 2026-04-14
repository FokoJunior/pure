'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    ArrowRight,
    CheckCircle2,
    Building2,
    Hammer,
    KeyRound,
    Hotel,
    PartyPopper,
    Building,
    House,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'

export default function ServicesPage() {
    const services = [
        {
            slug: 'commercial',
            title: 'Commercial & Office',
            description: 'Reliable, high-quality cleaning tailored to your environment, focus on consistency and hygiene.',
            icon: Building2,
            details: 'Whether your space is an office, laboratory, factory, or tech hub, we provide cleaning that supports productivity and leaves a lasting impression.',
            benefits: ['Professional environment support', 'Consistency & hygiene focus', 'Tailored cleaning routines', 'High-quality equipment'],
        },
        {
            slug: 'after-build',
            title: 'After Build Cleans',
            description: 'Thorough cleaning to transform construction sites into ready-to-use spaces.',
            icon: Hammer,
            details: 'From dust removal to detailed finishing touches, we ensure every surface is properly prepared for handover or occupancy.',
            benefits: ['Dust & debris removal', 'Detailed finishing touches', 'Site transformation', 'Safe & ready usage'],
        },
        {
            slug: 'end-of-tenancy',
            title: 'End of Tenancy',
            description: 'Comprehensive cleaning ensuring properties meet landlord or agent expectations.',
            icon: KeyRound,
            details: 'We carry out a comprehensive clean of all areas, supporting smooth transitions between tenants.',
            benefits: ['Comprehensive deep clean', 'Smooth transitions', 'Landlord standard ready', 'Full property coverage'],
        },
        {
            slug: 'serviced-accommodation',
            title: 'Serviced Accommodation',
            description: 'Reliable, high-standard cleaning for guest-ready properties.',
            icon: Hotel,
            details: 'From changeovers to restocking essentials, our team focuses on detail, presentation, and consistency to support excellent guest reviews.',
            benefits: ['Guest-ready changeovers', 'Restocking essentials', 'Detail & presentation focus', 'Review support'],
        },
        {
            slug: 'event',
            title: 'Event Cleaning',
            description: 'Efficient and responsive cleaning for events of all sizes, during and after.',
            icon: PartyPopper,
            details: 'Our team ensures spaces remain clean, presentable, and ready for use, helping your event run smoothly.',
            benefits: ['Responsive event cleanup', 'Presentable environment', 'During & after event support', 'Efficient turnarounds'],
        },
        {
            slug: 'hotel',
            title: 'Hotel / Holiday Lets',
            description: 'Consistent, high-quality cleaning meeting guest expectations and hygiene.',
            icon: Building,
            details: 'From room preparation to communal areas, we focus on presentation and attention to detail to help maintain strong reviews.',
            benefits: ['Room preparation', 'Communal area care', 'Hygiene focus', 'Guest satisfaction support'],
        },
        {
            slug: 'domestic',
            title: 'Domestic Clients',
            description: 'Dependable and discreet cleaning services for comfortable living.',
            icon: House,
            details: 'We maintain a clean, comfortable living environment with attention to detail and flexible scheduling.',
            benefits: ['Discreet home cleaning', 'Flexible scheduling', 'Stress-free upkeep', 'Personalized care'],
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
                <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(61,109,77,0.35),rgba(0,0,0,0))]" />
                <div className="container mx-auto px-4 py-18 md:py-22">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">Our Services</h1>
                        <p className="mt-5 text-lg md:text-xl text-foreground/70 text-balance">
                            Comprehensive cleaning solutions tailored to your specific needs and industry requirements.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-shadow">
                                    Request a quote <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/case-studies">
                                <Button size="lg" variant="outline" className="border-border/70 bg-background/60">
                                    View case studies
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <StaggerItem key={service.slug}>
                                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="h-full">
                                    <Card className="p-8 bg-card border-border/70 h-full flex flex-col hover:shadow-lg transition-shadow group">
                                        <div className="flex items-start justify-between gap-6 mb-5">
                                            <div>
                                                <div className="text-xs text-foreground/60">Service</div>
                                                <h3 className="mt-1 text-2xl font-bold text-foreground">{service.title}</h3>
                                            </div>
                                            <div className="rounded-2xl bg-primary/10 p-3">
                                                <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                        </div>

                                        <p className="text-foreground/70 mb-6 grow leading-relaxed">{service.description}</p>

                                        <div className="space-y-2 mb-6">
                                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                                                    <span className="text-sm text-foreground/70">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href={`/services/${service.slug}`}>
                                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </Card>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <Reveal>
                        <h2 className="text-4xl font-bold mb-4">Can&apos;t Find What You Need?</h2>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                            Contact us for custom cleaning solutions tailored to your specific requirements.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
                                Get in Touch
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}




