import { MetadataRoute } from 'next'
import { FEATURES } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourcompany.com'

  return FEATURES.map(feature => ({
    url: `${baseUrl}/services/${feature.title.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))
} 