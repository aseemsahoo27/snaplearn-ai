interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <>
      <h1 className="text-5xl font-bold text-cyan-400">
        {title}
      </h1>

      <p className="mt-4 text-zinc-400 text-lg">
        {description}
      </p>
    </>
  );
}