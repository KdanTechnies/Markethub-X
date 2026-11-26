import { PageHeading } from "@/components/layout/page-container";
import { AdminDataState } from "@/components/operational-console/data-table-state";

export default function OperationalConsoleOverviewPage() {
  return <>
    <PageHeading eyebrow="ADMINISTRATION" title="Overview" description="Operational totals are displayed only when returned by the authorized backend." />
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {["Total users", "Active users", "Total listings", "Pending listings", "Reported listings", "Pending verifications"].map((label) => (
        <div key={label} className="rounded-md border border-brand-border bg-white p-4"><p className="text-xs text-brand-muted">{label}</p><p className="mt-3 text-sm font-semibold text-brand-navy">Awaiting authorized backend data</p></div>
      ))}
    </div>
    <AdminDataState subject="overview statistics" />
  </>;
}
