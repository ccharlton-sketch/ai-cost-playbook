import { SectionWrapper } from "./section-wrapper";

export function SectionConclusion() {
  return (
    <SectionWrapper id="conclusion" className="pb-64">
      <h2 className="text-3xl font-bold mb-2">Conclusion</h2>
      <p className="text-muted-foreground mb-8">
        The Tokenpocalypse is here. Salesforce is the fix.
      </p>

      <div className="space-y-4 text-sm mb-10">
        <p>
          Every enterprise that gave unrestricted frontier model access hit a
          cost wall within 6 months. Per-token prices fell — but consumption per
          task exploded. The math doesn&apos;t work without an orchestration
          layer.
        </p>
        <p>
          Salesforce provides three paths out — each matched to how the customer
          actually works:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="rounded-lg border p-5">
          <p className="font-semibold mb-1">Agentforce Coworker</p>
          <p className="text-sm text-muted-foreground">
            For anyone querying data. Any surface. Predictable PUPM.
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <p className="font-semibold mb-1">Slackbot + MCP</p>
          <p className="text-sm text-muted-foreground">
            For Slack-first teams. Multi-system. Unmetered.
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <p className="font-semibold mb-1">Claude + SF MCP + Agentforce</p>
          <p className="text-sm text-muted-foreground">
            Keep your tools. Cut costs by 2/3. Flex or fixed.
          </p>
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-l-[#0176D3] bg-muted/50 p-6">
        <p className="text-sm">
          The question isn&apos;t whether your customers will hit the AI cost
          wall. It&apos;s whether Salesforce is positioned as the solution when
          they do — or if a competitor gets there first.
        </p>
      </div>
    </SectionWrapper>
  );
}
