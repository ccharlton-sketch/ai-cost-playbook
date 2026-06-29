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
  Plug,
  Database,
} from "lucide-react";

export function SectionAgentforce() {
  return (
    <SectionWrapper id="agentforce" className="bg-muted/30">
      <div className="flex items-center gap-3 mb-6">
        <Badge className="bg-amber-500 text-white text-sm px-3 py-1">
          Option 3
        </Badge>
        <h2 className="text-3xl font-bold">Claude + Salesforce MCP + Agentforce</h2>
      </div>

      {/* Key value prop */}
      <div className="rounded-xl bg-gradient-to-r from-amber-700 to-amber-500 p-8 mb-8 text-white">
        <p className="text-lg font-medium mb-2">
          Keep Claude. Cut the cost by 2/3.
        </p>
        <p className="text-white/80">
          For customers who don&apos;t want to buy a new product — they want to
          reduce what they&apos;re already spending. By offloading contextual
          weight from the LLM into purpose-built Agentforce actions, Claude
          orchestrates to Salesforce agents via MCP instead of reasoning
          through raw APIs. Same answers, 1/3 the token cost.
        </p>
      </div>

      {/* How it works */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">How It Works</h4>
        <div className="rounded-lg border bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <div className="p-3 rounded-lg bg-amber-100 w-fit mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-amber-600" />
              </div>
              <p className="text-sm font-semibold">Claude Code / AI Tool</p>
              <p className="text-xs text-muted-foreground mt-1">
                User asks a question via their existing AI tool
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl text-amber-400">&#x2192;</div>
              <p className="text-xs text-muted-foreground mt-1">
                Orchestrates via Salesforce MCP
              </p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-lg bg-amber-100 w-fit mx-auto mb-3">
                <Zap className="h-6 w-6 text-amber-600" />
              </div>
              <p className="text-sm font-semibold">Agentforce Agent</p>
              <p className="text-xs text-muted-foreground mt-1">
                Purpose-built actions (Flows/Apex) handle the heavy lifting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key advantages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="p-2 rounded-lg bg-amber-100 w-fit mb-3">
              <Database className="h-5 w-5 text-amber-600" />
            </div>
            <h4 className="font-semibold mb-2">1/3 the Token Cost</h4>
            <p className="text-sm text-muted-foreground">
              Tested side-by-side: Agentforce handles queries at 1/3 the cost
              of raw Claude. Contextual weight shifts into Agentforce actions
              instead of loading onto the LLM.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="p-2 rounded-lg bg-amber-100 w-fit mb-3">
              <Plug className="h-5 w-5 text-amber-600" />
            </div>
            <h4 className="font-semibold mb-2">Salesforce MCP Orchestration</h4>
            <p className="text-sm text-muted-foreground">
              Claude orchestrates to Agentforce agents via Salesforce MCP.
              Instead of 10-50 LLM tool calls to find a record, Claude calls
              one Agentforce action that already knows how to query it.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="p-2 rounded-lg bg-amber-100 w-fit mb-3">
              <Shield className="h-5 w-5 text-amber-600" />
            </div>
            <h4 className="font-semibold mb-2">Flexible Pricing</h4>
            <p className="text-sm text-muted-foreground">
              Pay-as-you-go with flex credits OR purchase PUPM unmetered
              up front. Both options are cheaper and more predictable than raw
              API consumption — assuming agents are built properly.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* What the customer needs to do */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">What the Customer Builds</h4>
        <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50/50 p-6">
          <p className="text-sm font-medium mb-3">
            This option requires the customer to build out specific Agentforce
            actions for the queries their users run most:
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5 font-bold">1.</span>
              <span>
                <span className="font-medium">Identify high-frequency queries</span>{" "}
                — What are users asking Claude today? Pipeline lookups? Account
                summaries? Case status? Each of these becomes an Agentforce action.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5 font-bold">2.</span>
              <span>
                <span className="font-medium">Build Flows or Apex actions</span>{" "}
                — Create the specific queries and logic as Salesforce Flows or
                Apex classes. These become the &ldquo;muscles&rdquo; that Agentforce executes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5 font-bold">3.</span>
              <span>
                <span className="font-medium">Wire into an Agentforce Agent</span>{" "}
                — Assemble the actions into an agent that Claude can call via
                Salesforce MCP. Claude becomes the orchestrator, Agentforce does
                the data work.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Licensing */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">Licensing Options</h4>
        <div className="rounded-lg border bg-white overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Model</TableHead>
                <TableHead className="font-semibold">Cost Profile</TableHead>
                <TableHead className="font-semibold">Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-sm font-medium">Flex Credits (pay-as-you-go)</TableCell>
                <TableCell className="text-sm">Cheaper than raw Claude — only pays for Agentforce actions consumed</TableCell>
                <TableCell className="text-sm">Teams that want to start small or validate before committing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm font-medium">PUPM Unmetered (up front)</TableCell>
                <TableCell className="text-sm">Predictable fixed cost, unlimited Agentforce usage</TableCell>
                <TableCell className="text-sm">Teams going wall-to-wall after proving the model works</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Stat row */}
      <div className="rounded-xl bg-gradient-to-r from-amber-500/5 to-amber-300/5 border p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <StatCallout value="1/3" label="Token cost vs. raw Claude (tested)" />
          <StatCallout value="MCP" label="Claude orchestrates to Agentforce" />
          <StatCallout value="Flex or PUPM" label="Pay-as-you-go or fixed cost" />
        </div>
      </div>

      {/* Ideal customer */}
      <div className="rounded-lg border-l-4 border-l-amber-500 bg-white p-6">
        <p className="text-sm">
          <span className="font-semibold">Ideal customer:</span> Already
          familiar with Agentforce Agents. Wants to reduce Claude/AI coding
          tool costs without buying a new product. Willing to invest in
          building purpose-built actions (Flows/Apex) for their most common
          queries. Technical teams that want to keep their existing AI
          tools but make them 3x cheaper.
        </p>
      </div>
    </SectionWrapper>
  );
}
