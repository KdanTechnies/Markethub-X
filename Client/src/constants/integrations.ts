export const pendingIntegrations = [
  "Authentication and sessions",
  "Listings, categories, filters, and uploads",
  "Profiles, favorites, and reviews",
  "Messages and meetup coordination",
  "Notifications and identity verification",
  "Operational console permissions and moderation",
] as const;

export type BackendDomain =
  | "auth"
  | "listings"
  | "messages"
  | "meetups"
  | "users"
  | "verification"
  | "admin";
