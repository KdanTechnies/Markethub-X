import type { ReactNode } from "react";
import { Info } from "lucide-react";
import type { BackendDomain } from "@/constants/integrations";

export function IntegrationNotice({
  domain,
  children = "This view is ready for integration and is awaiting the backend endpoint contract.",
}: {
  domain: BackendDomain | "general";
  children?: ReactNode;
}) {
  return (
    <section
      role="status"
      data-testid="integration-notice"
      className="flex gap-3 rounded-md border border-amber-200 bg-amber-50 p-4 text-amber-950"
    >
      <Info aria-hidden="true" className="mt-0.5 shrink-0 text-amber-700" size={18} />
      <div>
        <h2 className="text-sm font-semibold">Awaiting backend endpoint contract</h2>
        <p className="mt-1 text-xs leading-5 text-amber-900/80">{children}</p>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-amber-800">{domain}</p>
      </div>
    </section>
  );
}
