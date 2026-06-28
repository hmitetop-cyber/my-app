import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | AI Toolkit",
  description:
    "Read the Privacy Policy of AI Toolkit. Learn how we collect, use, and protect your information when using our free AI-powered writing tools.",
  keywords: [
    "Privacy Policy",
    "AI Toolkit",
    "data security",
    "cookies",
    "third-party services",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | AI Toolkit",
    description:
      "Learn how AI Toolkit collects, uses, and protects your information when using our free AI-powered writing tools.",
    url: "https://yourdomain.com/privacy-policy",
    siteName: "AI Toolkit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AI Toolkit",
    description:
      "Learn how AI Toolkit collects, uses, and protects your information when using our free AI-powered writing tools.",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen py-16 px-6">
      <section className="max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-4">Last Updated: June 2026</p>
        <p className="text-gray-700 text-lg">
          At AI Toolkit, we value your privacy. This Privacy Policy explains how we
          collect, use, and protect your information when you use our free AI-powered
          writing tools.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-700">
            We may collect non-personal information such as usage data, browser type,
            and device information to improve our services. We do not require personal
            accounts at this time.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
          <p className="text-gray-700">
            Information collected is used to enhance user experience, improve tool
            performance, and maintain security. We do not sell or share your data with
            unauthorized third parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p className="text-gray-700">
            AI Toolkit may use cookies to remember preferences and provide a smoother
            user experience. You can disable cookies in your browser settings if you
            prefer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
          <p className="text-gray-700">
            We may integrate third-party services such as analytics tools to monitor
            usage trends. These services have their own privacy policies, which we
            encourage you to review.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-gray-700">
            We implement reasonable security measures to protect your information from
            unauthorized access, alteration, or disclosure. However, no method of
            transmission over the internet is completely secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-700">
            AI Toolkit is not directed toward children under 13. We do not knowingly
            collect personal information from children. If you believe a child has
            provided us with information, please contact us.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">
            If you have questions or concerns about this Privacy Policy, please use the
            contact form on our website.
          </p>
        </div>
      </section>
    </main>
  )
}
