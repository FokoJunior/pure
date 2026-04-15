'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export type GalleryImageItem = {
  src: string
  alt: string
}

type GalleryGridProps = {
  images: GalleryImageItem[]
  className?: string
  columns?: 2 | 3 | 4
  limit?: number
}

export default function GalleryGrid({ images, className, columns = 3, limit }: GalleryGridProps) {
  const items = useMemo(() => (limit ? images.slice(0, limit) : images), [images, limit])
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<GalleryImageItem | null>(null)

  const gridCols =
    columns === 4
      ? 'grid-cols-2 md:grid-cols-4'
      : columns === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'

  return (
    <>
      <div className={cn('grid gap-4', gridCols, className)}>
        {items.map((img) => (
          <motion.button
            key={img.src}
            type="button"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={() => {
              setActive(img)
              setOpen(true)
            }}
            className="group text-left rounded-none border border-[#283524]/10 bg-white overflow-hidden hover:shadow-xl transition-shadow"
          >
            <AspectRatio ratio={4 / 3}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </AspectRatio>
          </motion.button>
        ))}
      </div>

      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v)
          if (!v) setActive(null)
        }}
      >
        <DialogContent className="max-w-4xl p-3 sm:p-4 bg-[#f4efe6] border-none" showCloseButton>
          <DialogTitle className="sr-only">Gallery image</DialogTitle>
          {active && (
            <div className="rounded-none overflow-hidden border border-[#283524]/10 bg-white">
              <AspectRatio ratio={16 / 10}>
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain bg-white"
                  priority
                />
              </AspectRatio>
              <div className="px-6 py-4 text-sm font-sans font-medium text-[#283524]">{active.alt}</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

