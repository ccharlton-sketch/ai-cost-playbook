"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "problem", label: "The Cost Illusion" },
  { id: "examples", label: "Public Examples" },
  { id: "shift", label: "The Shift" },
  { id: "coworker", label: "Agentforce Coworker" },
  { id: "slackbot", label: "Slackbot + MCP" },
  { id: "agentforce", label: "Claude + Agentforce" },
  { id: "conclusion", label: "Conclusion" },
];

interface StickyNavProps {
  activeSection: string;
}

export function StickyNav({ activeSection }: StickyNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-60 bg-white border-r shadow-sm z-40 pt-20 px-4 transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            AI Cost Playbook
          </h2>
        </div>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === section.id
                    ? "bg-[#0176D3]/10 text-[#0176D3] font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span>{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
