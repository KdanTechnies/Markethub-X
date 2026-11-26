import type { ReactNode } from "react";
import { Info } from "lucide-react";
import type { BackendDomain } from "@/constants/integrations";

export function IntegrationNotice({
  domain,
  children = "This part of Commonplace will be available soon.",
}: {
  domain: BackendDomain | "general";
  children?: ReactNode;
}) {
  return (
    <section
      role="status"
      data-testid="integration-notice"
      data-domain={domain}
      className="flex gap-3 rounded-md border border-brand-border bg-white p-4 text-brand-ink"
    >
      <Info aria-hidden="true" className="mt-0.5 shrink-0 text-brand-green" size={18} />
      <div>
        <h2 className="text-sm font-semibold">Coming soon</h2>
        <p className="mt-1 text-xs leading-5 text-brand-muted">{children}</p>
      </div>
    </section>
  );
}
