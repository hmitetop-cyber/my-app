import Link from "next/link"
import type { Metadata } from "next"
import { FaPenFancy, FaListAlt, FaUserEdit, FaSpellCheck } from "react-icons/fa"

export const metadata: Metadata = {
  title: "AI Tools | AI Toolkit",
  description:
    "Browse free AI-powered writing tools including paraphraser, summarizer, humanizer, and grammar checker.",
  keywords: [
    "AI tools",
    "AI paraphraser",
    "AI summarizer",
    "AI humanizer",
    "AI grammar checker",
  ],
  robots: "index, follow",
  openGraph: {
    title: "AI Tools | AI Toolkit",
    description:
      "Explore free AI-powered writing tools to improve your content instantly.",
    url: "https://yourdomain.com/tools",
    siteName: "AI Toolkit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools | AI Toolkit",
    description:
      "Explore free AI-powered writing tools to improve your content instantly.",
  },
}

export default function ToolsPage() {
  const tools = [
    {
      title: "AI Paraphraser",
      desc: "Rewrite your text while preserving its meaning.",
      link: "/tools/paraphraser",
      icon: <FaPenFancy className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: "AI Summarizer",
      desc: "Summarize long text into concise summaries.",
      link: "/tools/summarizer",
      icon: <FaListAlt className="text-green-600 text-4xl mb-4" />,
    },
    {
      title: "AI Humanizer",
      desc: "Transform AI-generated content into natural human writing.",
      link: "/tools/humanizer",
      icon: <FaUserEdit className="text-purple-600 text-4xl mb-4" />,
    },
    {
      title: "AI Grammar Checker",
      desc: "Correct grammar, spelling and punctuation instantly.",
      link: "/tools/grammar",
      icon: <FaSpellCheck className="text-red-600 text-4xl mb-4" />,
    },
  ]

  return (
    <main className="bg-white text-gray-900 min-h-screen py-16 px-6">
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          AI Writing Tools
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Choose a free AI-powered tool to improve your writing.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="rounded-xl border bg-white shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            {tool.icon}
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
      </section>
    </main>
  )
}
import Image from "next/image";
