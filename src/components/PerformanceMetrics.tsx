'use client'

import { useEffect } from 'react'

export function reportWebVitals({ id, name, label, value }: {
  id: string
  name: string
  label: string
  value: number
}) {
  // 发送到分析服务
  console.log(name, value)
}

export function PerformanceMetrics() {
  useEffect(() => {
    // 监控性能指标
    if (typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // 记录性能指标
          console.log(entry.name, entry.startTime, entry.duration)
        })
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    }
  }, [])

  return null
} 