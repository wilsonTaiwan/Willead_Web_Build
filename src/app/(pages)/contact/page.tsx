import React from 'react'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Get In Touch
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="mr-2">📍</span> 123 Business Street, City, Country
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-2">📞</span> +1 234 567 890
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-2">✉️</span> contact@yourcompany.com
                  </p>
                </div>
              </div>
              <Contact />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 