'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, Users, Target, Zap, Stethoscope, MapPin, Star } from 'lucide-react'
import { pageVariants } from '@/lib/animations'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'

export default function AboutPage() {
    const values = [
        {
            icon: Heart,
            title: 'Foundation of Calm',
            description: 'Cleanliness is not just a service, it is a foundation for clarity, confidence, and calm.',
        },
        {
            icon: Users,
            title: 'Thorough & Precise',
            description: 'The water droplet represents purity and precision; being thorough matters.',
        },
        {
            icon: Target,
            title: 'Safety & Wellbeing',
            description: 'Rooted in public health nursing, where cleanliness is linked to safety and wellbeing.',
        },
        {
            icon: Zap,
            title: 'Reliability',
            description: 'Consistent, dependable service that becomes part of your everyday operations.',
        },
    ]

    const serviceAreas = [
        { name: 'Swindon & Oxford', description: 'Core service hubs with daily coverage' },
        { name: 'Abingdon & Wantage', description: 'Reliable mobile teams in surroundings' },
        { name: 'Milton & Didcot', description: 'Professional cleaning for business parks' },
    ]

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
                <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(61,109,77,0.35),rgba(0,0,0,0))]" />
                <div className="container mx-auto px-4 py-18 md:py-22">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">About Pure Work Spaces</h1>
                        <p className="mt-5 text-lg md:text-xl text-foreground/70 text-balance">
                            Founded on a mission to transform workspaces and improve lives through professional cleaning and care.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/services">
                                <Button size="lg" variant="outline" className="border-border/70 bg-background/60">
                                    Explore services
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-shadow">
                                    Get a quote
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Founder Story Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Reveal>
                                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                                <div className="space-y-4 text-foreground/80 leading-relaxed">
                                    <p>
                                        The founder of Pure Work Spaces Ltd comes from a background in Public Health Nursing, with earlier experience in Intensive Care, where cleanliness was never just a task, but something closely linked to safety, wellbeing, and how people feel day to day.
                                    </p>
                                    <p>
                                        Starting this business came from a genuine enjoyment of cleaning, and from recognising that it is often undervalued or rushed. When done properly, it has a real impact, not only physically, but mentally. A clean space helps people feel calmer, think more clearly, and perform at their best.
                                    </p>
                                    <p>
                                        “Pure” is not just a name. It reflects a commitment to doing things properly, with care, attention, and consistency. Being thorough matters, and where possible, going beyond what is expected is simply part of the standard.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                        <Reveal className="bg-secondary/10 rounded-2xl p-10 h-full flex items-center justify-center border border-border/70">
                            <Stethoscope className="w-16 h-16 text-primary" />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-20 bg-secondary/5">
                <div className="container mx-auto px-4">
                    <Reveal className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            These core values guide every decision we make and every service we provide.
                        </p>
                    </Reveal>

                    <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <StaggerItem key={index}>
                                    <Card className="p-6 bg-card border-border/70 h-full hover:shadow-lg transition-shadow">
                                        <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                                        <p className="text-foreground/70 text-sm">{value.description}</p>
                                    </Card>
                                </StaggerItem>
                            )
                        })}
                    </Stagger>
                </div>
            </section>

            {/* Service Areas Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Reveal className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Service Areas</h2>
                        <p className="text-lg text-foreground/70">
                            We serve businesses and residents across our primary service regions.
                        </p>
                    </Reveal>

                    <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceAreas.map((area, index) => (
                            <StaggerItem key={index}>
                                <Card className="p-6 bg-card border-border/70 text-center hover:shadow-lg transition-shadow">
                                    <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{area.name}</h3>
                                    <p className="text-foreground/70 text-sm">{area.description}</p>
                                </Card>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-secondary/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Reveal className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Trusted by Businesses</h2>
                        <p className="text-lg text-foreground/70">
                            See what our clients have to say about working with us.
                        </p>
                    </Reveal>

                    <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'Robert Chen',
                                company: 'Tech Innovations Ltd',
                                text: 'Working with Pure Work Spaces has been transformative for our office environment. Our staff retention has improved, and everyone appreciates the pristine working conditions.',
                            },
                            {
                                name: 'Victoria Banks',
                                company: 'Oxford Property Management',
                                text: 'Their attention to detail and reliability are exceptional. They consistently exceed our expectations, and our tenants notice the difference immediately.',
                            },
                            {
                                name: 'David Moore',
                                company: 'Grand Hotel Oxford',
                                text: 'The hospitality industry demands perfection, and Pure Work Spaces delivers. Our guests consistently compliment the cleanliness of our rooms and facilities.',
                            },
                        ].map((testimonial, index) => (
                            <StaggerItem key={index}>
                                <Card className="p-8 bg-card border-border/70 hover:shadow-lg transition-shadow">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-foreground/80 mb-6 italic text-balance">&quot;{testimonial.text}&quot;</p>
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
                        <h2 className="text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                            Join the businesses that trust Pure Work Spaces to keep their environments clean, healthy, and productive.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
                                Get in Touch Today
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </motion.div>
    )
}


