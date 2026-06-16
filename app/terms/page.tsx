import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - AI Toolkit",
  description: "Read the Terms of Service for AI Toolkit to understand your rights and responsibilities.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <section className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl text-gray-600">Last Updated: June 2026</p>
      </section>

      <section className="w-full max-w-4xl space-y-12 text-gray-700">
        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-lg leading-relaxed">
            By accessing or using AI Toolkit, you agree to comply with and be bound by these Terms of Service.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Use of Services</h2>
          <p className="text-lg leading-relaxed">
            You agree to use AI Toolkit only for lawful purposes and in accordance with these Terms. Misuse of the
            services may result in termination of access.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
          <p className="text-lg leading-relaxed">
            All content, features, and functionality of AI Toolkit are the property of AI Toolkit and are protected by
            intellectual property laws.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h2>
          <p className="text-lg leading-relaxed">
            AI Toolkit is provided on an "as is" and "as available" basis. We make no warranties regarding the accuracy
            or reliability of the services.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-lg leading-relaxed">
            AI Toolkit shall not be liable for any damages arising from the use or inability to use the services,
            including indirect or consequential damages.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
          <p className="text-lg leading-relaxed">
            We may update these Terms of Service from time to time. Continued use of AI Toolkit after changes indicates
            acceptance of the revised terms.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-lg leading-relaxed">
            For questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:support@aitoolkit.com" className="text-indigo-600 hover:underline">
              support@aitoolkit.com
            </a>
            .
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