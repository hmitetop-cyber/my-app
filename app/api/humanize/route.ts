import { NextResponse } from "next/server"
import { generateAIResponse } from "@/lib/ai"

export async function POST(request: Request) {
  try {
    const { text }: { text: string } = await request.json()

    const result = await generateAIResponse(
      "You are an AI Humanizer. Rewrite AI-generated text so it sounds natural, fluent, human-written, and undetectable by AI detectors while preserving the original meaning. Return only the rewritten text.",
      text
    )

    return NextResponse.json({ result })
  } catch (error) {
    console.error("Error in humanize route:", error)
    return NextResponse.json(
      {
        result: "An error occurred while humanizing the text.",
      },
      {
        status: 500,
      }
    )
  }
}