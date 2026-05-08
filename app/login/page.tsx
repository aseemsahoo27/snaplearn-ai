export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">

        <h1 className="text-4xl font-bold text-cyan-400">
          SnapLearn
        </h1>

        <div className="flex gap-6 text-zinc-300">

          <a href="/" className="hover:text-cyan-400 transition-all">
            Home
          </a>

          <a href="/dashboard" className="hover:text-cyan-400 transition-all">
            Dashboard
          </a>

          <a href="/login" className="hover:text-cyan-400 transition-all">
            Login
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-28">

        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <h1 className="relative text-6xl md:text-7xl font-extrabold text-cyan-400 leading-tight max-w-5xl">
          Safe AI Learning Platform For Students
        </h1>

        <p className="relative mt-8 text-zinc-400 text-xl max-w-3xl leading-relaxed">
          Learn, create, explore AI, generate images,
          practice quizzes and study safely in one powerful ecosystem.
        </p>

        <a
          href="/dashboard"
          className="relative mt-10 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 rounded-2xl text-black text-lg font-semibold shadow-cyan-500/30 shadow-2xl"
        >
          Launch Dashboard
        </a>

      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 mt-32 pb-20">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-cyan-400 hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">

          <h2 className="text-3xl font-bold text-cyan-400">
            AI Tutor
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Ask questions, solve homework,
            generate summaries and learn faster safely.
          </p>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-cyan-400 hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">

          <h2 className="text-3xl font-bold text-cyan-400">
            Creative Studio
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Generate images, anime art,
            AI creativity tools and safe media projects.
          </p>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-cyan-400 hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">

          <h2 className="text-3xl font-bold text-cyan-400">
            Quiz Arena
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Practice quizzes, gain XP,
            maintain streaks and improve knowledge daily.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">

        © 2026 SnapLearn. Built for safe AI education.

      </footer>

    </main>
  );
}