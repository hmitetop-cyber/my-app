import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - AI Toolkit",
  description: "Read the privacy policy of AI Toolkit to understand how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <section className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl text-gray-600">Last Updated: June 2026</p>
      </section>

      <section className="w-full max-w-4xl space-y-12 text-gray-700">
        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-lg leading-relaxed">
            We collect information you provide directly, such as when you use our tools or contact us. We may also
            collect usage data to improve our services.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies Usage</h2>
          <p className="text-lg leading-relaxed">
            AI Toolkit uses cookies to enhance your browsing experience, remember preferences, and analyze site
            performance.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Analytics Usage</h2>
          <p className="text-lg leading-relaxed">
            We use analytics tools to understand how users interact with our website, helping us improve functionality
            and content.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-lg leading-relaxed">
            Our website may integrate third-party services. These providers may collect information in accordance with
            their own privacy policies.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">User Rights</h2>
          <p className="text-lg leading-relaxed">
            You have the right to access, update, or delete your personal information. You may also opt out of certain
            data collection practices.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
          <p className="text-lg leading-relaxed">
            We implement industry-standard security measures to protect your information from unauthorized access,
            disclosure, or misuse.
          </p>
        </article>
      </section>

      <section className="text-center mt-16">
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