"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function RootShell({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div suppressHydrationWarning>{children}</div>
      {!isAdminRoute && <Footer />}
    </>
  );
}
