import React from 'react'

export default function ChoseVisa() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Why Choose <span className="text-blue-600">VisaNavigator</span>?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Your trusted platform for visa guidance, online applications, and real-time tracking — built for hassle-free international journeys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">🔍 Instant Visa Check</h3>
            <p className="text-gray-600 text-sm">
              Know visa requirements instantly for 100+ countries based on your nationality.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">📝 Online Application</h3>
            <p className="text-gray-600 text-sm">
              Apply for visas directly through our secure portal with step-by-step assistance.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">📦 Real-Time Tracking</h3>
            <p className="text-gray-600 text-sm">
              Track your visa status, get updates, and never miss important notifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
