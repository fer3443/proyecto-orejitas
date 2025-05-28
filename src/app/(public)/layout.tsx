import { Footer, Navbar } from "@/components";

export default function PetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-3 lg:px-0">{children}</div>
      <Footer/>
    </main>
  );
}
