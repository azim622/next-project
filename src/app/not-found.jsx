import React from 'react'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  </div>
  )
}
