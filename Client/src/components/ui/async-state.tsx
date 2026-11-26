import { AlertCircle, Inbox, LoaderCircle } from "lucide-react";
import { getSafeErrorMessage } from "@/utils/format";

export function LoadingState({ label = "Loading…" }: { label?: string }) {
  return (
    <div role="status" className="flex items-center gap-3 rounded-md border border-brand-border bg-white p-6 text-sm text-brand-muted">
      <LoaderCircle className="animate-spin text-brand-green" size={18} />{label}
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div role="status" className="grid justify-items-center rounded-md border border-dashed border-brand-border bg-white px-6 py-10 text-center">
      <Inbox className="text-brand-muted" size={25} />
      <h2 className="mt-3 text-sm font-semibold text-brand-navy">{title}</h2>
      <p className="mt-1 max-w-md text-xs leading-5 text-brand-muted">{description}</p>
    </div>
  );
}

export function ErrorState({ error, retry }: { error: unknown; retry?: () => void }) {
  return (
    <div role="alert" className="flex items-start gap-3 rounded-md border border-rose-200 bg-rose-50 p-4 text-rose-900">
      <AlertCircle className="mt-0.5 shrink-0" size={18} />
      <div><h2 className="text-sm font-semibold">We couldn’t load this information.</h2><p className="mt-1 text-xs">{getSafeErrorMessage(error)}</p>{retry ? <button className="mt-3 text-xs font-semibold underline" onClick={retry}>Try again</button> : null}</div>
    </div>
  );
}
