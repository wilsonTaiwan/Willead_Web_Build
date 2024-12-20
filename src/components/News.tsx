'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const newsItems = [
  {
    title: "Company Milestone Achieved",
    date: "March 15, 2024",
    image: "/images/news-1.jpg",
    description: "We're proud to announce reaching a significant milestone in our journey."
  },
  {
    title: "New Service Launch",
    date: "March 10, 2024",
    image: "/images/news-2.jpg",
    description: "Introducing our latest service offering to help businesses grow."
  },
  {
    title: "Industry Recognition",
    date: "March 5, 2024",
    image: "/images/news-3.jpg",
    description: "Our team has been recognized for excellence in digital innovation."
  }
]

export default function News() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest news, achievements, and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {/* 占位图标或文字 */}
                  <span className="text-4xl">📷</span>
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{item.date}</time>
                <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 text-blue-500 hover:text-blue-600 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
} 