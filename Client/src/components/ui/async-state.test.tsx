import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyState, ErrorState, LoadingState } from "./async-state";
import { IntegrationNotice } from "./integration-notice";
import { SessionBoundary } from "./session-boundary";

describe("API and access states", () => {
  it("renders loading, empty, and safe error states", () => {
    const { rerender } = render(<LoadingState label="Loading listings" />);
    expect(screen.getByRole("status")).toHaveTextContent("Loading listings");
    rerender(<EmptyState title="Nothing saved" description="Saved items appear here." />);
    expect(screen.getByRole("status")).toHaveTextContent("Nothing saved");
    rerender(<ErrorState error={new Error("Service unavailable")} />);
    expect(screen.getByRole("alert")).toHaveTextContent("We couldn’t load this information.");
    expect(screen.getByRole("alert")).toHaveTextContent("Service unavailable");
  });

  it("shows a friendly availability notice without technical integration details", () => {
    render(<IntegrationNotice domain="listings" />);
    expect(screen.getByRole("status")).toHaveTextContent("Coming soon");
    expect(screen.getByRole("status")).not.toHaveTextContent(/backend|endpoint|contract/i);
  });

  it("shows an unauthenticated state without claiming to authorize the route", () => {
    render(<SessionBoundary state="unauthenticated" />);
    expect(screen.getByRole("link", { name: "Go to login" })).toHaveAttribute("href", "/login");
    expect(screen.getByRole("status")).toHaveTextContent("Sign in to view your account");
  });
});
