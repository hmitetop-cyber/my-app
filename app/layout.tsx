import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://aitoolkit.space"),

  title: "AI Toolkit | Free AI Writing Tools",
  description:
    "AI Toolkit offers free AI-powered writing tools for students, bloggers, and professionals. Rewrite, summarize, humanize, and improve your text instantly.",

  keywords: [
    "AI Toolkit",
    "AI writing tools",
    "paraphraser",
    "summarizer",
    "humanizer",
    "grammar checker",
  ],

  robots: "index, follow",

  openGraph: {
    title: "AI Toolkit | Free AI Writing Tools",
    description:
      "Free AI-powered writing tools to rewrite, summarize, humanize and improve your text instantly.",
    url: "https://aitoolkit.space",
    siteName: "AI Toolkit",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Toolkit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Toolkit | Free AI Writing Tools",
    description:
      "Free AI-powered writing tools to rewrite, summarize, humanize and improve your text instantly.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C0QCD3F9KP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C0QCD3F9KP');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7288895045646466"
          crossOrigin="anonymous"
        />

        <Navbar />

        <main className="flex-1">{children}</main>

        <footer className="bg-gray-100 border-t py-10 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>

              <Link
                href="/tools"
                className="text-gray-600 hover:text-blue-600"
              >
                AI Tools
              </Link>

              <Link
                href="/blog"
                className="text-gray-600 hover:text-blue-600"
              >
                Blog
              </Link>

              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-gray-600 hover:text-blue-600"
              >
                Terms
              </Link>
            </div>

            <p className="text-gray-600">
              © 2026 AI Toolkit. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}