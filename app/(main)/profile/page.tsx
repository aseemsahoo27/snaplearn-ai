import PageHeader from "@/components/PageHeader";

import {
  Trophy,
  Flame,
  Star,
  BookOpen
} from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        title="Student Profile 👨‍🎓"
        description="Track your learning journey and achievements."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <Flame size={40} className="text-orange-400" />

          <h2 className="text-3xl font-bold mt-4">
            12
          </h2>

          <p className="text-zinc-400 mt-2">
            Day Streak
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <Star size={40} className="text-yellow-400" />

          <h2 className="text-3xl font-bold mt-4">
            2450
          </h2>

          <p className="text-zinc-400 mt-2">
            XP Earned
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <BookOpen size={40} className="text-cyan-400" />

          <h2 className="text-3xl font-bold mt-4">
            48
          </h2>

          <p className="text-zinc-400 mt-2">
            Lessons Completed
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <Trophy size={40} className="text-green-400" />

          <h2 className="text-3xl font-bold mt-4">
            8
          </h2>

          <p className="text-zinc-400 mt-2">
            Achievements
          </p>
        </div>

      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h2 className="text-3xl font-bold text-cyan-400">
          Latest Achievement 🏆
        </h2>

        <p className="mt-4 text-zinc-300 text-lg">
          You completed 10 quizzes in a row and unlocked the
          <span className="text-cyan-400 font-semibold">
            {" "}Quiz Master Badge
          </span>.
        </p>

      </div>
    </>
  );
}