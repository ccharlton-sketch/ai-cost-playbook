import {
  Card,
  CardHeader,
  CardTitle,
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
  Plug,
  Database,
  FileText,
  Snowflake,
  CircleDot,
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

export function SectionSolutions() {
  return (
    <SectionWrapper id="solutions" className="bg-muted/30">
      <h2 className="text-3xl font-bold mb-2">Three Options for Predictable AI</h2>
      <p className="text-muted-foreground mb-8">
        Three distinct approaches — not tiers. Each solves the token cost
        problem differently depending on how the customer works.
      </p>

      {/* Option 1: Coworker — Full Detail */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge className="bg-[#0176D3] text-white text-sm px-3 py-1">
            Option 1
          </Badge>
          <h3 className="text-2xl font-bold">Agentforce Coworker</h3>
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
      </div>

      {/* Option 2: Slack + MCP — Full Detail */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Badge className="bg-teal-500 text-white text-sm px-3 py-1">
            Option 2
          </Badge>
          <h3 className="text-2xl font-bold">Slackbot + MCP</h3>
        </div>

        {/* Key value prop */}
        <div className="rounded-xl bg-gradient-to-r from-teal-700 to-teal-500 p-8 mb-8 text-white">
          <p className="text-lg font-medium mb-2">
            ChatGPT for Slack — but connected to everything.
          </p>
          <p className="text-white/80">
            Slackbot is a PUPM license add-on that turns the Slack sidebar into
            a full AI assistant. It&apos;s agnostic — plug in any MCP server
            (Salesforce, Jira, Confluence, Snowflake, and more) and users get
            answers from all their systems in one place. No raw API calls, no
            token budgets, no context cramming.
          </p>
        </div>

        {/* MCP Server grid */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">
            Bring Any MCP Server — It&apos;s Agnostic
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <Card className="text-center">
              <CardContent className="pt-4 pb-3">
                <div className="p-2 rounded-lg bg-teal-100 w-fit mx-auto mb-2">
                  <CircleDot className="h-5 w-5 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Salesforce</p>
                <p className="text-xs text-muted-foreground">CRM data</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4 pb-3">
                <div className="p-2 rounded-lg bg-teal-100 w-fit mx-auto mb-2">
                  <CircleDot className="h-5 w-5 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Jira</p>
                <p className="text-xs text-muted-foreground">Project tracking</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4 pb-3">
                <div className="p-2 rounded-lg bg-teal-100 w-fit mx-auto mb-2">
                  <FileText className="h-5 w-5 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Confluence</p>
                <p className="text-xs text-muted-foreground">Documentation</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4 pb-3">
                <div className="p-2 rounded-lg bg-teal-100 w-fit mx-auto mb-2">
                  <Snowflake className="h-5 w-5 text-teal-600" />
                </div>
                <p className="text-sm font-medium">Snowflake</p>
                <p className="text-xs text-muted-foreground">Data warehouse</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4 pb-3">
                <div className="p-2 rounded-lg bg-teal-100 w-fit mx-auto mb-2">
                  <Plug className="h-5 w-5 text-teal-600" />
                </div>
                <p className="text-sm font-medium">+ More</p>
                <p className="text-xs text-muted-foreground">Any MCP server</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="p-2 rounded-lg bg-teal-100 w-fit mb-3">
                <Hash className="h-5 w-5 text-teal-600" />
              </div>
              <h4 className="font-semibold mb-2">Lives Where Work Happens</h4>
              <p className="text-sm text-muted-foreground">
                AI lives in the Slack sidebar — the same place your customer&apos;s
                team already communicates, shares context, and makes decisions.
                Zero adoption curve. No new app to learn.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="p-2 rounded-lg bg-teal-100 w-fit mb-3">
                <Plug className="h-5 w-5 text-teal-600" />
              </div>
              <h4 className="font-semibold mb-2">Agnostic MCP Layer</h4>
              <p className="text-sm text-muted-foreground">
                Not locked to Salesforce data alone. Plug in any MCP server —
                Jira for tickets, Confluence for docs, Snowflake for analytics,
                Salesforce for CRM. One interface to query everything.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="p-2 rounded-lg bg-teal-100 w-fit mb-3">
                <Shield className="h-5 w-5 text-teal-600" />
              </div>
              <h4 className="font-semibold mb-2">Unmetered for Slackbot Users</h4>
              <p className="text-sm text-muted-foreground">
                Usage is included in the license — no per-token billing, no
                surprise costs. Users can ask as many questions as they want
                without anyone watching a meter.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why it solves token costs */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Why This Solves Token Costs</h4>
          <div className="rounded-lg border-l-4 border-l-teal-500 bg-teal-50/50 p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 font-bold">1.</span>
                <span>
                  <span className="font-medium">Structured MCP queries replace raw API reasoning.</span>{" "}
                  Instead of an AI agent making 10-50 LLM calls to figure out
                  your CRM schema, MCP servers return structured data directly.
                  Minimal tokens per operation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 font-bold">2.</span>
                <span>
                  <span className="font-medium">Combines Salesforce + Slack channel data automatically.</span>{" "}
                  The AI has context from both CRM records AND conversation
                  history in channels — no need to stuff both into a prompt
                  manually.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 font-bold">3.</span>
                <span>
                  <span className="font-medium">License cost replaces per-token chaos.</span>{" "}
                  PUPM add-on with unmetered usage means the CFO gets a
                  predictable line item, not a variable API bill that spikes
                  every month.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Licensing */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Licensing</h4>
          <div className="rounded-lg border bg-white overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Detail</TableHead>
                  <TableHead className="font-semibold">Info</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-sm font-medium">Model</TableCell>
                  <TableCell className="text-sm">PUPM license add-on for Slack</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-medium">Usage</TableCell>
                  <TableCell className="text-sm">Unmetered for licensed Slackbot users</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-medium">Pricing</TableCell>
                  <TableCell className="text-sm text-amber-600 font-medium">TBD — confirm with Slack team before quoting</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Stat row */}
        <div className="rounded-xl bg-gradient-to-r from-teal-500/5 to-teal-300/5 border p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <StatCallout value="Unmetered" label="No per-token billing" />
            <StatCallout value="Multi-System" label="Any MCP server (SF, Jira, Snowflake...)" />
            <StatCallout value="Slack Sidebar" label="Zero adoption curve" />
          </div>
        </div>

        {/* Ideal customer */}
        <div className="rounded-lg border-l-4 border-l-teal-500 bg-white p-6">
          <p className="text-sm">
            <span className="font-semibold">Ideal customer:</span> Already on
            Slack today. Wants AI that combines CRM data + Slack channel context
            + other systems (Jira, Confluence, Snowflake) in one conversational
            interface. Teams that are already using ChatGPT or Claude in Slack
            channels — but poorly and expensively.
          </p>
        </div>
      </div>

      {/* Option 3: Claude + Salesforce MCP + Agentforce — Full Detail */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Badge className="bg-amber-500 text-white text-sm px-3 py-1">
            Option 3
          </Badge>
          <h3 className="text-2xl font-bold">Claude + Salesforce MCP + Agentforce</h3>
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
      </div>

      {/* Decision framework */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Decision Framework</h3>
        <div className="rounded-lg border bg-white overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">
                  Customer Situation
                </TableHead>
                <TableHead className="font-semibold">
                  Recommended Option
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-sm">Non-technical users querying Salesforce data to help with their day</TableCell>
                <TableCell className="text-sm font-medium text-[#0176D3]">Agentforce Coworker</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">Teams already living in Slack</TableCell>
                <TableCell className="text-sm font-medium text-teal-600">Slackbot + MCP</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">Teams using ChatGPT, Claude, or Microsoft Teams</TableCell>
                <TableCell className="text-sm font-medium text-[#0176D3]">Agentforce Coworker</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">CFO demanding predictable AI spend</TableCell>
                <TableCell className="text-sm font-medium">
                  <span className="text-[#0176D3]">Coworker</span>
                  <span className="text-muted-foreground"> or </span>
                  <span className="text-teal-600">Slackbot</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">Already familiar with Agentforce Agents</TableCell>
                <TableCell className="text-sm font-medium text-amber-600">Claude + Salesforce MCP + Agentforce</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">Want to keep Claude Code capabilities + add structured querying</TableCell>
                <TableCell className="text-sm font-medium text-amber-600">Claude + Salesforce MCP + Agentforce</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </SectionWrapper>
  );
}
