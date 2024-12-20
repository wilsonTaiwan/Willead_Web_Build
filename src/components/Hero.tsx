'use client'

import React from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Transform Your Business
              <span className="text-blue-500"> Digitally</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              We help businesses grow through innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg transition-colors"
                aria-label="Get Started with our services"
              >
                Get Started
              </button>
              <button 
                className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg text-lg transition-colors"
                aria-label="Learn more about our services"
              >
                Learn More
              </button>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  )
} 