'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { pageVariants } from '@/lib/animations'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const services = [
    'Commercial Cleaning',
    'After-Build Cleaning',
    'End-of-Tenancy',
    'Serviced Accommodation',
    'Event Cleaning',
    'Hotel & Holiday',
    'Domestic Cleaning',
    'Other',
  ]

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(61,109,77,0.35),rgba(0,0,0,0))]" />
        <div className="container mx-auto px-4 py-18 md:py-22">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">Get in Touch</h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/70 text-balance">
              Contact us today for a free consultation and quote. We&apos;re ready to help transform your workspace.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <Reveal>
              <div className="space-y-8">
                {/* Phone */}
                <Card className="p-6 bg-card border-border/70 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-lg p-3 w-fit h-fit">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+441234567890" className="text-primary hover:text-primary/80 transition-colors">
                        +44 (0) 1234 567 890
                      </a>
                      <p className="text-sm text-foreground/60 mt-1">Mon-Fri, 9am-5pm</p>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6 bg-card border-border/70 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-lg p-3 w-fit h-fit">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@pureworkspaces.co.uk" className="text-primary hover:text-primary/80 transition-colors">
                        info@pureworkspaces.co.uk
                      </a>
                      <p className="text-sm text-foreground/60 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                {/* Location */}
                <Card className="p-6 bg-card border-border/70 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-lg p-3 w-fit h-fit">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Service Areas</h3>
                      <p className="text-foreground/70 text-sm">
                        Swindon, Oxford, and surrounding areas
                      </p>
                      <p className="text-sm text-foreground/60 mt-1">Available for consultations</p>
                    </div>
                  </div>
                </Card>

                {/* Hours */}
                <Card className="p-6 bg-card border-border/70 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-lg p-3 w-fit h-fit">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-foreground/70 text-sm">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday: 10am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal className="lg:col-span-2">
              <Card className="p-8 bg-card border-border/70">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="bg-primary/10 rounded-full p-4 mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-foreground/70 mb-6">
                      Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Stagger>
                      {/* Name */}
                      <StaggerItem>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="w-full"
                        />
                      </StaggerItem>

                      {/* Email */}
                      <StaggerItem>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="w-full"
                        />
                      </StaggerItem>

                      {/* Phone */}
                      <StaggerItem>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 (0) 1234 567 890"
                          className="w-full"
                        />
                      </StaggerItem>

                      {/* Service */}
                      <StaggerItem>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Service Type *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </StaggerItem>

                      {/* Message */}
                      <StaggerItem>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your cleaning needs..."
                          required
                          rows={6}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </StaggerItem>

                      {/* Submit Button */}
                      <StaggerItem>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Send Message
                        </Button>
                      </StaggerItem>
                    </Stagger>

                    <p className="text-xs text-foreground/60 text-center">
                      * Required fields
                    </p>
                  </form>
                )}
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </Reveal>

          <Reveal>
            <Card className="p-3 md:p-4 bg-card border-border/70">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: 'How quickly can you provide a quote?',
                    answer: 'We typically provide quotes within 24 hours of your inquiry. For urgent requests, we can often accommodate same-day quotes.',
                  },
                  {
                    question: 'Do you offer flexible scheduling?',
                    answer: 'Yes, we offer flexible scheduling to suit your business needs, including early morning, evening, and weekend services when required.',
                  },
                  {
                    question: 'Are your cleaning products eco-friendly?',
                    answer: 'We use professional-grade cleaning products that are effective and safe. We can also provide eco-friendly options upon request.',
                  },
                  {
                    question: 'Can you handle large-scale commercial cleaning?',
                    answer: 'Absolutely! We have experience with everything from small offices to large commercial spaces and complex facilities.',
                  },
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-base text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}
