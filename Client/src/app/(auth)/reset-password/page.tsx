import Link from "next/link";
import { AuthCard } from "@/components/layout/auth-card";
import { EmailActionForm } from "@/components/forms/email-action-form";

export default function ResetPasswordPage() {
  return <AuthCard title="Choose a new password" description="Choose a new password for your account."><EmailActionForm mode="reset" /><Link className="mt-5 inline-block text-xs text-emerald-800" href="/login">Back to sign in</Link></AuthCard>;
}
