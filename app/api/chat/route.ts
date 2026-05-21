import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const message = body.message;

    if (!message) {

      return Response.json({
        response: "No message provided.",
      });

    }

    const apiKey =
      process.env.GEMINI_API_KEY;

    if (!apiKey) {

      return Response.json({
        response:
          "Gemini API key missing.",
      });

    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }),
      }
    );

    const data =
      await response.json();

    console.log(data);

    const text =
      data?.candidates?.[0]
        ?.content?.parts?.[0]
        ?.text ||
      "No response.";

    return Response.json({
      response: text,
    });

  } catch (error) {

    console.error(error);

    return Response.json({
      response:
        "SnapLearn AI is temporarily unavailable.",
    });
  }
}