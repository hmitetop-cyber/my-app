"use client"

import { useState } from "react"

export default function GrammarPage() {
  const [input, setInput] = useState<string>("")
  const [output, setOutput] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0
  const charCount = input.length

  const handleCheckGrammar = async () => {
    if (!input.trim()) return
    setLoading(true)
    setOutput("")
    try {
      const res = await fetch("/api/grammar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      })
      const data: { result: string } = await res.json()
      setOutput(data.result)
    } catch {
      setOutput("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output)
    }
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-16 px-6">
      <section className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          AI Grammar Checker
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Correct grammar, spelling, punctuation and sentence structure instantly.
        </p>
      </section>

      <section className="w-full max-w-4xl space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here to check grammar..."
          className="w-full h-48 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900"
        />

        <div className="flex justify-between text-sm text-gray-600">
          <span>Words: {wordCount}</span>
          <span>Characters: {charCount}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleCheckGrammar}
            disabled={loading}
            className="flex-1 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 01-8 8z"
                  ></path>
                </svg>
                Checking...
              </>
            ) : (
              "Check Grammar"
            )}
          </button>
          <button
            onClick={handleClear}
            className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition-colors duration-200"
          >
            Clear
          </button>
        </div>

        {output && (
          <div className="rounded-xl border border-gray-200 bg-gray-50 shadow-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Corrected Text</h2>
            <p className="text-gray-800 whitespace-pre-line">{output}</p>
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
            >
              Copy Result
            </button>
          </div>
        )}
      </section>
    </main>
  )
}