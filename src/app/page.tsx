import type { Metadata } from 'next'
import React from 'react'
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import About from "@/components/About"
import News from "@/components/News"
import Contact from "@/components/Contact"

export const metadata: Metadata = {
  title: 'Home | Your Company Name',
  description: 'Transform your business with our innovative digital solutions. We offer web development, mobile apps, cybersecurity, and digital marketing services.',
  keywords: ['digital transformation', 'web development', 'mobile apps', 'business solutions'],
  openGraph: {
    title: 'Your Company Name - Digital Solutions',
    description: 'Transform your business with our innovative digital solutions.',
    images: [
      {
        url: '/images/home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Company Digital Solutions'
      }
    ]
  }
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <News />
      <Contact />
    </main>
  )
} 