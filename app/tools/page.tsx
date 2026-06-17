import Link from "next/link"

export default function ToolsPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen py-16 px-6">
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">AI Tools</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Choose one of our free AI-powered writing tools.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
          {
            title: "AI Grammar Checker",
            desc: "Correct grammar, spelling and punctuation instantly.",
            link: "/tools/grammar",
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
      </section>

      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to improve your writing?
        </h2>
        <Link
          href="/tools/paraphraser"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Start Using AI Tools
        </Link>
      </section>
    </main>
  )
}