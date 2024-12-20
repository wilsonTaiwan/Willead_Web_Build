'use client'

import React from 'react'
import { COMPANY_INFO } from '@/constants'

export default function About() {
  return (
    <section className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold">
              Building Digital Excellence Since {COMPANY_INFO.founded}
            </h2>
            <p className="text-gray-600">
              We are a team of passionate developers, designers, and digital strategists dedicated to transforming businesses through technology. With over a decade of experience, we've helped countless companies achieve their digital goals.
            </p>
            <div className="grid grid-cols-2 gap-6" role="list">
              {Object.entries(COMPANY_INFO.stats).map(([key, value]) => (
                <div key={key} role="listitem">
                  <div className="text-3xl font-bold text-blue-500">{value}</div>
                  <div className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="relative h-[400px] lg:h-[500px] bg-gray-100 rounded-xl overflow-hidden"
            role="img"
            aria-label="Company overview image"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 