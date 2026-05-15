"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import ReactMarkdown from "react-markdown";

import {
  MessageSquarePlus,
  Trash2,
  LayoutDashboard,
  Sparkles,
  BrainCircuit,
  Presentation,
} from "lucide-react";

import PageHeader from "@/components/PageHeader";

type Message = {
  role: string;
  text: string;
};

type ChatSession = {
  id: number;
  title: string;
  messages: Message[];
};

export default function ChatPage() {

  const [input, setInput] =
    useState("");

  const [messages, setMessages] =
    useState<Message[]>([
      {
        role: "assistant",
        text:
          "Hello 👋 How can I help you today?",
      },
    ]);

  const [sessions, setSessions] =
    useState<ChatSession[]>([]);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentInput = input;

    setInput("");

    try {

      const res = await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: currentInput,
          }),
        }
      );

      const data =
        await res.json();

      const aiMessage: Message = {
        role: "assistant",
        text:
          data.response ||
          "No response received.",
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {

      const aiMessage: Message = {
        role: "assistant",
        text:
          "SnapLearn AI failed to respond.",
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);
    }
  };

  const handleNewChat = () => {

    if (messages.length > 1) {

      const newSession: ChatSession = {
        id: Date.now(),
        title:
          messages[1]?.text.slice(0, 25) ||
          "New Chat",
        messages,
      };

      setSessions((prev) => [
        newSession,
        ...prev,
      ]);
    }

    setMessages([
      {
        role: "assistant",
        text:
          "Hello 👋 How can I help you today?",
      },
    ]);
  };

  const handleDeleteChat = () => {

    setMessages([
      {
        role: "assistant",
        text:
          "Hello 👋 How can I help you today?",
      },
    ]);
  };

  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="w-[290px] border-r border-zinc-800 p-6 flex flex-col">

        <h1 className="text-5xl font-extrabold text-cyan-400">
          SnapLearn
        </h1>

        <div className="mt-10 space-y-4">

          <button className="w-full flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition-all p-5 rounded-2xl">
            <LayoutDashboard size={22} />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 bg-cyan-500 text-black font-semibold p-5 rounded-2xl">
            <BrainCircuit size={22} />
            AI Tutor
          </button>

          <button className="w-full flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition-all p-5 rounded-2xl">
            <Sparkles size={22} />
            Creative Studio
          </button>

          <button className="w-full flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition-all p-5 rounded-2xl">
            <BrainCircuit size={22} />
            Quiz Arena
          </button>

          <button className="w-full flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition-all p-5 rounded-2xl">
            <Presentation size={22} />
            Presentations
          </button>

        </div>

        <button
          onClick={handleNewChat}
          className="mt-10 w-full bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-semibold py-5 rounded-2xl flex items-center justify-center gap-3"
        >
          <MessageSquarePlus size={22} />
          New Chat
        </button>

        <div className="mt-6 flex-1 overflow-y-auto space-y-3">

          {sessions.map((session) => (

            <button
              key={session.id}
              onClick={() =>
                setMessages(
                  session.messages
                )
              }
              className="w-full text-left bg-zinc-900 hover:bg-zinc-800 transition-all rounded-2xl p-4"
            >
              {session.title}
            </button>

          ))}

        </div>

      </aside>

      {/* Main Chat */}
      <section className="flex-1 flex flex-col">

        <div className="flex items-center justify-between px-12 pt-6">

          <PageHeader
            title="SnapLearn AI 🤖"
            description="Ask questions safely and learn smarter."
          />

          <button
            onClick={handleDeleteChat}
            className="bg-red-500 hover:bg-red-400 transition-all px-6 py-4 rounded-2xl flex items-center gap-3 font-semibold"
          >
            <Trash2 size={20} />
            Delete Chat
          </button>

        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-12 py-8 space-y-8">

          {messages.map(
            (message, index) => (

              <div
                key={index}
                className={`max-w-5xl rounded-3xl p-8 ${
                  message.role === "user"
                    ? "bg-cyan-500 text-black ml-auto"
                    : "bg-zinc-900 border border-zinc-800"
                }`}
              >

                <h3 className="font-bold text-2xl mb-4">

                  {message.role ===
                  "user"
                    ? "You"
                    : "SnapLearn AI"}

                </h3>

                <div className="prose prose-invert max-w-none">

                  <ReactMarkdown>
                    {message.text}
                  </ReactMarkdown>

                </div>

              </div>

            )
          )}

          <div ref={messagesEndRef} />

        </div>

        {/* Input */}
        <div className="border-t border-zinc-800 p-8 flex gap-5">

          <input
            type="text"
            placeholder="Ask anything safely..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {
                handleSend();
              }

            }}
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl px-8 py-5 outline-none text-lg"
          />

          <button
            onClick={handleSend}
            className="bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-semibold px-10 rounded-2xl"
          >
            Send
          </button>

        </div>

      </section>

    </main>
  );
}