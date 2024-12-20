'use client'

import { usePathname } from 'next/navigation'

export default function Debug() {
  const pathname = usePathname()
  
  return process.env.NODE_ENV === 'development' ? (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm">
      <p>Current path: {pathname}</p>
    </div>
  ) : null
} 