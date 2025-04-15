import React from 'react'

export default function Banner() {
  return (
    <div>
        <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20 px-4 text-center rounded-xl shadow-lg my-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Visa Navigator</h1>
      <p className="text-lg md:text-xl mb-6">
        Explore global visa requirements, apply easily, and track your application – all in one place.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </section>
    </div>
  )
}
