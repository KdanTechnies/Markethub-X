import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { EmptyState } from "@/components/ui/async-state";
import { SessionBoundary } from "@/components/ui/session-boundary";

export default function NotificationsPage() {
  return <PageContainer><PageHeading eyebrow="ACCOUNT UPDATES" title="Notifications" description="Stay up to date with messages, listings, meetups, and account activity." /><div className="space-y-5"><SessionBoundary state="loading" /><IntegrationNotice domain="users">New account updates will appear here.</IntegrationNotice><EmptyState title="You’re all caught up" description="When there’s something new, you’ll find it here." /></div></PageContainer>;
}
