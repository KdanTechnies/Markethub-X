import Link from "next/link";
import { AuthCard } from "@/components/layout/auth-card";
import { EmailActionForm } from "@/components/forms/email-action-form";

export default function VerifyEmailPage() {
  return <AuthCard title="Verify your email" description="Enter your email to continue with account verification."><EmailActionForm mode="email" emailActionLabel="Send verification link" /><Link className="mt-5 inline-block text-xs text-emerald-800" href="/login">Back to sign in</Link></AuthCard>;
}
