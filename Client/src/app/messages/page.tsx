import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { ConversationWorkspace } from "@/components/messaging/conversation-workspace";
import { MeetupProposalCard } from "@/components/messaging/meetup-proposal-card";

export default function MessagesPage() {
  return <PageContainer><PageHeading eyebrow="BUYER & SELLER CHAT" title="Messages" description="Keep listing conversations and meetup coordination in one place." /><div className="grid gap-5 xl:grid-cols-[1.5fr_0.8fr]"><ConversationWorkspace /><MeetupProposalCard /></div></PageContainer>;
}
