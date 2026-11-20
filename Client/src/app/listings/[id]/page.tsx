import Link from "next/link";
import { ArrowLeft, CircleHelp } from "lucide-react";
import { Notice, PageHeader } from "@/components/site";

export default async function ListingDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-brand-paper">
      <PageHeader>
        <Link
          href="/marketplace"
          className="flex items-center gap-2 text-xs font-semibold text-emerald-800"
        >
          <ArrowLeft size={15} /> Browse all
        </Link>
      </PageHeader>
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-5 grid size-11 place-items-center rounded-full bg-emerald-100 text-emerald-800">
          <CircleHelp size={21} />
        </div>
        <Notice title="Listing details need the backend’s detail endpoint.">
          We haven’t assumed a route or response structure. Listing reference:{" "}
          <code className="rounded bg-white px-1 py-0.5">{id}</code>. Add the exact detail contract
          to enable this page.
        </Notice>
      </section>
    </main>
  );
}
