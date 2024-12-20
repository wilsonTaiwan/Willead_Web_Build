import React from 'react'

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Products & Services
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Product 1</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed description of your first product or service.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Product 2</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed description of your second product or service.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Product 3</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed description of your third product or service.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 