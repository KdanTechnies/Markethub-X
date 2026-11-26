import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { ProfileForm } from "@/components/forms/profile-form";
import { IntegrationNotice } from "@/components/ui/integration-notice";

export default function ProfileSettingsPage() {
  return <PageContainer className="max-w-4xl"><PageHeading eyebrow="ACCOUNT SETTINGS" title="Your profile" description="Manage the profile details supported by the marketplace." /><div className="space-y-5"><IntegrationNotice domain="users">Current account details and editable fields await the documented profile API.</IntegrationNotice><ProfileForm /></div></PageContainer>;
}
