"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  MessageSquare,
  Palette,
  Brain,
  User,
  Menu,
  X
} from "lucide-react";

export default function Sidebar() {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between p-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          SnapLearn
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6 w-64 transition-all duration-300 ${
          open
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >

        <h1 className="text-3xl font-bold text-cyan-400 mb-10 mt-16 md:mt-0">
          SnapLearn
        </h1>

        <nav className="flex flex-col gap-6">

          <a
            href="/dashboard"
            className={`flex items-center gap-3 transition-all ${
              pathname === "/dashboard"
                ? "text-cyan-400"
                : "text-zinc-300 hover:text-cyan-400"
            }`}
          >
            <LayoutDashboard size={22} />
            Dashboard
          </a>

          <a
            href="/chat"
            className={`flex items-center gap-3 transition-all ${
              pathname === "/chat"
                ? "text-cyan-400"
                : "text-zinc-300 hover:text-cyan-400"
            }`}
          >
            <MessageSquare size={22} />
            AI Tutor
          </a>

          <a
            href="/creative"
            className={`flex items-center gap-3 transition-all ${
              pathname === "/creative"
                ? "text-cyan-400"
                : "text-zinc-300 hover:text-cyan-400"
            }`}
          >
            <Palette size={22} />
            Creative Studio
          </a>

          <a
            href="/quiz"
            className={`flex items-center gap-3 transition-all ${
              pathname === "/quiz"
                ? "text-cyan-400"
                : "text-zinc-300 hover:text-cyan-400"
            }`}
          >
            <Brain size={22} />
            Quiz Arena
          </a>

          <a
            href="/profile"
            className={`flex items-center gap-3 transition-all ${
              pathname === "/profile"
                ? "text-cyan-400"
                : "text-zinc-300 hover:text-cyan-400"
            }`}
          >
            <User size={22} />
            Profile
          </a>

        </nav>

      </aside>
    </>
  );
}