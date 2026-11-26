import { z } from "zod";

// UI draft validation only; map fields to the real API contract after it is supplied.
export const listingDraftSchema = z.object({
  title: z.string().trim().min(1, "Enter an item title.").max(120),
  description: z.string().trim().min(1, "Enter an item description."),
  category: z.string().trim().min(1, "Choose a category."),
  price: z
    .string()
    .trim()
    .min(1, "Enter a price.")
    .refine((value) => Number.isFinite(Number(value)) && Number(value) > 0, "Enter a price greater than zero."),
  condition: z.string().trim().min(1, "Choose an item condition."),
  location: z.string().trim().min(1, "Enter a location."),
  negotiable: z.boolean(),
});

export type ListingDraft = z.infer<typeof listingDraftSchema>;
