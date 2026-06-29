import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { Target, BookOpen } from "lucide-react";

export function SectionCta() {
  return (
    <SectionWrapper id="cta" className="bg-muted/30">
      <h2 className="text-3xl font-bold mb-2">Next Steps</h2>
      <p className="text-muted-foreground mb-8">
        Identify accounts experiencing AI cost pain and engage with the right
        positioning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Signals card */}
        <Card className="border-t-4 border-t-[#0176D3]">
          <CardHeader>
            <div className="p-2 rounded-lg bg-[#0176D3]/10 w-fit mb-2">
              <Target className="h-5 w-5 text-[#0176D3]" />
            </div>
            <CardTitle className="text-lg">Identify Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Signals that an account is hitting the AI cost wall:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3] mt-2 shrink-0" />
                <span>Engineering-heavy accounts (5,000+ devs)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3] mt-2 shrink-0" />
                <span>Companies with public AI cost stories or hiring freezes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3] mt-2 shrink-0" />
                <span>Accounts that recently hired &ldquo;AI Platform&rdquo; teams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3] mt-2 shrink-0" />
                <span>Prospects asking about token governance or AI cost controls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3] mt-2 shrink-0" />
                <span>Customers using Salesforce CLI + Claude to query records directly</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Resources card */}
        <Card className="border-t-4 border-t-teal-500">
          <CardHeader>
            <div className="p-2 rounded-lg bg-teal-500/10 w-fit mb-2">
              <BookOpen className="h-5 w-5 text-teal-500" />
            </div>
            <CardTitle className="text-lg">Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Supporting materials for AI cost conversations:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                <span>Agentforce Coworker Customer Pitch Deck</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                <span>Agentforce Coworker GTM Playbook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                <span>Headless 360 Architecture Overview</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                <span>Slack + MCP Integration Guide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                <span>PUPM vs. Token Pricing Comparison Calculator</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Bottom callout */}
      <div className="rounded-xl bg-gradient-to-r from-[#032D60] to-[#0176D3] p-8 text-white">
        <p className="text-lg font-medium mb-2">The macro bet</p>
        <p className="text-white/80">
          Every enterprise will hit an AI cost wall. The ones who adopt
          architectural solutions early will outperform. Position Salesforce as
          the answer before competitors frame themselves as the &ldquo;AI cost
          governance&rdquo; layer. We&apos;re not just selling AI features —
          we&apos;re providing the financial and architectural guardrails to save
          companies from the Tokenpocalypse.
        </p>
      </div>
    </SectionWrapper>
  );
}
