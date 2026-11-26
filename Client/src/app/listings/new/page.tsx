import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { ListingForm } from "@/components/listings/listing-form";

export default function NewListingPage() {
  return <PageContainer className="max-w-4xl"><PageHeading eyebrow="SELL SOMETHING GOOD" title="Create a listing" description="Add item information and images. This local draft will not be submitted until the backend contract is connected." /><ListingForm /></PageContainer>;
}
