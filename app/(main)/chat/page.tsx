"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import ReactMarkdown from "react-markdown";

import {
  MessageSquarePlus,
  Trash2
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

  const defaultMessages = [
    {
      role: "ai",
      text: "Hello 👋 How can I help you today?"
    }
  ];

  const [sessions, setSessions] =
    useState<ChatSession[]>([]);

  const [currentChatId, setCurrentChatId] =
    useState<number | null>(null);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  // LOAD SAVED SESSIONS
  useEffect(() => {

    const savedSessions =
      localStorage.getItem(
        "snaplearn-sessions"
      );

    if (savedSessions) {

      const parsed =
        JSON.parse(savedSessions);

      setSessions(parsed);

      setCurrentChatId(parsed[0]?.id);

    } else {

      const firstChat = {
        id: Date.now(),
        title: "New Chat",
        messages: defaultMessages,
      };

      setSessions([firstChat]);

      setCurrentChatId(firstChat.id);
    }

  }, []);

  // SAVE SESSIONS
  useEffect(() => {

    localStorage.setItem(
      "snaplearn-sessions",
      JSON.stringify(sessions)
    );

  }, [sessions]);

  // AUTO SCROLL
  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [sessions]);

  const currentChat =
    sessions.find(
      (session) =>
        session.id === currentChatId
    );

  // CREATE NEW CHAT
  const createNewChat = () => {

    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: defaultMessages,
    };

    setSessions((prev) => [
      newChat,
      ...prev
    ]);

    setCurrentChatId(newChat.id);
  };

  // DELETE CURRENT CHAT
  const deleteChat = () => {

    if (!currentChatId) return;

    const updated =
      sessions.filter(
        (session) =>
          session.id !== currentChatId
      );

    if (updated.length === 0) {

      const freshChat = {
        id: Date.now(),
        title: "New Chat",
        messages: defaultMessages,
      };

      setSessions([freshChat]);

      setCurrentChatId(freshChat.id);

      return;
    }

    setSessions(updated);

    setCurrentChatId(updated[0].id);
  };

  const sendMessage = async () => {

    if (
      !message.trim() ||
      !currentChat
    ) return;

    const userMessage = {
      role: "user",
      text: message,
    };

    const updatedSessions =
      sessions.map((session) => {

        if (
          session.id === currentChatId
        ) {

          return {

            ...session,

            title:
              session.messages.length <= 1
                ? message.slice(0, 30)
                : session.title,

            messages: [
              ...session.messages,
              userMessage
            ],
          };
        }

        return session;
      });

    setSessions(updatedSessions);

    const userInput = message;

    setMessage("");

    setLoading(true);

    try {

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: userInput,
          }),
        }
      );

      const data =
        await response.json();

      setSessions((prev) =>
        prev.map((session) => {

          if (
            session.id === currentChatId
          ) {

            return {

              ...session,

              messages: [
                ...session.messages,
                {
                  role: "ai",
                  text: data.reply,
                }
              ],
            };
          }

          return session;
        })
      );

    } catch (error) {

      setSessions((prev) =>
        prev.map((session) => {

          if (
            session.id === currentChatId
          ) {

            return {

              ...session,

              messages: [
                ...session.messages,
                {
                  role: "ai",
                  text:
                    "Something went wrong.",
                }
              ],
            };
          }

          return session;
        })
      );

    }

    setLoading(false);
  };

  return (
    <div className="flex gap-6">

      {/* SIDEBAR */}
      <div className="hidden md:flex flex-col w-72 bg-zinc-950 border-r border-zinc-800 min-h-screen p-4 gap-4">

        <button
          onClick={createNewChat}

          className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-semibold p-4 rounded-2xl"
        >

          <MessageSquarePlus size={20} />

          New Chat

        </button>

        <div className="space-y-3 overflow-y-auto">

          {sessions.map((session) => (

            <button
              key={session.id}

              onClick={() =>
                setCurrentChatId(
                  session.id
                )
              }

              className={`w-full text-left p-4 rounded-2xl transition-all ${
                currentChatId ===
                session.id
                  ? "bg-cyan-500 text-black"
                  : "bg-zinc-900 hover:bg-zinc-800"
              }`}
            >

              {session.title}

            </button>
          ))}

        </div>

      </div>

      {/* MAIN CHAT */}
      <div className="flex-1">

        <div className="flex items-center justify-between gap-4">

          <PageHeader
            title="SnapLearn AI 🤖"
            description="Ask questions safely and learn smarter."
          />

          <button
            onClick={deleteChat}

            className="flex items-center gap-2 bg-red-500 hover:bg-red-400 transition-all px-5 py-3 rounded-2xl text-white font-semibold h-fit"
          >

            <Trash2 size={18} />

            Delete Chat

          </button>

        </div>

        <div className="space-y-6 mt-12 pb-40">

          {currentChat?.messages.map(
            (msg, index) => (

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
            )
          )}

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

        {/* INPUT */}
        <div className="fixed bottom-0 left-0 md:left-[18rem] right-0 bg-black border-t border-zinc-800 p-6">

          <div className="flex gap-4 max-w-5xl mx-auto">

            <input
              type="text"

              value={message}

              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }

              onKeyDown={(e) => {

                if (
                  e.key === "Enter"
                ) {
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

      </div>

    </div>
  );
}