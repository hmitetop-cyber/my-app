"use client"

import { useState } from "react"

export default function SummarizerPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSummarize = async () => {
    if (!input.trim()) return
    setLoading(true)
    setOutput("")
    try {
      const res = await fetch("/api/summarizer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      })
      const data = await res.json()
      setOutput(data.result)
    } catch (error) {
      setOutput("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <section className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          AI Summarizer
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Summarize long text into concise content using AI.
        </p>
      </section>

      <section className="w-full max-w-4xl space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-48 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-gray-700"
        />

        <button
          onClick={handleSummarize}
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>

        {output && (
          <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Summary</h2>
            <p className="text-gray-700 whitespace-pre-line">{output}</p>
          </div>
        )}
      </section>
    </main>
  )
}