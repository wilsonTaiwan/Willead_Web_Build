'use client'

import React, { useState, useEffect } from 'react'

export default function Debug() {
  const [showDebug, setShowDebug] = useState(false)
  const [sitemapData, setSitemapData] = useState<any>(null)

  useEffect(() => {
    // 按 Ctrl+Shift+D 显示调试面板
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setShowDebug(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    if (showDebug) {
      // 获取站点地图数据
      Promise.all([
        fetch('/sitemap.xml').then(res => res.text()),
        fetch('/news/sitemap.xml').then(res => res.text()),
        fetch('/services/sitemap.xml').then(res => res.text())
      ]).then(([main, news, services]) => {
        setSitemapData({ main, news, services })
      })
    }
  }, [showDebug])

  if (!showDebug) return null

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-white border shadow-lg max-w-2xl max-h-[80vh] overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Debug Panel</h2>
        <button 
          onClick={() => setShowDebug(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Main Sitemap</h3>
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
            {sitemapData?.main}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold mb-2">News Sitemap</h3>
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
            {sitemapData?.news}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Services Sitemap</h3>
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
            {sitemapData?.services}
          </pre>
        </div>
      </div>
    </div>
  )
} 