'use client'

import { useState } from 'react'

export default function ParaphraserPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleParaphrase() {
    if (!input.trim()) return

    setLoading(true)

    try {
      const res = await fetch('/api/paraphrase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: input,
        }),
      })

      const data = await res.json()
      setOutput(data.result || 'No result returned.')
    } catch (error) {
      setOutput('An error occurred.')
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        AI Paraphraser
      </h1>

      <p className="text-gray-600 mb-8">
        Rewrite your text instantly with AI.
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your text here..."
        className="w-full max-w-3xl h-52 p-4 rounded-lg border bg-white text-gray-800 mb-4"
      />

      <button
        onClick={handleParaphrase}
        disabled={loading}
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Paraphrase'}
      </button>

      {output && (
        <div className="mt-8 w-full max-w-3xl bg-white border rounded-lg p-6">
          <h2 className="font-bold text-xl mb-4">Result</h2>

          <p className="text-gray-800 whitespace-pre-wrap">
            {output}
          </p>
        </div>
      )}
    </main>
  )
}