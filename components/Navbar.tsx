"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          AI Toolkit
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/tools" className="text-gray-700 hover:text-blue-600 transition">
            AI Tools
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/tools" className="block text-gray-700 hover:text-blue-600 transition">
            AI Tools
          </Link>
          <Link href="/blog" className="block text-gray-700 hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
          <Link
            href="/signup"
            className="block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  )
}
