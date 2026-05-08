import PageHeader from "@/components/PageHeader";

export default function CreativePage() {
  return (
    <>
      <PageHeader
        title="AI Creative Tools 🎨"
        description="Generate safe AI images and creative projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-cyan-400 transition-all">

          <h3 className="text-2xl font-semibold text-cyan-400">
            Text to Image
          </h3>

          <p className="mt-4 text-zinc-400">
            Create AI-generated images safely using prompts.
          </p>

          <button className="mt-6 px-5 py-3 bg-cyan-500 rounded-xl text-black font-semibold">
            Generate
          </button>

        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-cyan-400 transition-all">

          <h3 className="text-2xl font-semibold text-cyan-400">
            Anime Style
          </h3>

          <p className="mt-4 text-zinc-400">
            Turn photos into anime or cartoon styled artwork.
          </p>

          <button className="mt-6 px-5 py-3 bg-cyan-500 rounded-xl text-black font-semibold">
            Try Now
          </button>

        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-cyan-400 transition-all">

          <h3 className="text-2xl font-semibold text-cyan-400">
            Image to Video
          </h3>

          <p className="mt-4 text-zinc-400">
            Convert images into short AI-generated videos.
          </p>

          <button className="mt-6 px-5 py-3 bg-cyan-500 rounded-xl text-black font-semibold">
            Create Video
          </button>

        </div>

      </div>
    </>
  );
}