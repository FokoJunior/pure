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
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 uppercase font-bold tracking-widest text-xs px-8 h-12" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-24 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-2xl mx-auto text-center">
            <Card className="p-16 border-[#283524]/10 bg-white/60 text-[#283524] rounded-2xl shadow-sm backdrop-blur-xs">
              <div className="flex flex-col items-center gap-6">
                <div className="p-5 bg-[#283524]/5 rounded-full text-[#283524]/80">
                  <Images className="h-12 w-12" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">Picture under construction</h2>
                  <p className="text-lg opacity-85 max-w-md mx-auto leading-relaxed">
                    We are currently preparing a selection of photos illustrating our achievements and our professional cleaning interventions.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
