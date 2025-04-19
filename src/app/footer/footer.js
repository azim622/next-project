import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-3">VisaNavigator</h2>
          <p className="text-sm text-gray-400">
            Explore visa options, track applications, and travel smarter with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/allVisa" className="hover:text-white">All Visas</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.9v-7H8v-2.9h2.5v-2.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8h2.8l-.5 2.9h-2.3v7c4.8-.8 8.5-4.9 8.5-9.9z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.89-2.37 8.59 8.59 0 0 1-2.72 1.04A4.27 4.27 0 0 0 11 8.03a12.1 12.1 0 0 1-8.8-4.46 4.27 4.27 0 0 0 1.32 5.7 4.24 4.24 0 0 1-1.94-.54v.05c0 2 1.42 3.67 3.3 4.05a4.28 4.28 0 0 1-1.93.07 4.29 4.29 0 0 0 4 3A8.58 8.58 0 0 1 2 19.54 12.09 12.09 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.36-.01-.53A8.36 8.36 0 0 0 22.46 6z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm4.25 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.75-.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.94 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM3.5 9h3v9h-3V9zm5 0h2.86v1.23h.04c.4-.76 1.37-1.56 2.83-1.56 3.03 0 3.6 1.99 3.6 4.58V18h-3v-4.23c0-1-.02-2.3-1.4-2.3-1.4 0-1.62 1.1-1.62 2.23V18h-3V9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} VisaNavigator. All rights reserved.
      </div>
    </footer>
  );
}
