import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json({
        response: "Please enter a message.",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(message);

    const response = result.response.text();

    return Response.json({
      response,
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    return Response.json({
      response:
        "SnapLearn AI is temporarily unavailable.",
    });
  }
}