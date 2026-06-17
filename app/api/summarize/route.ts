import { NextResponse } from "next/server"
import { generateAIResponse } from "@/lib/ai"

export async function POST(request: Request) {
  try {
    const { text } = await request.json()

    const result = await generateAIResponse(
      "You are a professional AI summarizer. Summarize the user's text into a short, clear and accurate summary while preserving the key information. Return only the summary.",
      text
    )

    return NextResponse.json({ result })
  } catch (error) {
    console.error("Error in summarize route:", error)

    return NextResponse.json(
      {
        result: "An error occurred while generating the summary.",
      },
      {
        status: 500,
      }
    )
  }
}