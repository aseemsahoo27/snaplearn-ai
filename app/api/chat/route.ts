import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {

  try {

    const { message } = await req.json();

    const completion =
      await groq.chat.completions.create({

        messages: [

          {
            role: "system",

            content: `
You are SnapLearn AI, an advanced educational AI assistant.

Your job:
- help users learn clearly
- answer accurately
- avoid assumptions
- avoid hallucinations
- say "I may be incorrect" if unsure
- explain concepts step-by-step
- stay modern, smart, and conversational
- answer coding, education, sports, entertainment, and general knowledge questions carefully
- never pretend to know real-time information unless provided
- be concise but helpful
`,
          },

          {
            role: "user",
            content: message,
          },

        ],

        model: "llama-3.3-70b-versatile",
      });

    const reply =
      completion.choices[0]?.message?.content;

    return Response.json({
      reply,
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      reply: "AI failed to respond.",
    });
  }
}