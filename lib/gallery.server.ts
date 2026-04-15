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
    .filter((name) => SUPPORTED_EXT.has(path.extname(name).toLowerCase()))
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

