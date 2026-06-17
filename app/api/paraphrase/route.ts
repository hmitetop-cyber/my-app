import { NextResponse } from "next/server"
import { generateAIResponse } from "@/lib/ai"

export async function POST(request: Request) {
  try {
    const { text } = await request.json()
    const result = await generateAIResponse(
      "You are an AI paraphraser. Rewrite text while preserving meaning.",
      text
    )
    return NextResponse.json({ result })
  } catch (error) {
    console.error("Error in paraphrase route:", error)
    return NextResponse.json({ result: "An error occurred." }, { status: 500 })
  }
}
