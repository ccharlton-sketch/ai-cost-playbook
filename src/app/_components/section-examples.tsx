import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SectionWrapper } from "./section-wrapper";
import { Ban, DollarSign, TrendingDown, Users } from "lucide-react";

const examples = [
  {
    icon: DollarSign,
    title: "Uber: Entire 2026 AI Budget Burned by April",
    description:
      "Encouraged employees to use AI as heavily as possible. Claude Code and Cursor IDE adoption rocketed from 32% to 84% across 5,000 engineers. API token costs jumped to $500–$2,000/engineer/month. Entire 2026 budget depleted in 4 months — CTO forced to implement strict token caps.",
    severity: "high" as const,
  },
  {
    icon: Users,
    title: "Accenture: Non-Technical Workers = Highest Token Bills",
    description:
      "Leaked internal audio revealed it wasn't software engineers driving costs — it was non-technical workers. Consultants feeding massive PDFs and dense data files into Claude for trivial administrative tasks like converting documents to slides. Massive, unmonitored consumption surge.",
    severity: "high" as const,
  },
  {
    icon: Ban,
    title: "Walmart: Hard Caps on Token Usage",
    description:
      "Aggressively pushed AI adoption with internal coding and productivity platforms. Global CTO reported usage \"really skyrocketed.\" Company had to implement hard per-user and per-team token limits to prevent the experiment from eating into the bottom line.",
    severity: "medium" as const,
  },
  {
    icon: TrendingDown,
    title: "Amazon: Internal AI Leaderboard Shut Down",
    description:
      "Gamified AI adoption with a department leaderboard tracking token consumption. Completely backfired — created \"tokenmaxxing\" culture where employees triggered massive autonomous loops just to climb the board. Leadership shut it down: \"Please don't use AI just for the sake of using AI.\"",
    severity: "medium" as const,
  },
];

const severityStyles = {
  high: "border-red-200 bg-red-50/50 [&>svg]:text-red-600",
  medium: "border-amber-200 bg-amber-50/50 [&>svg]:text-amber-600",
  low: "border-blue-200 bg-blue-50/50 [&>svg]:text-blue-600",
};

export function SectionExamples() {
  return (
    <SectionWrapper id="examples" className="bg-muted/30">
      <h2 className="text-3xl font-bold mb-2">The Tokenmaxxing Wall</h2>
      <p className="text-muted-foreground mb-8">
        Four public examples of enterprises hitting runaway AI costs in 2026.
        Use these in customer conversations to establish credibility.
      </p>

      <div className="space-y-4 mb-10">
        {examples.map((item) => (
          <Alert key={item.title} className={severityStyles[item.severity]}>
            <item.icon className="h-5 w-5" />
            <AlertTitle className="font-semibold">{item.title}</AlertTitle>
            <AlertDescription className="text-sm mt-1">
              {item.description}
            </AlertDescription>
          </Alert>
        ))}
      </div>

      {/* Summary */}
      <div className="rounded-lg border-l-4 border-l-[#0176D3] bg-white p-6">
        <p className="text-sm">
          <span className="font-semibold">The pattern:</span> Every company that
          gave unrestricted frontier model access hit a cost wall within 6
          months. The question isn&apos;t IF your prospects will hit this wall — it&apos;s
          whether they&apos;ve hit it yet.
        </p>
      </div>
    </SectionWrapper>
  );
}
