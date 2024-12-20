import React from 'react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "@/components/Navigation"
import "./globals.css"
import Debug from '@/components/Debug'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://yourcompany.com'),
  title: {
    default: "Your Company Name",
    template: "%s | Your Company Name"
  },
  description: "Your company description here",
  keywords: ["digital transformation", "web development", "business solutions"],
  openGraph: {
    title: "Your Company Name",
    description: "Your company description here",
    url: "https://yourcompany.com",
    siteName: "Your Company Name",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Company Name"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <Debug />
      </body>
    </html>
  )
} 