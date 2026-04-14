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
import { pageVariants } from '@/lib/animations'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'

export default function ServicesPage() {
    const services = [
        {
            slug: 'commercial',
            title: 'Commercial Cleaning',
            description: 'Whether your space is an office, laboratory, factory, healthcare setting, educational facility, or tech hub, we provide reliable, high-quality cleaning tailored to your environment.',
            icon: Building2,
            details: 'Our focus is on consistency, hygiene, and creating a professional space that supports productivity and leaves a lasting impression.',
            benefits: ['Office & Lab Cleaning', 'Healthcare & Education', 'Factory & Tech Hubs', 'Consistent Hygiene'],
        },
        {
            slug: 'after-build',
            title: 'After Build Cleans',
            description: 'We deliver thorough after-build cleaning to transform construction sites into clean, safe, and ready-to-use spaces.',
            icon: Hammer,
            details: 'From dust removal to detailed finishing touches, we ensure every surface is properly prepared for handover or occupancy.',
            benefits: ['Dust Removal', 'Detailed Finishing', 'Site Preparation', 'Handover Ready'],
        },
        {
            slug: 'end-of-tenancy',
            title: 'End of Tenancy Cleans',
            description: 'Our end of tenancy cleaning service helps ensure properties are left in excellent condition.',
            icon: KeyRound,
            details: 'We carry out a comprehensive clean of all areas, supporting smooth transitions between tenants and helping meet landlord or letting agent expectations.',
            benefits: ['Comprehensive Clean', 'Landlord Approved', 'Smooth Transitions', 'All Areas Covered'],
        },
        {
            slug: 'serviced-accommodation',
            title: 'Serviced Accommodation',
            description: 'We provide reliable, high-standard cleaning for serviced accommodation, ensuring every property is guest-ready at all times.',
            icon: Hotel,
            details: 'From changeovers to restocking essentials, our team focuses on detail, presentation, and consistency to support excellent guest experiences.',
            benefits: ['Guest-Ready Always', 'Restocking Essentials', 'Detailed Presentation', 'Consistency'],
        },
        {
            slug: 'event',
            title: 'Event Cleaning',
            description: 'We provide efficient and responsive cleaning services for events of all sizes, both during and after the occasion.',
            icon: PartyPopper,
            details: 'Our team ensures spaces remain clean, presentable, and ready for use, helping your event run smoothly from start to finish.',
            benefits: ['All Event Sizes', 'During & After event', 'Efficient Service', 'Seamless Execution'],
        },
        {
            slug: 'hotel-holiday',
            title: 'Hotel / Holiday Lets',
            description: 'We support hotels and holiday lets with consistent, high-quality cleaning that meets guest expectations.',
            icon: Building,
            details: 'From room preparation to communal areas, we focus on presentation, hygiene, and attention to detail to help maintain strong reviews.',
            benefits: ['Room Preparation', 'Communal Areas', 'Hygiene Focus', 'Review Support'],
        },
        {
            slug: 'domestic',
            title: 'Domestic Clients',
            description: 'We offer dependable and discreet cleaning services for homes, designed to maintain a clean, comfortable living environment.',
            icon: House,
            details: 'With attention to detail and flexible scheduling, we help you enjoy your space without the stress of upkeep.',
            benefits: ['Dependable & Discreet', 'Flexible Scheduling', 'Comfortable Living', 'No Stress Upkeep'],
        },
    ]

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
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
        </motion.div>
    )
}
