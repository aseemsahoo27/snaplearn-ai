"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

export default function SignupPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleSignup = async () => {

    setLoading(true);

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {

      setMessage(error.message);

    } else {

      setMessage(
        "Signup successful! Check your email."
      );

    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-cyan-400">
          Create Account
        </h1>

        <p className="mt-3 text-zinc-400">
          Join SnapLearn AI today.
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-5 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-5 outline-none"
          />

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-semibold py-4 rounded-2xl"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

          {message && (
            <p className="text-center text-zinc-400">
              {message}
            </p>
          )}

        </div>

      </div>

    </main>
  );
}