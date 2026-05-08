import Card from "@/components/Card";

import PageHeader from "@/components/PageHeader";

import {
  MessageSquare,
  Palette,
  Brain
} from "lucide-react";

const dashboardCards = [
  {
    title: "AI Tutor",
    description:
      "Ask questions, solve homework and generate summaries.",
    href: "/chat",
    icon: MessageSquare,
  },

  {
    title: "Creative Studio",
    description:
      "Generate images, anime styles and safe AI creativity.",
    href: "/creative",
    icon: Palette,
  },

  {
    title: "Quiz Arena",
    description:
      "Practice quizzes, gain XP and improve your knowledge.",
    href: "/quiz",
    icon: Brain,
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Welcome Back 👋"
        description="Continue learning safely with AI-powered tools."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        {dashboardCards.map((card) => {
          const Icon = card.icon;

          return (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
            >
              <Icon
                size={40}
                className="text-cyan-400"
              />
            </Card>
          );
        })}

      </div>
    </>
  );
}