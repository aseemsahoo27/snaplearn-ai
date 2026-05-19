import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message = body.message;

    if (!message) {
      return Response.json({
        response: "No message provided.",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(
      message
    );

    const response = result.response.text();

    return Response.json({
      response,
    });

  } catch (error: any) {

    console.error(
      "GEMINI ERROR:",
      error?.message || error
    );

    return Response.json({
      response:
        "SnapLearn AI is temporarily unavailable.",
    });
  }
}