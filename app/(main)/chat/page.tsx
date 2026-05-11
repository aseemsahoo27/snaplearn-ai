"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import ReactMarkdown from "react-markdown";

import { Trash2 } from "lucide-react";

import PageHeader from "@/components/PageHeader";

export default function ChatPage() {

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState([
    {
      role: "ai",
      text: "Hello 👋 How can I help you today?"
    }
  ]);

  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  // LOAD SAVED CHAT
  useEffect(() => {

    const savedChat =
      localStorage.getItem("snaplearn-chat");

    if (savedChat) {
      setChat(JSON.parse(savedChat));
    }

  }, []);

  // SAVE CHAT
  useEffect(() => {

    localStorage.setItem(
      "snaplearn-chat",
      JSON.stringify(chat)
    );

  }, [chat]);

  // AUTO SCROLL
  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [chat]);

  // CLEAR CHAT
  const clearChat = () => {

    const freshChat = [
      {
        role: "ai",
        text: "Hello 👋 How can I help you today?"
      }
    ];

    setChat(freshChat);

    localStorage.removeItem(
      "snaplearn-chat"
    );
  };

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = message;

    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage
      }
    ]);

    setMessage("");

    setLoading(true);

    try {

      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setChat((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply,
        }
      ]);

    } catch (error) {

      setChat((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Something went wrong.",
        }
      ]);

    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4">

        <PageHeader
          title="SnapLearn AI 🤖"
          description="Ask questions safely and learn smarter."
        />

        <button
          onClick={clearChat}

          className="flex items-center gap-2 bg-red-500 hover:bg-red-400 transition-all px-5 py-3 rounded-2xl text-white font-semibold h-fit"
        >

          <Trash2 size={18} />

          New Chat

        </button>

      </div>

      <div className="space-y-6 mt-12 pb-40">

        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-5 rounded-2xl max-w-3xl ${
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

            <div className="mt-2 prose prose-invert max-w-none leading-8">

              <ReactMarkdown>
                {msg.text}
              </ReactMarkdown>

            </div>

          </div>
        ))}

        {loading && (
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl max-w-3xl">

            <p className="text-cyan-400 font-semibold">
              SnapLearn AI
            </p>

            <p className="mt-2 animate-pulse text-zinc-400">
              Typing...
            </p>

          </div>
        )}

        <div ref={bottomRef}></div>

      </div>

      <div className="fixed bottom-0 left-0 md:left-72 right-0 bg-black border-t border-zinc-800 p-6">

        <div className="flex gap-4 max-w-5xl mx-auto">

          <input
            type="text"

            value={message}

            onChange={(e) =>
              setMessage(e.target.value)
            }

            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}

            placeholder="Ask anything safely..."

            className="flex-1 bg-zinc-900 border border-cyan-400 rounded-2xl p-5 outline-none"
          />

          <button
            onClick={sendMessage}

            className="bg-cyan-500 hover:bg-cyan-400 transition-all px-8 rounded-2xl text-black font-semibold"
          >
            Send
          </button>

        </div>

      </div>
    </>
  );
}