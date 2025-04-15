import React from 'react'

export default async function AllVisa({ params }) {
  const { id } = params;

  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();

  const userDetails = result.find((visa) => visa.id === parseInt(id));

  if (!userDetails) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl font-semibold">
        User not found
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">User Details</h1>

      <div className="space-y-2 text-gray-700">
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Username:</strong> {userDetails.username}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Phone:</strong> {userDetails.phone}</p>
        <p><strong>Website:</strong> {userDetails.website}</p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Company Info</h2>
          <p><strong>Name:</strong> {userDetails.company.name}</p>
          <p><strong>Catch Phrase:</strong> {userDetails.company.catchPhrase}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Address</h2>
          <p>{userDetails.address.street}, {userDetails.address.city} - {userDetails.address.zipcode}</p>
        </div>
      </div>
    </div>
  )
}
