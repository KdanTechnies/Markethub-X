import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { ProfileForm } from "@/components/forms/profile-form";
import { IntegrationNotice } from "@/components/ui/integration-notice";

export default function ProfileSettingsPage() {
  return <PageContainer className="max-w-4xl"><PageHeading eyebrow="ACCOUNT SETTINGS" title="Your profile" description="Keep your profile details up to date." /><div className="space-y-5"><IntegrationNotice domain="users">Your account details will appear here.</IntegrationNotice><ProfileForm /></div></PageContainer>;
}
