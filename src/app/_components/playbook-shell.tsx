"use client";

import { useEffect, useRef, useState } from "react";
import { StickyNav } from "./sticky-nav";

const sectionIds = [
  "hero",
  "problem",
  "examples",
  "shift",
  "coworker",
  "slackbot",
  "agentforce",
  "conclusion",
];

interface PlaybookShellProps {
  children: React.ReactNode;
}

export function PlaybookShell({ children }: PlaybookShellProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div>
      <StickyNav activeSection={activeSection} />
      <main className="lg:ml-60">
        <div className="scroll-smooth">{children}</div>
      </main>
    </div>
  );
}
