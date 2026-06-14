'use client'
import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleParaphrase() {
    setLoading(true)
    const res = await fetch('/api/paraphrase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input })
    })
    const data = await res.json()
    setOutput(data.result)
    setLoading(false)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">AI Paraphrasing Tool</h1>
      <p className="text-gray-500 mb-6">أعد صياغة نصك بالذكاء الاصطناعي مجاناً</p>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="اكتب النص هنا..."
        className="w-full max-w-2xl h-40 p-4 border rounded-lg mb-4"
      />
      <button
        onClick={handleParaphrase}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {loading ? 'جاري المعالجة...' : 'أعد الصياغة'}
      </button>
      {output && (
        <div className="mt-6 w-full max-w-2xl p-4 bg-white rounded-lg border">
          <h2 className="font-bold mb-2">النتيجة:</h2>
          <p>{output}</p>
        </div>
      )}
    </main>
  )
}