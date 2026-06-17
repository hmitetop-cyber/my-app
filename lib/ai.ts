export async function generateAIResponse(
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY

  console.log("API KEY VALUE:", apiKey)
  console.log(
    "ENV KEYS:",
    Object.keys(process.env).filter((key) => key.includes("GROQ"))
  )

  if (!apiKey) {
    throw new Error("Missing GROQ_API_KEY")
  }

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
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
        temperature: 0.7,
        max_tokens: 1024,
      }),
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `Groq API Error ${response.status}: ${errorText}`
    )
  }

  const data = await response.json()

  if (
    !data ||
    !data.choices ||
    !data.choices[0] ||
    !data.choices[0].message ||
    !data.choices[0].message.content
  ) {
    throw new Error("Invalid response from Groq API")
  }

  return data.choices[0].message.content.trim()
}