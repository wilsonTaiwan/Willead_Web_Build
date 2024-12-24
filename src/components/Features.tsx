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
    <section 
      className="py-20 bg-white" 
      aria-labelledby="features-heading"
      itemScope 
      itemType="http://schema.org/Service"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="features-heading" 
            className="text-3xl md:text-4xl font-bold mb-4"
            itemProp="name"
          >
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" itemProp="description">
            We offer a comprehensive range of digital services to help your business thrive in the modern world.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <article
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              itemScope
              itemType="http://schema.org/Service"
            >
              <div className="text-blue-500 mb-4">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2" itemProp="name">
                {feature.title}
              </h3>
              <p className="text-gray-600" itemProp="description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 