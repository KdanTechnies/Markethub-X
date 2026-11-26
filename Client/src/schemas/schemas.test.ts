import { describe, expect, it } from "vitest";
import { loginSchema, registerSchema, resetPasswordSchema } from "./auth.schema";
import { listingDraftSchema } from "./listing.schema";
import { meetupProposalSchema } from "./meetup.schema";
import { profileDraftSchema } from "./profile.schema";
import { verificationDraftSchema } from "./verification.schema";

describe("authentication form drafts", () => {
  it("accepts a valid login draft and rejects an invalid email", () => {
    expect(loginSchema.safeParse({ email: "buyer@example.test", password: "secret" }).success).toBe(true);
    expect(loginSchema.safeParse({ email: "bad-email", password: "secret" }).success).toBe(false);
  });

  it("requires matching registration and reset passwords", () => {
    expect(registerSchema.safeParse({ email: "person@example.test", password: "password123", confirmPassword: "password123" }).success).toBe(true);
    expect(registerSchema.safeParse({ email: "person@example.test", password: "password123", confirmPassword: "different" }).success).toBe(false);
    expect(resetPasswordSchema.safeParse({ password: "password123", confirmPassword: "password123" }).success).toBe(true);
  });
});

describe("listing draft validation", () => {
  const validDraft = { title: "Desk", description: "A sturdy desk", category: "Furniture", price: "100", condition: "Good", location: "Central", negotiable: false };

  it("accepts a complete local draft", () => {
    expect(listingDraftSchema.safeParse(validDraft).success).toBe(true);
  });

  it("rejects non-positive prices and missing titles", () => {
    expect(listingDraftSchema.safeParse({ ...validDraft, price: "0" }).success).toBe(false);
    expect(listingDraftSchema.safeParse({ ...validDraft, title: " " }).success).toBe(false);
  });
});

describe("meetup and profile drafts", () => {
  it("requires a public place and proposed date/time", () => {
    expect(meetupProposalSchema.safeParse({ location: "Central library entrance", date: "2026-12-01", time: "12:00", note: "" }).success).toBe(true);
    expect(meetupProposalSchema.safeParse({ location: "", date: "", time: "", note: "" }).success).toBe(false);
  });

  it("validates editable profile and verification drafts", () => {
    expect(profileDraftSchema.safeParse({ displayName: "A Person", location: "", biography: "" }).success).toBe(true);
    expect(verificationDraftSchema.safeParse({ information: "Requested details", acknowledgesPrivacy: true }).success).toBe(true);
    expect(verificationDraftSchema.safeParse({ information: "", acknowledgesPrivacy: false }).success).toBe(false);
  });
});
