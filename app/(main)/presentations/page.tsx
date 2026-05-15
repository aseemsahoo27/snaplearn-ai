"use client";

import { useState } from "react";

import PageHeader from "@/components/PageHeader";

export default function PresentationPage() {

  const [topic, setTopic] =
    useState("");

  return (
    <main className="min-h-screen text-white">

      <PageHeader
        title="AI Presentation Generator 📊"
        description="Generate beautiful AI-powered presentations instantly."
      />

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h2 className="text-3xl font-bold text-cyan-400">
          Create Presentation
        </h2>

        <p className="mt-4 text-zinc-400">
          Enter a topic and SnapLearn AI will generate presentation ideas automatically.
        </p>

        <input
          type="text"

          value={topic}

          onChange={(e) =>
            setTopic(e.target.value)
          }

          placeholder="Example: Solar System"

          className="w-full mt-8 bg-zinc-950 border border-zinc-700 rounded-2xl p-5 outline-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <button className="bg-cyan-500 hover:bg-cyan-400 transition-all p-5 rounded-2xl text-black font-semibold">
            Modern Theme
          </button>

          <button className="bg-purple-500 hover:bg-purple-400 transition-all p-5 rounded-2xl text-white font-semibold">
            Education Theme
          </button>

          <button className="bg-pink-500 hover:bg-pink-400 transition-all p-5 rounded-2xl text-white font-semibold">
            Creative Theme
          </button>

        </div>

        <button className="mt-10 bg-cyan-500 hover:bg-cyan-400 transition-all px-10 py-5 rounded-2xl text-black font-bold text-lg">
          Generate Presentation
        </button>

      </div>

      {/* GENERATED PREVIEW */}
      <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h2 className="text-3xl font-bold text-cyan-400">
          AI Preview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 h-56">

            <h3 className="text-2xl font-bold">
              Slide 1
            </h3>

            <p className="mt-4 text-zinc-400">
              Introduction and overview.
            </p>

          </div>

          <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 h-56">

            <h3 className="text-2xl font-bold">
              Slide 2
            </h3>

            <p className="mt-4 text-zinc-400">
              Main concepts and explanation.
            </p>

          </div>

          <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 h-56">

            <h3 className="text-2xl font-bold">
              Slide 3
            </h3>

            <p className="mt-4 text-zinc-400">
              Summary and conclusion.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}