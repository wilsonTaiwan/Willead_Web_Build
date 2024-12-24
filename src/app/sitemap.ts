import { MetadataRoute } from 'next'
import { NAVIGATION_ITEMS } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourcompany.com'
  
  // 基本页面
  const routes = NAVIGATION_ITEMS.map(item => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: item.path === '/' ? 1 : 0.8
  }))

  // 博客/新闻文章页面
  const newsPages = [
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9
    }
  ]

  // 服务页面
  const servicePages = [
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/services/mobile-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }
  ]

  return [...routes, ...newsPages, ...servicePages]
} 