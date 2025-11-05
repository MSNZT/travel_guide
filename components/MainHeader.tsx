"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" scroll={true} className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="#regions" scroll={true} className="hover:text-blue-600 transition">
            Destinations
          </Link>
          <Link href="#highlights" scroll={true} className="hover:text-blue-600 transition">
            Travel ideas
          </Link>
        </nav>

        <div className="flex flex-col items-center text-center">
          <span className="text-xs tracking-wide font-semibold text-blue-700 uppercase">Russia Uncovered</span>
          <span className="text-[11px] text-slate-500">Travel guide to Russia</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#tips" className="hover:text-blue-600 transition">
            Tips
          </Link>
          <Link href="#culture" className="hover:text-blue-600 transition">
            Planning
          </Link>
          <Link href="#contacts" className="hover:text-blue-600 transition">
            Contacts
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-2 py-1 text-xs"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm transition-[max-height,opacity] duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <nav className="px-4 py-3 space-y-2 text-sm">
          <Link href="#home" className="block py-1 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#regions" className="block py-1 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Destinations
          </Link>
          <Link href="#highlights" className="block py-1 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Travel ideas
          </Link>
          <Link href="#culture" className="block py-1 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Trip planning
          </Link>
          <Link href="#contacts" className="block py-1 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Contacts
          </Link>

          <div className="pt-3 border-t border-slate-200 mt-2">
            <Link
              href="/tours"
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
              Find a tour
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
