import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { ListingForm } from "@/components/listings/listing-form";

export default function NewListingPage() {
  return <PageContainer className="max-w-4xl"><PageHeading eyebrow="SELL SOMETHING GOOD" title="Create a listing" description="Share the details and photos so someone nearby can find your item." /><ListingForm /></PageContainer>;
}
