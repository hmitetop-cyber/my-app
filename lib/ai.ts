export async function generateAIResponse(
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY

  if (!apiKey) {
    throw new Error("Missing GROQ_API_KEY")
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        `Groq API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`
      )
    }

    const data: {
      choices: { message: { content: string } }[]
    } = await response.json()

    if (!data.choices || !data.choices[0]?.message?.content) {
      throw new Error("Invalid response structure from Groq API")
    }

    return data.choices[0].message.content
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to generate AI response: ${error.message}`)
    }
    throw new Error("Failed to generate AI response: Unknown error")
  }
}
