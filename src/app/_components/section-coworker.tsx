import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionWrapper } from "./section-wrapper";
import { StatCallout } from "./stat-callout";
import {
  MessageSquare,
  Shield,
  Zap,
  Users,
  Monitor,
  Hash,
} from "lucide-react";

const surfaces = [
  { icon: Monitor, label: "Salesforce Lightning", description: "Native CRM experience" },
  { icon: Hash, label: "Slack", description: "Where work happens" },
  { icon: MessageSquare, label: "Microsoft Teams", description: "Enterprise comms" },
  { icon: MessageSquare, label: "ChatGPT", description: "If that's their tool" },
  { icon: MessageSquare, label: "Claude", description: "Anthropic surface" },
];

const pricingFit = [
  {
    situation: "Unmetered Users (A1E / A4X)",
    fit: "Ideal",
    description: "Coworker included — just assign the permission set and go. Predictable cost, instant scale.",
    color: "text-green-600",
  },
  {
    situation: "AELA (Agentforce Enterprise License)",
    fit: "Ideal",
    description: "Bundled access. Turn on Coworker org-wide without per-user cost conversations.",
    color: "text-green-600",
  },
  {
    situation: "Pure Consumption / Flex Credits",
    fit: "Paid POC",
    description: "Costs may be similar to raw API spend. Position as a paid proof-of-concept — prove value, then convert to AELA or unmetered for wall-to-wall deployment.",
    color: "text-amber-600",
  },
];

export function SectionCoworker() {
  return (
    <SectionWrapper id="coworker" className="bg-muted/30">
      <div className="flex items-center gap-3 mb-6">
        <Badge className="bg-[#0176D3] text-white text-sm px-3 py-1">
          Option 1
        </Badge>
        <h2 className="text-3xl font-bold">Agentforce Coworker</h2>
      </div>

      {/* Key value prop */}
      <div className="rounded-xl bg-gradient-to-r from-[#032D60] to-[#0176D3] p-8 mb-8 text-white">
        <p className="text-lg font-medium mb-2">
          One AI assistant across every surface — governed, cached, and priced
          predictably.
        </p>
        <p className="text-white/80">
          Coworker lives in Salesforce but surfaces wherever your customer&apos;s
          team already works. They choose the engagement surface — Salesforce,
          Slack, Teams, ChatGPT, or Claude. The orchestration, data access,
          and cost governance happen behind the scenes regardless of where the
          question is asked.
        </p>
      </div>

      {/* Multi-surface */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">
          Choose Your Surface for Engagement
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {surfaces.map((s) => (
            <Card key={s.label} className="text-center">
              <CardContent className="pt-4 pb-3">
                <div className="p-2 rounded-lg bg-[#0176D3]/10 w-fit mx-auto mb-2">
                  <s.icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <p className="text-sm font-medium">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key advantages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="p-2 rounded-lg bg-green-100 w-fit mb-3">
              <Zap className="h-5 w-5 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2">Permission Set Activation</h4>
            <p className="text-sm text-muted-foreground">
              No API keys to manage, no infrastructure to build. Assign a
              permission set and users have access immediately. Time to live:
              minutes, not months.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="p-2 rounded-lg bg-blue-100 w-fit mb-3">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2">Built-in Cost Governance</h4>
            <p className="text-sm text-muted-foreground">
              No token budgets to manage. The platform handles model routing,
              caching, and retrieval optimization. Users never see or touch
              tokens — the CFO never gets a surprise bill.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="p-2 rounded-lg bg-purple-100 w-fit mb-3">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2">300+ Data Sources Connected</h4>
            <p className="text-sm text-muted-foreground">
              No context cramming. Coworker has structured access to CRM,
              Slack, docs, and external systems via Data 360. Answers come from
              retrieval, not from stuffing PDFs into a prompt.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Pricing / Licensing fit */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">Licensing Fit</h4>
        <div className="rounded-lg border bg-white overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Customer SKU</TableHead>
                <TableHead className="font-semibold">Fit</TableHead>
                <TableHead className="font-semibold">Positioning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingFit.map((p) => (
                <TableRow key={p.situation}>
                  <TableCell className="text-sm font-medium">
                    {p.situation}
                  </TableCell>
                  <TableCell className={`text-sm font-semibold ${p.color}`}>
                    {p.fit}
                  </TableCell>
                  <TableCell className="text-sm">
                    {p.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Stat comparison */}
      <div className="rounded-xl bg-gradient-to-r from-[#0176D3]/5 to-[#1B96FF]/5 border p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <StatCallout value="Minutes" label="Time to go live (permission set)" />
          <StatCallout value="300+" label="Data sources pre-connected" />
          <StatCallout value="$0" label="Token budget management overhead" />
        </div>
      </div>
    </SectionWrapper>
  );
}
