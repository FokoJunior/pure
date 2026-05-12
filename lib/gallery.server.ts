import path from 'path'
import { promises as fs } from 'fs'

export type GalleryImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

const SUPPORTED_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg'])

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const dir = path.join(process.cwd(), 'public', 'PWS-Stock-images-JPG')

  let entries: string[] = []
  try {
    entries = await fs.readdir(dir)
  } catch {
    return []
  }

  const files = entries
    .filter((name) => {
      const extMatch = SUPPORTED_EXT.has(path.extname(name).toLowerCase())
      // Exclude green/water images as requested: 1, 4, 8, 9, 10, 11
      const isExcluded = ['1.jpg', '4.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg'].includes(name)
      return extMatch && !isExcluded
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

  return files.map((name) => {
    const base = name.replace(/\.[^.]+$/, '')
    const alt = base.replace(/[-_]+/g, ' ').trim()
    return {
      src: `/PWS-Stock-images-JPG/${name}`,
      alt: alt.length ? alt : 'Gallery image',
    }
  })
}

