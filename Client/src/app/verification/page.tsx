import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { VerificationForm } from "@/components/forms/verification-form";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { SessionBoundary } from "@/components/ui/session-boundary";

export default function VerificationPage() {
  return (
    <PageContainer className="max-w-4xl">
      <PageHeading eyebrow="ACCOUNT TRUST" title="Identity verification" description="View status and submit information only through the verified backend workflow." />
      <div className="space-y-5">
        <SessionBoundary state="loading" />
        <IntegrationNotice domain="verification">Status, approved/pending/rejected values, rejection reasons, resubmission eligibility, fields, and private uploads must come from the backend.</IntegrationNotice>
        <section className="grid gap-3 rounded-md border border-brand-border bg-white p-4 sm:grid-cols-2">
          {["Current status", "Rejection feedback", "Resubmission", "Private document access"].map((label) => <div key={label}><p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p><p className="mt-1 text-sm text-brand-ink">Awaiting authorized backend response</p></div>)}
        </section>
        <VerificationForm />
      </div>
    </PageContainer>
  );
}
