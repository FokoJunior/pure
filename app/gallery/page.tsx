import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Images } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

export default function GalleryPage() {
  return (
    <div className="bg-[#f4efe6] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#283524] text-[#f4efe6] py-24">
        <div className="absolute inset-0 opacity-15 bg-[url('/PWS-Stock-images-JPG/4.jpg')] bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Reveal className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 mb-8 uppercase tracking-widest font-bold">
              <Images className="h-4 w-4" />
              Our work in pictures
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl font-sans opacity-90 max-w-2xl mx-auto mb-10">
              A visual record of our commitment to responsibility, resilience, and care in every workspace we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#f4efe6] text-[#283524] hover:bg-white uppercase font-bold tracking-widest text-xs px-8 h-12" asChild>
                <Link href="/#contact">Request a quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" className="border border-white bg-white text-[#283524] hover:bg-[#f4efe6] uppercase font-bold tracking-widest text-xs px-8 h-12" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-24 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
            {/* Placeholder Card */}
            <Reveal className="w-full text-center">
              <Card className="p-12 border-[#283524]/10 bg-white/60 text-[#283524] rounded-2xl shadow-sm backdrop-blur-xs">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-[#283524]/5 rounded-full text-[#283524]/80">
                    <Images className="h-10 w-10" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">Pictures coming soon</h2>
                </div>
              </Card>
            </Reveal>

            {/* Smartphone Video Mockup */}
            <Reveal delay={0.1} className="w-full max-w-[320px]">
              <div className="relative mx-auto w-full aspect-[9/16] rounded-[40px] border-[8px] border-[#0e141a] bg-[#0e141a] shadow-2xl overflow-hidden ring-1 ring-white/10 group">
                {/* Smartphone Speaker/Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-[#0e141a] rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/25 rounded-full mb-1" />
                </div>
                {/* Video Element */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover rounded-[32px] relative z-10"
                >
                  <source src="/video/Pure Work Spaces Reel.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
