import { MetadataRoute } from 'next'

// 这里可以从你的CMS或数据库获取实际的新闻文章
const getNewsArticles = async () => {
  // 示例数据
  return [
    {
      slug: 'company-milestone',
      lastModified: new Date(),
    },
    {
      slug: 'new-service-launch',
      lastModified: new Date(),
    },
    {
      slug: 'industry-recognition',
      lastModified: new Date(),
    },
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourcompany.com'
  const articles = await getNewsArticles()

  return articles.map(article => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: 'weekly',
    priority: 0.7
  }))
} 