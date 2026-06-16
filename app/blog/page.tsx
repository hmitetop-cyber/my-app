import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Writing Blog",
  description: "Learn about AI writing, productivity and content creation.",
}

export default function BlogPage() {
  const articles = [
    {
      title: "The Future of AI Writing",
      description: "Discover how AI is transforming the way we create content.",
    },
    {
      title: "Boosting Productivity with AI",
      description: "Learn how AI tools can help you work smarter and faster.",
    },
    {
      title: "AI in Education",
      description: "Explore how students and teachers benefit from AI writing tools.",
    },
    {
      title: "Content Creation Simplified",
      description: "See how AI makes writing easier for professionals and creators.",
    },
    {
      title: "AI and Creativity",
      description: "Understand how AI enhances creativity without replacing it.",
    },
    {
      title: "The Ethics of AI Writing",
      description: "Consider the ethical implications of AI-generated content.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <section className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          AI Writing Blog
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Learn about AI writing, productivity and content creation.
        </p>
      </section>

      <section className="w-full max-w-4xl mb-12">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
        />
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden flex flex-col"
          >
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
              Image Placeholder
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <button className="mt-auto inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors duration-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}