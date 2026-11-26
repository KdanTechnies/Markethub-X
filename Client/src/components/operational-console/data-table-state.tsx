import { EmptyState } from "@/components/ui/async-state";
import { IntegrationNotice } from "@/components/ui/integration-notice";

export function AdminDataState({ subject }: { subject: string }) {
  return (
    <div className="space-y-4">
      <IntegrationNotice domain="admin">The {subject} data and actions are pending the documented admin endpoints and permissions.</IntegrationNotice>
      <div className="flex flex-col gap-3 rounded-md border border-brand-border bg-white p-4 sm:flex-row">
        <input disabled aria-label={`Search ${subject}`} placeholder="Search will be enabled after API integration" className="min-h-10 flex-1 rounded border border-brand-border bg-slate-50 px-3 text-xs" />
        <button disabled className="rounded border border-brand-border px-4 py-2 text-xs font-semibold text-brand-muted">Filters pending</button>
      </div>
      <div className="overflow-x-auto rounded-md border border-brand-border bg-white p-4">
        <table className="w-full min-w-[520px] text-left text-xs">
          <caption className="mb-3 text-left font-semibold text-brand-navy">{subject} records from authorized API responses</caption>
          <thead><tr className="border-b border-brand-border text-brand-muted"><th className="px-2 py-3">Backend record fields</th><th className="px-2 py-3">Backend status</th><th className="px-2 py-3">Permitted actions</th></tr></thead>
          <tbody><tr><td colSpan={3} className="px-2 py-6 text-center text-brand-muted">Waiting for the API contract and authorized data.</td></tr></tbody>
        </table>
      </div>
      <EmptyState title={`No ${subject} data loaded`} description="No sample administrative records are included. Data will appear only after an authorized backend response." />
    </div>
  );
}
