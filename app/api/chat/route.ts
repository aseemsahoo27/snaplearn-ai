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
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
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

    console.log(
      JSON.stringify(
        data,
        null,
        2
      )
    );

    const text =
      data.candidates?.[0]?.content
        ?.parts?.map(
          (part: any) =>
            part.text
        )
        .join(" ") ||
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