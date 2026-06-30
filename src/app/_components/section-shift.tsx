import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { StatCallout } from "./stat-callout";

export function SectionShift() {
  return (
    <SectionWrapper id="shift">
      <h2 className="text-3xl font-bold mb-2">Architecture-Driven AI</h2>
      <p className="text-muted-foreground mb-8">
        The macro shift: from &ldquo;give everyone API keys&rdquo; to
        &ldquo;build an intelligent architecture that routes, caches, and
        governs AI usage automatically.&rdquo;
      </p>

      {/* Key framing */}
      <div className="rounded-xl bg-gradient-to-r from-[#032D60] to-[#0176D3] p-8 mb-10 text-white">
        <p className="text-lg font-medium">
          The &ldquo;Tokenmaxxing&rdquo; era is over. CFOs and CIOs are
          demanding ROI. Companies are learning they can&apos;t let an expensive,
          unconstrained frontier model hit raw APIs directly. They need
          intelligent orchestration layers.
        </p>
      </div>

      {/* Two-column comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="border-t-4 border-t-red-400">
          <CardHeader>
            <CardTitle className="text-lg text-red-600">Token Chaos</CardTitle>
            <p className="text-xs text-muted-foreground">
              The current state for most enterprises
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">&#x2717;</span>
                <span>Raw API access per user — no mediation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">&#x2717;</span>
                <span>Every request hits frontier models regardless of task</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">&#x2717;</span>
                <span>No caching, deduplication, or structured retrieval</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">&#x2717;</span>
                <span>Per-token billing = unpredictable, escalating costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">&#x2717;</span>
                <span>Zero visibility into ROI per use case</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-[#0176D3]">
          <CardHeader>
            <CardTitle className="text-lg text-[#0176D3]">
              Orchestrated AI
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              Where Salesforce positions customers
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#0176D3] mt-1">&#x2713;</span>
                <span>Platform-mediated access with built-in guardrails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0176D3] mt-1">&#x2713;</span>
                <span>Intelligent routing — right model for right task</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0176D3] mt-1">&#x2713;</span>
                <span>Built-in caching and structured retrieval (Data 360)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0176D3] mt-1">&#x2713;</span>
                <span>PUPM pricing = predictable, budgetable costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0176D3] mt-1">&#x2713;</span>
                <span>Full observability, governance, and audit trail</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Stat comparison */}
      <div className="rounded-xl bg-gradient-to-r from-[#0176D3]/5 to-[#1B96FF]/5 border p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <StatCallout value="Unbounded" label="$500+/user/month with no ceiling" />
          <div className="text-center text-2xl font-bold text-muted-foreground">
            vs.
          </div>
          <StatCallout value="Predictable" label="Fixed PUPM or per-action pricing" />
        </div>
      </div>
    </SectionWrapper>
  );
}
