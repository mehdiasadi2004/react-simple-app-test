import { Link } from "@heroui/link";

import { Navbar } from "@/components/header/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col w-screen min-h-screen">
      <Navbar />
      <main className="w-full h-[90%]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
