import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Toolkit",
  description: "Free AI writing tools powered by artificial intelligence.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <section className="w-full max-w-6xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          AI Toolkit
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Free AI writing tools powered by artificial intelligence.
        </p>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl bg-white shadow-lg p-6 text-center transform transition duration-200 hover:scale-105 hover:shadow-xl">
            <h2 className="text-4xl font-extrabold text-indigo-600 mb-2">2+</h2>
            <p className="text-gray-700">Free AI Tools</p>
          </div>
          <div className="rounded-xl bg-white shadow-lg p-6 text-center transform transition duration-200 hover:scale-105 hover:shadow-xl">
            <h2 className="text-4xl font-extrabold text-indigo-600 mb-2">Weekly</h2>
            <p className="text-gray-700">Blog Updates</p>
          </div>
          <div className="rounded-xl bg-white shadow-lg p-6 text-center transform transition duration-200 hover:scale-105 hover:shadow-xl">
            <h2 className="text-4xl font-extrabold text-indigo-600 mb-2">More</h2>
            <p className="text-gray-700">AI Tools Coming Soon</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/tools/paraphraser"
            className="group block rounded-xl border border-gray-200 bg-white shadow-lg p-6 transform transition duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-100"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              AI Paraphraser
            </h2>
            <p className="text-gray-600">
              Rewrite your text while preserving the original meaning.
            </p>
            <div className="mt-6 text-indigo-600 font-medium group-hover:underline">
              Try Now →
            </div>
          </Link>

          <Link
            href="/tools/summarizer"
            className="group block rounded-xl border border-gray-200 bg-white shadow-lg p-6 transform transition duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-100"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              AI Summarizer
            </h2>
            <p className="text-gray-600">
              Summarize long text into short, clear content using AI.
            </p>
            <div className="mt-6 text-indigo-600 font-medium group-hover:underline">
              Try Now →
            </div>
          </Link>

          <div
            className="rounded-xl border border-gray-200 bg-gray-100 shadow-lg p-6 opacity-60 cursor-not-allowed"
            aria-disabled="true"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              AI Humanizer
            </h2>
            <p className="text-gray-500">Coming Soon</p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Explore Our Blog
        </Link>
      </section>
    </main>
  )
}