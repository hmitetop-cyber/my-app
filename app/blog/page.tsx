import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Writing Blog | AI Toolkit",
  description:
    "Explore articles on AI writing, productivity, SEO, and content creation with the AI Toolkit Blog.",
  keywords: [
    "AI writing blog",
    "AI productivity",
    "AI content creation",
    "SEO writing",
    "AI vs human writing",
  ],
  robots: "index, follow",
  openGraph: {
    title: "AI Writing Blog | AI Toolkit",
    description:
      "Discover articles on AI writing, productivity, SEO, and content creation.",
    url: "https://yourdomain.com/blog",
    siteName: "AI Toolkit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Writing Blog | AI Toolkit",
    description:
      "Discover articles on AI writing, productivity, SEO, and content creation.",
  },
}

const posts = [
  {
    slug: "best-ai-writing-tools-for-students",
    title: "Best AI Writing Tools for Students",
    excerpt:
      "Students can benefit from AI tools that simplify research, paraphrasing, and grammar correction. These tools save time and help improve academic writing quality.",
    category: "Education",
    readingTime: "5 min read",
  },
  {
    slug: "how-ai-can-improve-seo-content",
    title: "How AI Can Improve SEO Content",
    excerpt:
      "AI-powered tools can analyze keywords, optimize readability, and suggest improvements for SEO. This helps writers create content that ranks higher in search engines.",
    category: "SEO",
    readingTime: "6 min read",
  },
  {
    slug: "ai-vs-human-writing-pros-and-cons",
    title: "AI vs Human Writing: Pros and Cons",
    excerpt:
      "AI writing offers speed and efficiency, while human writing provides creativity and emotional depth. Understanding the strengths and weaknesses of both is key to effective content creation.",
    category: "Comparison",
    readingTime: "7 min read",
  },
  {
    slug: "10-tips-to-write-better-articles",
    title: "10 Tips to Write Better Articles",
    excerpt:
      "From structuring your content to using AI tools for editing, these tips will help you write engaging and professional articles that capture readers’ attention.",
    category: "Tips",
    readingTime: "6 min read",
  },
  {
    slug: "common-ai-writing-mistakes",
    title: "Common AI Writing Mistakes",
    excerpt:
      "Writers often rely too heavily on AI, leading to repetitive phrasing or lack of originality. Learn how to avoid these pitfalls and use AI effectively.",
    category: "Guides",
    readingTime: "4 min read",
  },
  {
    slug: "future-of-ai-content-creation",
    title: "Future of AI Content Creation",
    excerpt:
      "AI is evolving rapidly, and its role in content creation will expand. From personalized writing assistants to advanced creativity tools, the future looks promising.",
    category: "Technology",
    readingTime: "5 min read",
  },
]

export default function BlogPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen py-16 px-6">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">AI Writing Blog</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Learn about AI writing, productivity, SEO, and content creation.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-xl border bg-white shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
              Image Placeholder
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full mb-3">
                {post.category}
              </span>
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500 mb-4">{post.readingTime}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
