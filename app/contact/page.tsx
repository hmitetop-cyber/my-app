import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - AI Toolkit",
  description: "Get in touch with AI Toolkit for support, business inquiries, or feedback.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <section className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          We’d love to hear from you. Reach out to AI Toolkit for support, business inquiries, or feedback.
        </p>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Email</h2>
          <p className="text-gray-600">
            <a href="mailto:support@aitoolkit.com" className="text-indigo-600 hover:underline">
              support@aitoolkit.com
            </a>
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Business Inquiries</h2>
          <p className="text-gray-600">Connect with us for partnerships and collaborations.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Feedback & Suggestions</h2>
          <p className="text-gray-600">Share your ideas to help us improve AI Toolkit.</p>
        </div>
      </section>

      <section className="text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </section>
    </main>
  )
}