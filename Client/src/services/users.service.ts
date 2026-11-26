import type { ProfileDraft } from "@/schemas/profile.schema";
import { endpointPending } from "./api-contract";

// TODO: Confirm from OpenAPI spec before defining user, profile, or favorites paths.
export const usersService = {
  getProfile: (_userId: string): never => endpointPending("users", "public profile"),
  getCurrentProfile: (): never => endpointPending("users", "private profile"),
  updateProfile: (_draft: ProfileDraft): never => endpointPending("users", "profile update"),
  getFavorites: (): never => endpointPending("users", "favorites"),
};
