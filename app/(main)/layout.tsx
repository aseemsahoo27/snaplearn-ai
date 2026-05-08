import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <section className="flex-1 p-6 md:p-10">

        <Topbar />

        {children}

      </section>

    </main>
  );
}