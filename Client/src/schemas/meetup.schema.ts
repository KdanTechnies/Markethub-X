import { z } from "zod";

// This form draft is not a meetup API payload or status enum.
export const meetupProposalSchema = z.object({
  location: z.string().trim().min(1, "Suggest a public meeting location."),
  date: z.string().min(1, "Choose a proposed date."),
  time: z.string().min(1, "Choose a proposed time."),
  note: z.string().trim().max(500),
});

export type MeetupProposalDraft = z.infer<typeof meetupProposalSchema>;
