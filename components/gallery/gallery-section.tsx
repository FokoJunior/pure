'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Images } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/motion/reveal'
import GalleryGrid, { type GalleryImageItem } from '@/components/gallery/gallery-grid'

type GallerySectionProps = {
  limit?: number
  title?: string
  description?: string
}

export default function GallerySection({
  limit = 6,
  title = 'Gallery',
  description = 'A glimpse of our work across offices, clinics, hospitality and more.',
}: GallerySectionProps) {
  const [images, setImages] = useState<GalleryImageItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function run() {
      try {
        const res = await fetch('/api/gallery', { cache: 'no-store' })
        const json = (await res.json()) as { images?: GalleryImageItem[] }
        if (!cancelled) setImages(Array.isArray(json.images) ? json.images : [])
      } catch {
        if (!cancelled) setImages([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [])

  const hasImages = images.length > 0
  const shown = useMemo(() => (limit ? images.slice(0, limit) : images), [images, limit])

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-foreground/70">
              <Images className="h-4 w-4 text-primary" />
              Work highlights
            </div>
            <h2 className="mt-6 text-4xl font-bold text-foreground">{title}</h2>
            <p className="mt-3 text-lg text-foreground/70 max-w-2xl leading-relaxed">{description}</p>
          </Reveal>

          <Reveal>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-border/70 bg-background/60">
                View full gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: Math.min(limit, 6) }).map((_, i) => (
              <Card key={i} className="h-55 rounded-2xl border-border/70 bg-card animate-pulse" />
            ))}
          </div>
        ) : hasImages ? (
          <GalleryGrid images={shown} columns={3} />
        ) : (
          <Card className="p-8 border-border/70 bg-card">
            <div className="text-sm text-foreground/70 leading-relaxed">
              Aucune image trouvée dans <code className="px-1 py-0.5 rounded bg-foreground/5">public/images</code>.
              Ajoute tes photos là-bas (ex: <code className="px-1 py-0.5 rounded bg-foreground/5">public/images/office-1.jpg</code>)
              et elles apparaîtront automatiquement ici.
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}

