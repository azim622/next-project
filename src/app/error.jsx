'use client';

import React from 'react';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-2">Something went wrong!</h1>
      <p className="text-gray-700 mb-4">{error?.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
