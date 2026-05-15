import PageHeader from "@/components/PageHeader";

export default function CreativePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <PageHeader
        title="Creative Studio 🎨"
        description="Generate AI images, anime art and creative projects safely."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

        {/* AI IMAGE GENERATOR */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            AI Image Generator
          </h2>

          <p className="mt-4 text-zinc-400">
            Create safe AI-generated educational and creative images.
          </p>

          <input
            type="text"
            placeholder="Describe your image..."
            className="w-full mt-8 bg-zinc-800 border border-zinc-700 rounded-2xl p-5 outline-none"
          />

          <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 transition-all px-8 py-4 rounded-2xl text-black font-semibold">
            Generate Image
          </button>

        </div>

        {/* ANIME GENERATOR */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            Anime Style Generator
          </h2>

          <p className="mt-4 text-zinc-400">
            Transform creative ideas into anime-inspired visuals safely.
          </p>

          <div className="mt-8 border-2 border-dashed border-zinc-700 rounded-3xl p-16 text-center text-zinc-500">
            Upload Image Area
          </div>

        </div>

      </div>

    </main>
  );
}