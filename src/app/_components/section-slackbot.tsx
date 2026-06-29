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
  Shield,
  Hash,
  Plug,
  FileText,
  Snowflake,
  CircleDot,
} from "lucide-react";

export function SectionSlackbot() {
  return (
    <SectionWrapper id="slackbot">
      <div className="flex items-center gap-3 mb-6">
        <Badge className="bg-teal-500 text-white text-sm px-3 py-1">
          Option 2
        </Badge>
        <h2 className="text-3xl font-bold">Slackbot + MCP</h2>
      </div>

      {/* Caveat */}
      <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 mb-8">
        <p className="text-sm font-semibold text-amber-800 mb-2">
          ⚠ Licensing Caveat — Confirm Before Quoting
        </p>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="font-bold mt-0.5">•</span>
            <span>
              Check with the Slack team on Salesforce MCP pricing and packaging
              before positioning this to a customer.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold mt-0.5">•</span>
            <span>
              If every user needs access to Salesforce data through the Slackbot,
              this could require Headless 360 licensing — which adds additional
              per-user cost on top of the Slackbot PUPM add-on.
            </span>
          </li>
        </ul>
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
          <StatCallout value="Unmetered" label="Unmetered functionality" />
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
    </SectionWrapper>
  );
}
