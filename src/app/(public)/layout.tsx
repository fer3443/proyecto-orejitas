import { Footer, Navbar } from "@/components";
import { UserInitProvider } from "@/components/users/UserInitProvider";

export default function PetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <UserInitProvider/>
      <Navbar />
      <div className="max-w-7xl mx-auto">{children}</div>
      <Footer/>
    </main>
  );
}
