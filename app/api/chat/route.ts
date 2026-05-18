import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free",
      messages: [
        {
          role: "system",
          content: 
            "You are SnapLearn AI, a smart, friendly, modern AI tutor for students. Explain concepts clearly, naturally, and conversationally like ChatGPT. Avoid robotic answers, repetition, or unnecessary long definitions. Give direct, structured, human-like responses with examples when useful.",
        },
      ],
    });

    const response =
      completion.choices[0].message.content;

    return Response.json({
      response,
    });

  } catch (error) {
    console.error(error);

    return Response.json({
      response:
        "SnapLearn AI is temporarily unavailable.",
    });
  }
}