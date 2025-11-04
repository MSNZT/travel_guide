"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-6 sm:mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
        <li className="flex items-center gap-1 min-w-0 max-w-[60%] sm:max-w-none">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium transition truncate">
            Главная
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1 min-w-0 max-w-[60%] sm:max-w-none">
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="text-slate-600 font-medium truncate sm:whitespace-normal">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-700 transition truncate sm:whitespace-normal">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
