import type React from "react";
import type { Metadata } from "next";
import { MainHeader } from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "Russia Uncovered - Travel Guide",
  description: "Discover Russia: authentic travel guides to regions, nature, culture and hidden gems",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="bg-white">{children}</main>
    </>
  );
}
