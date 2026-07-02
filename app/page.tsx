import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">AI Toolkit</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Free AI-powered writing tools for students, writers and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/tools"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <a
              href="#featured-tools"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Explore AI Tools
            </a>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 rounded-xl shadow-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">[AI Illustration Placeholder]</span>
        </div>
      </section>

      {/* Featured AI Tools */}
      <section id="featured-tools" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured AI Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI Paraphraser",
              desc: "Rewrite your text while preserving its meaning.",
              link: "/tools/paraphraser",
            },
            {
              title: "AI Summarizer",
              desc: "Summarize long text into concise summaries.",
              link: "/tools/summarizer",
            },
            {
              title: "AI Humanizer",
              desc: "Transform AI-generated content into natural human writing.",
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
        <div className="text-center mt-10">
          <Link
            href="/tools"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            View All Tools
          </Link>
        </div>
      </section>

      {/* Why Choose AI Toolkit */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose AI Toolkit</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {["Fast AI", "100% Free", "Secure", "Easy to Use"].map((feature) => (
            <div
              key={feature}
              className="rounded-xl bg-white shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "3", label: "AI Tools" },
            { stat: "Free Forever", label: "" },
            { stat: "24/7", label: "Available" },
            { stat: "Fast", label: "Responses" },
          ].map((item) => (
            <div
              key={item.stat}
              className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-extrabold text-blue-600 mb-2">{item.stat}</h3>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Start improving your writing today.
        </h2>
        <Link
          href="/tools"
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Use AI Tools
        </Link>
      </section>
    </main>
  )
}
import Image from "next/image";

<Image
  src="/hero-illustration.png"
  alt="AI Toolkit Hero Illustration"
  width={700}
  height={600}
  priority
  className="w-full h-auto"
/>