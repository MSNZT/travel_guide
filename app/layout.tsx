import type React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Russia Uncovered - Travel Guide",
  description: "Discover Russia: authentic travel guides to regions, nature, culture and hidden gems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${manrope.className}`}>
        {children}
        <footer className="bg-white py-8 border-t">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© Russia Uncovered. Вся информация на сайте защищена авторскими правами.</p>
            <p>Некоммерческий проект для путешественников</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
