import Link from "next/link";
import React from "react";

export default async function Visa() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">All Visa Holders</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((visa) => (
          <div
            key={visa.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">{visa.name}</h2>
              <p className="text-md text-gray-500 mb-3">@{visa.username}</p>

              <div className="text-gray-700 space-y-1">
                <p><strong>Email:</strong> {visa.email}</p>
                <p><strong>Phone:</strong> {visa.phone}</p>
              </div>

              <div className="mt-4">
                <Link
                  href={`/allVisa/${visa.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
