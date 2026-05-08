export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          SnapLearn
        </h1>

        <div className="flex gap-6 text-zinc-300">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h2 className="text-6xl font-bold text-cyan-400 max-w-4xl leading-tight">
          Safe AI Learning Platform For Students
        </h2>

        <p className="mt-6 text-zinc-400 text-xl max-w-2xl">
          Learn, create, explore AI, generate images, take quizzes,
          and study safely in one powerful ecosystem.
        </p>

        <a
        href="/login"
        className="mt-10 px-8 py-4 bg-cyan-500 rounded-2xl text-lg hover:bg-cyan-400 transition-all"
        >
          Get started
        </a>

      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-24">

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-semibold text-cyan-400">
            AI Tutor
          </h3>

          <p className="mt-4 text-zinc-400">
            Homework help, summaries, quizzes, coding help and learning support.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-semibold text-cyan-400">
            Creative Studio
          </h3>

          <p className="mt-4 text-zinc-400">
            Generate AI images, anime styles, posters and creative projects safely.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <h3 className="text-2xl font-semibold text-cyan-400">
            Safe Environment
          </h3>

          <p className="mt-4 text-zinc-400">
            No adult content, no harmful material, no unsafe AI experiences.
          </p>
        </div>

      </section>

    </main>
  );
}