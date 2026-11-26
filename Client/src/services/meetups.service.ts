import type { MeetupProposalDraft } from "@/schemas/meetup.schema";
import { endpointPending } from "./api-contract";

// TODO: Confirm from OpenAPI spec before defining meetup paths, payloads, or statuses.
export const meetupsService = {
  propose: (_conversationId: string, _draft: MeetupProposalDraft): never =>
    endpointPending("meetups", "proposal"),
  respond: (_meetupId: string, _response: unknown): never =>
    endpointPending("meetups", "accept, decline, reschedule, or cancel"),
};
