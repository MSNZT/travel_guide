"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menuOptions = [
  {
    text: "All tours",
    href: "/tours",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Plan your trip",
    href: "/trip-planner",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/tours" className="flex items-center gap-2">
          <span className="text-sm font-semibold text-blue-700">Russia Uncovered</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuOptions.map((menuItem) => (
            <Link
              key={menuItem.href}
              href={menuItem.href}
              className={clsx(
                "relative hover:text-blue-600 transition",
                pathname === menuItem.href &&
                  "after:absolute after:content-[''] after:left-0 after:w-full after:-bottom-2 after:h-px after:bg-blue-600"
              )}>
              {menuItem.text}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-2 py-1 text-xs"
          aria-label="Открыть меню"
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
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <nav className="px-4 py-3 space-y-2 text-sm">
          {menuOptions.map((menuItem) => (
            <Link
              key={menuItem.href}
              href={menuItem.href}
              className={clsx("block py-1 hover:text-blue-600", { "border-b-2": pathname === menuItem.href })}>
              {menuItem.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
