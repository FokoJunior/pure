import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Images } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import GalleryGrid from '@/components/gallery/gallery-grid'
import { getGalleryImages } from '@/lib/gallery.server'

export default async function GalleryPage() {
  const images = await getGalleryImages()

  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(61,109,77,0.35),rgba(0,0,0,0))]" />
        <div className="container mx-auto px-4 py-18 md:py-22">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-foreground/70">
              <Images className="h-4 w-4 text-primary" />
              Our work in pictures
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-balance">Gallery</h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/70 text-balance">
              Browse highlights from recent work. Click any photo to zoom.
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {images.length ? (
            <GalleryGrid images={images} columns={4} />
          ) : (
            <Card className="p-8 border-border/70 bg-card">
              <div className="text-sm text-foreground/70 leading-relaxed">
                Aucune image trouvée dans <code className="px-1 py-0.5 rounded bg-foreground/5">public/images</code>.
                Ajoute tes photos là-bas et recharge cette page.
              </div>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}

