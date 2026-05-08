import PageHeader from "@/components/PageHeader";

"use client";

import { useState } from "react";

export default function ChatPage() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      role: "ai",
      text: "Hello 👋 How can I help you today?"
    }
  ]);

  const sendMessage = () => {

    if (!message.trim()) return;

    setChat([
      ...chat,
      {
        role: "user",
        text: message
      },
      {
        role: "ai",
        text: `You asked about: "${message}"`
      }
    ]);

    setMessage("");
  };

  return (
    <>
      <PageHeader
        title="SnapLearn AI 🤖"
      description="Ask questions safely and learn smarter."
    />  

      <div className="space-y-6 mt-12">

        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-5 rounded-2xl max-w-2xl ${
              msg.role === "ai"
                ? "bg-zinc-900 border border-zinc-800"
                : "bg-cyan-500 text-black ml-auto"
            }`}
          >

            <p
              className={`font-semibold ${
                msg.role === "ai"
                  ? "text-cyan-400"
                  : "text-black"
              }`}
            >
              {msg.role === "ai"
                ? "SnapLearn AI"
                : "You"}
            </p>

            <p className="mt-2">
              {msg.text}
            </p>

          </div>
        ))}

      </div>

      <div className="mt-10 flex gap-4">

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything safely..."
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 outline-none focus:border-cyan-400"
        />

        <button
          onClick={sendMessage}
          className="bg-cyan-500 hover:bg-cyan-400 transition-all px-8 rounded-2xl text-black font-semibold"
        >
          Send
        </button>

      </div>
    </>
  );
}