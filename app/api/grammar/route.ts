import { NextResponse } from "next/server"
import { generateAIResponse } from "@/lib/ai"

export async function POST(request: Request) {
  try {
    const { text }: { text: string } = await request.json()

    const result = await generateAIResponse(
      "You are a professional English grammar checker. Correct grammar, spelling, punctuation and sentence structure while preserving the original meaning. Return only the corrected text.",
      text
    )

    return NextResponse.json({ result })
  } catch (error) {
    console.error("Error in grammar route:", error)
    return NextResponse.json(
      {
        result: "An error occurred while checking grammar.",
      },
      {
        status: 500,
      }
    )
  }
}