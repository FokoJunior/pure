'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, ArrowUpRight, Building2, HeartPulse, Sparkles, Timer } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'

type CaseStudy = {
  title: string
  location: string
  cadence: string
  summary: string
  outcomes: { label: string; value: string }[]
  tags: string[]
  icon: React.ComponentType<{ className?: string }>
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Office Refresh for a Growing Team',
    location: 'Swindon',
    cadence: 'Weekly',
    summary:
      'A consistent standard across desks, kitchens, and meeting rooms — with visible results each visit.',
    outcomes: [
      { label: 'Consistency', value: 'Checklists' },
      { label: 'Focus areas', value: 'High-touch' },
      { label: 'QA', value: 'Monthly' },
    ],
    tags: ['Commercial', 'Shared areas', 'Quality checks'],
    icon: Building2,
  },
  {
    title: 'Clinic Hygiene Routine Upgrade',
    location: 'Oxford',
    cadence: 'Daily',
    summary:
      'A hygienic routine designed around infection control expectations, without disrupting patient flow.',
    outcomes: [
      { label: 'Touchpoints', value: 'Sanitized' },
      { label: 'Timing', value: 'Off-peak' },
      { label: 'Reporting', value: 'Clear' },
    ],
    tags: ['Healthcare', 'Hygiene', 'Reliability'],
    icon: HeartPulse,
  },
  {
    title: 'After-build Deep Clean & Handover',
    location: 'Oxfordshire',
    cadence: 'One-off',
    summary:
      'Fine dust removal, polish and finish, and a handover-ready space for immediate occupancy.',
    outcomes: [
      { label: 'Dust', value: 'Removed' },
      { label: 'Finish', value: 'Detail' },
      { label: 'Speed', value: 'Fast' },
    ],
    tags: ['After-build', 'Detail finish', 'Handover'],
    icon: Sparkles,
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(61,109,77,0.35),rgba(0,0,0,0))]" />
        <div className="container mx-auto px-4 py-18 md:py-22">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-foreground/70">
              <Timer className="h-4 w-4 text-primary" />
              Real examples from real spaces
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Case Studies
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/70 text-balance">
              A quick look at the work we do, how we do it, and the outcomes that matter to our clients.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-shadow">
                  Request a quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-border/70 bg-background/60">
                  Explore services
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Snapshots of impact</h2>
              <p className="mt-3 text-foreground/70 max-w-2xl leading-relaxed">
                Each project has different constraints. We keep the approach simple: clear plan, consistent delivery, and measurable outcomes.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs) => (
              <StaggerItem key={cs.title}>
                <Card className="h-full p-8 bg-card border-border/70 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-xs text-foreground/60">
                        {cs.location} • {cs.cadence}
                      </div>
                      <div className="mt-2 text-xl font-semibold text-foreground">{cs.title}</div>
                    </div>
                    <div className="rounded-2xl bg-primary/10 p-3">
                      <cs.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{cs.summary}</p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {cs.outcomes.map((o) => (
                      <div key={o.label} className="rounded-xl border border-border/70 bg-background/60 p-3 text-center">
                        <div className="text-sm font-semibold">{o.value}</div>
                        <div className="text-[11px] text-foreground/60 mt-1">{o.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full border border-border/70 bg-background/70 px-3 py-1 text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                      Get a similar plan <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto max-w-4xl">
            <Card className="p-10 md:p-12 bg-card border-border/70 overflow-hidden relative">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-2xl" />
              <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-secondary/20 blur-2xl" />

              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h3 className="text-3xl font-bold tracking-tight">Want results like these?</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">
                    Tell us about your space, your schedule, and what “clean” needs to look like. We’ll propose a plan and a quote.
                  </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Start here <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

