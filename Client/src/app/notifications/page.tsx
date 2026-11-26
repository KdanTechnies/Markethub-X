import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { EmptyState } from "@/components/ui/async-state";
import { SessionBoundary } from "@/components/ui/session-boundary";

export default function NotificationsPage() {
  return <PageContainer><PageHeading eyebrow="ACCOUNT UPDATES" title="Notifications" description="Message, listing, meetup, verification, and account updates will appear here." /><div className="space-y-5"><SessionBoundary state="loading" /><IntegrationNotice domain="users">Notification categories, counts, read states, and mark-as-read actions await the API contract.</IntegrationNotice><EmptyState title="No notifications loaded" description="Notifications are not fabricated and will appear after the backend integration is available." /></div></PageContainer>;
}
