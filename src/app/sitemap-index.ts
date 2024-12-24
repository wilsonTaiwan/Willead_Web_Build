import { MetadataRoute } from 'next'

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourcompany.com'
  
  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/news/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/sitemap.xml`,
      lastModified: new Date(),
    },
  ]
} 