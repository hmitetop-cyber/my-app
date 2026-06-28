"use client"

import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [message, setMessage] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("Contact functionality is coming soon.")
  }

  const faqs = [
    {
      question: "Is AI Toolkit free to use?",
      answer: "Yes, all our AI-powered writing tools are completely free.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No account is required at the moment. Sign-up features are coming soon.",
    },
    {
      question: "Can I use AI Toolkit on mobile?",
      answer: "Yes, our tools are fully responsive and work on mobile devices.",
    },
    {
      question: "What tools are available?",
      answer: "We currently offer AI Paraphraser, Summarizer, Humanizer, and Grammar Checker.",
    },
  ]

  return (
    <main className="bg-white text-gray-900 min-h-screen py-16 px-6">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Have questions or feedback? Use the form below to reach out to us.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto mb-16">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              className="w-full h-32 px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {message && (
            <p className="text-center text-green-600 font-medium mt-4">{message}</p>
          )}
        </form>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border bg-white shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center rounded-xl max-w-6xl mx-auto shadow">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Start Using AI Toolkit Today
        </h2>
        <Link
          href="/tools"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Explore AI Tools
        </Link>
      </section>
    </main>
  )
}
