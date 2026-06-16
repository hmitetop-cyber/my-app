import "./globals.css"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Toolkit",
  description: "Free AI writing tools powered by artificial intelligence.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="text-xl font-bold text-gray-900">AI Toolkit</div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-indigo-600">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-indigo-600">
                Terms
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center space-y-4">
            <p className="text-gray-600">© 2026 AI Toolkit</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="text-gray-600 hover:text-indigo-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-indigo-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600">
                Contact
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-indigo-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-indigo-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}