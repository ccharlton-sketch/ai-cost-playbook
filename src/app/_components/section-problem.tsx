import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { StatCallout } from "./stat-callout";
import { AlertTriangle, Database, Zap } from "lucide-react";

const problems = [
  {
    icon: Zap,
    title: "ReAct Model Burn",
    description:
      "Every CRM query now triggers 10-50 LLM calls as agents reason, plan, and retry. A simple \"find my pipeline\" becomes a 200K token operation. The Harness pattern amplifies this — each tool call is another round trip through the model.",
  },
  {
    icon: Database,
    title: "Context Window Cramming",
    description:
      "Teams shove entire documents, schemas, and conversation history into prompts. PDFs to slides. Slack threads to summaries. Non-technical users especially — Accenture found consultants burning more tokens than engineers.",
  },
  {
    icon: AlertTriangle,
    title: "No Architectural Guardrails",
    description:
      "Raw API access means zero cost governance. No caching, no deduplication, no intelligent routing. Every request pays full freight through frontier models regardless of task complexity.",
  },
];

export function SectionProblem() {
  return (
    <SectionWrapper id="problem">
      <h2 className="text-3xl font-bold mb-2">The Token Cost Illusion</h2>
      <p className="text-muted-foreground mb-8">
        Per-token prices are falling. Total AI spend is exploding. Here&apos;s why.
      </p>

      {/* Stat row */}
      <div className="rounded-xl bg-gradient-to-r from-[#0176D3]/5 to-[#1B96FF]/5 border p-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCallout value="-75%" label="Per-token price drop (2024–2026)" />
          <StatCallout
            value="1,000x"
            label="Consumption increase per task (agentic)"
          />
          <StatCallout
            value="$500–2K"
            label="Uncontrolled monthly cost per user (any role)"
          />
        </div>
      </div>

      {/* Problem cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {problems.map((problem) => (
          <Card key={problem.title} className="h-full">
            <CardContent className="pt-6">
              <div className="p-2 rounded-lg bg-[#0176D3]/10 w-fit mb-4">
                <problem.icon className="h-5 w-5 text-[#0176D3]" />
              </div>
              <h3 className="font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom callout */}
      <div className="rounded-lg border-l-4 border-l-[#0176D3] bg-muted/50 p-6">
        <p className="text-sm">
          <span className="font-semibold">The CFO question you&apos;ll hear:</span>{" "}
          &ldquo;We were told AI would save money. Why is our AI bill 10x what
          was budgeted?&rdquo;
        </p>
      </div>
    </SectionWrapper>
  );
}
