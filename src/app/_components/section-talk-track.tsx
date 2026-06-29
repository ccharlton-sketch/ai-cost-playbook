import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { MessageSquare } from "lucide-react";

const discoveryQuestions = [
  "What's your monthly AI API spend today? Is it growing?",
  "How many tools in your org have raw frontier model API access?",
  "Who are your top token consumers — technical or non-technical users?",
  "Have you had to implement any caps or budget limits on AI usage?",
  "What's your per-user AI cost? Is it predictable month-to-month?",
  "Are you seeing measurable ROI from your AI spend, or is it a faith investment?",
];

const objections = [
  {
    objection: "We already have ChatGPT Enterprise",
    response:
      "ChatGPT Enterprise is a per-seat cost, but it doesn't solve the API consumption problem. Your developers and automated agents are still burning tokens through raw APIs. Salesforce provides the orchestration layer that governs how AI interacts with your business data — structured retrieval, caching, and PUPM pricing.",
  },
  {
    objection: "Our per-token costs keep dropping",
    response:
      "Price per token drops 75%, but consumption per task grows 1,000x. Net spend is climbing faster than prices fall. Uber's budget was gone by April despite cheaper tokens. You need architectural efficiency, not just cheaper tokens.",
  },
  {
    objection: "We built our own AI layer internally",
    response:
      "How's the maintenance going? Most internal AI platforms become their own product requiring a dedicated team. Salesforce provides the governed, maintained platform so your engineers build business value instead of infrastructure. Ask how many FTEs are maintaining their AI layer today.",
  },
  {
    objection: "We're not spending that much on AI yet",
    response:
      "Yet. Every company that gave unrestricted access hit the wall within 6 months. Are you tracking per-user AI costs? Do you know who your top consumers are? If not, the surprise is coming. Uber went from 32% to 84% adoption in weeks.",
  },
];

export function SectionTalkTrack() {
  return (
    <SectionWrapper id="talk-track">
      <h2 className="text-3xl font-bold mb-2">Talk Track & Objection Handling</h2>
      <p className="text-muted-foreground mb-8">
        Discovery questions to surface AI cost pain, and responses to common
        pushback.
      </p>

      {/* Discovery Questions */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4">Discovery Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {discoveryQuestions.map((q) => (
            <Card key={q}>
              <CardContent className="py-4 flex items-start gap-3">
                <MessageSquare className="h-4 w-4 text-[#0176D3] mt-0.5 shrink-0" />
                <p className="text-sm">{q}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Objection Handling */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Objection Handling</h3>
        <div className="space-y-4">
          {objections.map((obj) => (
            <Alert
              key={obj.objection}
              className="border-blue-200 bg-blue-50/50"
            >
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <AlertTitle className="font-semibold">
                &ldquo;{obj.objection}&rdquo;
              </AlertTitle>
              <AlertDescription className="text-sm mt-2">
                {obj.response}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
