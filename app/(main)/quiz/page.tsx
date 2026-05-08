"use client";

import { useState } from "react";

import PageHeader from "@/components/PageHeader";

export default function QuizPage() {

  const [selected, setSelected] = useState("");

  const correctAnswer = "A";

  return (
    <>
      <PageHeader
        title="Quiz Arena 🧠"
        description="Test your knowledge and improve your skills."
      />

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 max-w-3xl">

        <h2 className="text-3xl font-semibold">
          What does HTML stand for?
        </h2>

        <div className="flex flex-col gap-5 mt-8">

          <button
            onClick={() => setSelected("A")}
            className={`p-5 rounded-2xl border transition-all ${
              selected === "A"
                ? "bg-cyan-500 text-black border-cyan-400"
                : "bg-zinc-950 border-zinc-800 hover:border-cyan-400"
            }`}
          >
            Hyper Text Markup Language
          </button>

          <button
            onClick={() => setSelected("B")}
            className={`p-5 rounded-2xl border transition-all ${
              selected === "B"
                ? "bg-cyan-500 text-black border-cyan-400"
                : "bg-zinc-950 border-zinc-800 hover:border-cyan-400"
            }`}
          >
            High Transfer Machine Language
          </button>

          <button
            onClick={() => setSelected("C")}
            className={`p-5 rounded-2xl border transition-all ${
              selected === "C"
                ? "bg-cyan-500 text-black border-cyan-400"
                : "bg-zinc-950 border-zinc-800 hover:border-cyan-400"
            }`}
          >
            Hyperlink Transfer Mark Language
          </button>

        </div>

        {selected && (
          <div
            className={`mt-8 p-5 rounded-2xl font-semibold text-lg ${
              selected === correctAnswer
                ? "bg-green-500 text-black"
                : "bg-red-500 text-black"
            }`}
          >
            {selected === correctAnswer
              ? "✅ Correct Answer!"
              : "❌ Wrong Answer. Try Again!"}
          </div>
        )}

      </div>
    </>
  );
}