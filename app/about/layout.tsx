import type React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Russia Uncovered - About",
  description: "Discover Russia: authentic travel guides to regions, nature, culture and hidden gems",
};

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="bg-white">{children}</main>
    </>
  );
}
