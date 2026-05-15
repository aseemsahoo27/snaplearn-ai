"use client";

import { useState } from "react";

import PageHeader from "@/components/PageHeader";

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}
      <PageHeader
        title="Quiz Arena 🧠"
        description="Practice quizzes, earn XP and improve your knowledge daily."
      />

      {/* QUIZ CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* SCIENCE */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition-all">

          <h2 className="text-3xl font-bold text-cyan-400">
            Science Quiz
          </h2>

          <p className="mt-4 text-zinc-400 leading-8">
            Test your knowledge in physics,
            chemistry and biology.
          </p>

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition-all px-6 py-4 rounded-2xl text-black font-semibold">
            Start Quiz
          </button>

        </div>

        {/* MATH */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition-all">

          <h2 className="text-3xl font-bold text-cyan-400">
            Math Quiz
          </h2>

          <p className="mt-4 text-zinc-400 leading-8">
            Improve calculations, logic
            and problem-solving skills.
          </p>

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition-all px-6 py-4 rounded-2xl text-black font-semibold">
            Start Quiz
          </button>

        </div>

        {/* HISTORY */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition-all">

          <h2 className="text-3xl font-bold text-cyan-400">
            History Quiz
          </h2>

          <p className="mt-4 text-zinc-400 leading-8">
            Explore world history,
            civilizations and important events.
          </p>

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition-all px-6 py-4 rounded-2xl text-black font-semibold">
            Start Quiz
          </button>

        </div>

      </div>

      {/* XP SECTION */}
      <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-3xl font-bold text-cyan-400">
          Your Progress 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-zinc-800 rounded-2xl p-6">
            🔥 7 Day Streak
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            🧠 XP: 1240
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            🏆 Rank: Explorer
          </div>

        </div>

      </div>

    </main>
  );
}