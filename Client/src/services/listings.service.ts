import type { ListingDraft } from "@/schemas/listing.schema";
import { endpointPending } from "./api-contract";

// TODO: Confirm from OpenAPI spec before defining listing, filter, or upload paths.
export const listingsService = {
  list: (): never => endpointPending("listings", "list and filters"),
  getById: (_id: string): never => endpointPending("listings", "details"),
  create: (_draft: ListingDraft): never => endpointPending("listings", "create and image upload"),
  update: (_id: string, _draft: ListingDraft): never => endpointPending("listings", "update"),
  archive: (_id: string): never => endpointPending("listings", "archive or delete"),
};
