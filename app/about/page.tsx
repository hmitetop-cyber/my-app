import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About AI Toolkit | Free AI Writing Tools",
  description:
    "Learn more about AI Toolkit, our mission, and the free AI-powered writing tools we provide to help students, writers, bloggers, and professionals create better content faster.",
  keywords: [
    "About AI Toolkit",
    "AI writing tools",
    "AI paraphraser",
    "AI summarizer",
    "AI humanizer",
    "AI grammar checker",
  ],
  robots: "index, follow",
  openGraph: {
    title: "About AI Toolkit | Free AI Writing Tools",
    description:
      "Discover AI Toolkit's mission and the free AI-powered writing tools we provide.",
    url: "https://yourdomain.com/about",
    siteName: "AI Toolkit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AI Toolkit | Free AI Writing Tools",
    description:
      "Discover AI Toolkit's mission and the free AI-powered writing tools we provide.",
  },
}

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen py-16 px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About AI Toolkit</h1>
        <p className="text-lg md:text-xl text-gray-600">
          AI Toolkit provides free AI-powered writing tools to help students, writers,
          bloggers, and professionals create better content faster.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          Our mission is to make advanced AI writing tools accessible to everyone. We
          believe that technology should empower creativity, improve productivity, and
          help people express themselves more effectively.
        </p>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "AI Paraphraser",
              desc: "Rewrite your text while preserving meaning.",
            },
            {
              title: "AI Summarizer",
              desc: "Summarize long text into concise summaries.",
            },
            {
              title: "AI Humanizer",
              desc: "Transform AI-generated content into natural human writing.",
            },
            {
              title: "AI Grammar Checker",
              desc: "Correct grammar, spelling and punctuation instantly.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-white shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {["Fast", "Free", "Easy to Use", "AI Powered"].map((reason) => (
            <div
              key={reason}
              className="rounded-xl bg-white shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-6xl mx-auto mb-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "4", label: "AI Tools" },
            { stat: "Free Forever", label: "" },
            { stat: "24/7", label: "Available" },
            { stat: "Modern", label: "Technology" },
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

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center rounded-xl max-w-6xl mx-auto shadow">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Start Writing Smarter Today
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
