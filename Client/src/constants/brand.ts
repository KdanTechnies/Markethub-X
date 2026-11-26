export const brandColors = {
  primary: "#142B45",
  secondary: "#16A36A",
  background: "#F7F9FC",
  surface: "#FFFFFF",
  text: "#172333",
  muted: "#718096",
  border: "#E5EAF0",
} as const;

export const safetyGuidelines = [
  "Meet in a public and convenient location.",
  "Inspect the item and confirm its condition before agreeing to exchange.",
  "Avoid paying unfamiliar sellers in advance.",
  "Keep communication on the platform where possible.",
] as const;

export const publicNavigation = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "How it works", href: "/#how" },
  { label: "About", href: "/about" },
] as const;

export const accountNavigation = [
  { label: "Overview", href: "/dashboard" },
  { label: "Messages", href: "/messages" },
  { label: "Favorites", href: "/favorites" },
  { label: "Profile", href: "/profile" },
  { label: "Verification", href: "/verification" },
] as const;
