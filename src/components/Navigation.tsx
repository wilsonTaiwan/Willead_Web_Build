'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAVIGATION_ITEMS } from '@/constants'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // 处理 Escape 键关闭菜单
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <nav 
      className="fixed top-0 w-full bg-white shadow-md z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            aria-label="Go to homepage"
          >
            <span className="text-2xl text-blue-500" aria-hidden="true">●</span>
            <span className="font-bold text-xl">Your Company</span>
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {/* 汉堡菜单图标 */}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className={`${pathname === item.path ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 transition-colors`}
                aria-current={pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          {/* 移动菜单内容 */}
        </div>
      </div>
    </nav>
  )
} 