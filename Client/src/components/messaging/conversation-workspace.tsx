import { EmptyState } from "@/components/ui/async-state";
import { IntegrationNotice } from "@/components/ui/integration-notice";

export function ConversationWorkspace() {
  return (
    <div className="grid min-h-[520px] overflow-hidden rounded-md border border-brand-border bg-white md:grid-cols-[280px_1fr]">
      <aside className="border-b border-brand-border p-4 md:border-b-0 md:border-r">
        <h2 className="font-display font-bold text-brand-navy">Conversations</h2>
        <div className="mt-4"><EmptyState title="No conversations to show" description="Your conversation list will appear here after the messages endpoint is connected." /></div>
      </aside>
      <section className="flex flex-col p-4">
        <IntegrationNotice domain="messages">Conversation history, unread counts, and real-time updates await the documented API or WebSocket contract.</IntegrationNotice>
        <div className="my-auto py-10"><EmptyState title="Choose a conversation" description="Open a buyer or seller conversation to read messages and coordinate an in-person meetup." /></div>
        <label className="sr-only" htmlFor="message-draft">Message</label><textarea id="message-draft" disabled placeholder="Messaging will be enabled after API integration" className="min-h-20 rounded border border-brand-border bg-slate-50 p-3 text-sm" />
      </section>
    </div>
  );
}
