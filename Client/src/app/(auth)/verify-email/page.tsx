import Link from "next/link";
import { AuthCard } from "@/components/layout/auth-card";
import { EmailActionForm } from "@/components/forms/email-action-form";

export default function VerifyEmailPage() {
  return <AuthCard title="Verify your email" description="Verification codes and resend rules will follow the backend contract."><EmailActionForm mode="email" /><Link className="mt-5 inline-block text-xs text-emerald-800" href="/login">Back to login</Link></AuthCard>;
}
