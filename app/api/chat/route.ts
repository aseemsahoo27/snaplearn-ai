import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    console.log("API HIT");

    const { message } = await req.json();

    if (!message) {
      return Response.json({
        response: "No message provided",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    console.log("API KEY EXISTS:", !!apiKey);

    if (!apiKey) {
      return Response.json({
        response: "Gemini API key missing.",
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(message);

    const text = result.response.text();

    console.log("SUCCESS");

    return Response.json({
      response: text,
    });

  } catch (error: any) {

    console.error("FULL ERROR:", error);

    return Response.json({
      response: "SnapLearn AI is temporarily unavailable.",
    });
  }
}