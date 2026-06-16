import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About AI Toolkit",
  description: "Learn more about AI Toolkit and our mission to provide free AI writing tools.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <section className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          About AI Toolkit
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          AI Toolkit provides free AI writing tools designed to help you write better, faster, and smarter.
        </p>
      </section>

      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is to empower students, writers, and professionals with accessible AI-powered tools that
          enhance creativity, improve productivity, and simplify the writing process.
        </p>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast</h3>
            <p className="text-gray-600">Get instant results with optimized AI tools.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
            <p className="text-gray-600">Access powerful AI tools at no cost.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
            <p className="text-gray-600">Simple, intuitive design for everyone.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Powered</h3>
            <p className="text-gray-600">Harness the latest advancements in artificial intelligence.</p>
          </div>
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