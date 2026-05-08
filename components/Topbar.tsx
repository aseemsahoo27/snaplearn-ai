"use client";

import { useState } from "react";

import {
  Bell,
  Search
} from "lucide-react";

export default function Topbar() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

      {/* Left */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="text-zinc-400 mt-2">
          Continue learning with SnapLearn AI.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl w-full md:w-80">

          <Search
            size={20}
            className="text-zinc-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white w-full"
          />

        </div>

        {/* Notification */}
        <button className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl hover:border-cyan-400 transition-all">
          <Bell size={22} />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);

            document.body.classList.toggle("bg-white");
            document.body.classList.toggle("text-black");
          }}
          className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-2xl hover:border-cyan-400 transition-all"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
          A
        </div>

      </div>

    </header>
  );
}