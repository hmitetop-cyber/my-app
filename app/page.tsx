import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">AI Toolkit</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Free AI-powered writing tools to rewrite, summarize, humanize and improve your text instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/tools/paraphraser"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="/tools/summarizer"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Explore Tools
            </Link>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 rounded-xl shadow-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">[AI Illustration Placeholder]</span>
        </div>
      </section>

      {/* Popular AI Tools */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Popular AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Paraphraser",
              desc: "Rewrite your text while preserving its meaning.",
              link: "/tools/paraphraser",
            },
            {
              title: "AI Summarizer",
              desc: "Summarize long articles into concise summaries.",
              link: "/tools/summarizer",
            },
            {
              title: "AI Humanizer",
              desc: "Convert AI-generated text into natural human writing.",
              link: "/tools/humanizer",
            },
          ].map((tool) => (
            <div
              key={tool.title}
              className="rounded-xl border bg-white shadow-lg p-6 flex flex-col hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.desc}</p>
              <Link
                href={tool.link}
                className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Open Tool
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose AI Toolkit */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose AI Toolkit</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {["Fast AI Processing", "Completely Free", "Easy To Use", "Secure & Private"].map((feature) => (
            <div
              key={feature}
              className="rounded-xl bg-white shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Who Uses Our Tools */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Who Uses Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["Students", "Bloggers", "Content Writers", "Businesses"].map((user) => (
            <div
              key={user}
              className="rounded-xl bg-white shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{user}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-4xl font-extrabold text-blue-600 mb-2">3+</h3>
            <p className="text-gray-700">AI Tools</p>
          </div>
          <div className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-4xl font-extrabold text-blue-600 mb-2">100%</h3>
            <p className="text-gray-700">Free</p>
          </div>
          <div className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-4xl font-extrabold text-blue-600 mb-2">24/7</h3>
            <p className="text-gray-700">Available</p>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border bg-white shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                Image Placeholder
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2">Blog Post {i}</h3>
                <p className="text-gray-600 mb-4">Short description of blog post {i}.</p>
                <Link
                  href="/blog"
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Start improving your writing with AI today.
        </h2>
        <Link
          href="/tools/paraphraser"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Try AI Tools
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t py-10 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
          </div>
          <p className="text-gray-600">© 2026 AI Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}