import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { text } = await request.json()

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: 'You are a paraphrasing tool. Rewrite the given text in different words while keeping the same meaning. Return only the rewritten text.'
        },
        {
          role: 'user',
          content: text
        }
      ]
    })
  })

  const data = await res.json()
  const result = data.choices[0].message.content

  return NextResponse.json({ result })
}