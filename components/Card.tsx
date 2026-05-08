interface CardProps {
  title: string;
  description: string;
  href?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  href,
  children,
}: CardProps) {
  return (
    <a
      href={href}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300 block"
    >

      {children}

      <h3 className="text-2xl font-semibold text-cyan-400 mt-4">
        {title}
      </h3>

      <p className="mt-4 text-zinc-400 leading-relaxed">
        {description}
      </p>

    </a>
  );
}