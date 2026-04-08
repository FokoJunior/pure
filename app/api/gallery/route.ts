import { NextResponse } from 'next/server'
import { getGalleryImages } from '@/lib/gallery.server'

export async function GET() {
  const images = await getGalleryImages()
  return NextResponse.json({ images })
}

