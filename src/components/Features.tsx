'use client'

import React from 'react'
import { FiMonitor, FiSmartphone, FiShield, FiTrendingUp } from 'react-icons/fi'
import { FEATURES } from '@/constants'

const FeatureIcon = ({ name }: { name: string }) => {
  const icons = {
    monitor: FiMonitor,
    smartphone: FiSmartphone,
    shield: FiShield,
    trending: FiTrendingUp,
  }
  const Icon = icons[name as keyof typeof icons] || FiMonitor
  return <Icon className="w-8 h-8" aria-hidden="true" />
}

export default function Features() {
  return (
    <section className="py-20 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the modern world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              role="article"
            >
              <div className="text-blue-500 mb-4">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 