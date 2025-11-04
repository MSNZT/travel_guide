"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
};

export function ScrollReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // небольшая задержка для каскада
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const base = "transition-all duration-700 ease-out transform will-change-transform will-change-opacity";
  const state = visible ? "opacity-100 -translate-y-4" : "opacity-0 translate-y-6";

  return (
    <div ref={ref} className={`${base} ${state} ${className}`}>
      {children}
    </div>
  );
}
