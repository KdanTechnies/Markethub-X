import { endpointPending } from "./api-contract";

// TODO: Confirm from OpenAPI spec before defining admin routes or permissions.
export const adminService = {
  getOverview: (): never => endpointPending("admin", "overview"),
  listUsers: (): never => endpointPending("admin", "users"),
  moderateListings: (): never => endpointPending("admin", "listing moderation"),
  listVerifications: (): never => endpointPending("admin", "verification queue"),
  listReports: (): never => endpointPending("admin", "reports"),
  manageCategories: (): never => endpointPending("admin", "categories"),
  moderateReviews: (): never => endpointPending("admin", "reviews"),
  getActivity: (): never => endpointPending("admin", "activity log"),
};
