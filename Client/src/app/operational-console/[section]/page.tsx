import { notFound } from "next/navigation";
import { PageHeading } from "@/components/layout/page-container";
import { AdminDataState } from "@/components/operational-console/data-table-state";

const sectionTitles: Record<string, string> = {
  users: "User management",
  listings: "Listing moderation",
  verifications: "Verification requests",
  reports: "Reports",
  categories: "Categories",
  reviews: "Review moderation",
  activity: "Administrative activity",
};

export function generateStaticParams() {
  return Object.keys(sectionTitles).map((section) => ({ section }));
}

export default async function OperationalConsoleSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const title = sectionTitles[section];
  if (!title) notFound();
  return <><PageHeading eyebrow="ADMINISTRATION" title={title} description={`Review ${title.toLowerCase()} and keep the marketplace running smoothly.`} /><AdminDataState subject={title.toLowerCase()} /></>;
}
