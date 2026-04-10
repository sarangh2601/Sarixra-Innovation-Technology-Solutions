import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-blue-600">404</h1>
          <h2 className="text-4xl font-bold text-gray-900">Page Not Found</h2>
          <p className="text-lg text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Home
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Explore Our Services
          </Link>
        </div>

        <div className="pt-4">
          <p className="text-sm text-gray-500">Error Code: 404</p>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
