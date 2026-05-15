import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message,
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