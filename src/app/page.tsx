import { PlaybookShell } from "./_components/playbook-shell";
import { SectionHero } from "./_components/section-hero";
import { SectionProblem } from "./_components/section-problem";
import { SectionExamples } from "./_components/section-examples";
import { SectionShift } from "./_components/section-shift";
import { SectionCoworker } from "./_components/section-coworker";
import { SectionSlackbot } from "./_components/section-slackbot";
import { SectionAgentforce } from "./_components/section-agentforce";
import { SectionConclusion } from "./_components/section-conclusion";

export default function AICostPlaybookPage() {
  return (
    <PlaybookShell>
      <SectionHero />
      <SectionProblem />
      <SectionExamples />
      <SectionShift />
      <SectionCoworker />
      <SectionSlackbot />
      <SectionAgentforce />
      <SectionConclusion />
    </PlaybookShell>
  );
}
