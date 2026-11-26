import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { ListingForm } from "@/components/listings/listing-form";

export default async function EditListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PageContainer className="max-w-4xl"><PageHeading eyebrow="YOUR LISTINGS" title="Edit listing" description={`Update the details for listing ${id}.`} /><ListingForm submitLabel="Save changes" /></PageContainer>;
}
