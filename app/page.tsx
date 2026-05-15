export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        SnapLearn
      </h1>

      <p className="text-gray-300 text-center max-w-2xl text-lg mb-8">
        Safe AI-powered learning ecosystem for students aged 10–17.
        Learn smarter with AI tutoring, quizzes, presentations,
        creative tools, and healthy digital experiences.
      </p>

      <div className="flex gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
          Get Started
        </button>

        <button className="border border-purple-500 hover:bg-purple-500/20 px-6 py-3 rounded-xl font-semibold transition">
          Learn More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
        
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-2">AI Tutor</h2>
          <p className="text-gray-400">
            Homework help, summaries, quizzes, and study guidance.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-2">Creative Studio</h2>
          <p className="text-gray-400">
            AI image generation, anime styles, safe photo editing, and more.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-2">Safe Learning</h2>
          <p className="text-gray-400">
            Child-safe AI environment with healthy digital experiences.
          </p>
        </div>

      </div>

    </main>
  );
}