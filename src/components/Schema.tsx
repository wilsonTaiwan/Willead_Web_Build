import { COMPANY_INFO } from '@/constants'

export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": process.env.NEXT_PUBLIC_BASE_URL,
    "logo": `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.contact.phone,
      "contactType": "customer service",
      "email": COMPANY_INFO.contact.email,
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://www.facebook.com/yourcompany",
      "https://twitter.com/yourcompany",
      "https://www.linkedin.com/company/yourcompany"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 