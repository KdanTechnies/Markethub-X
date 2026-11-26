import Link from "next/link";
import { AuthCard } from "@/components/layout/auth-card";
import { EmailActionForm } from "@/components/forms/email-action-form";

export default function ResetPasswordPage() {
  return <AuthCard title="Choose a new password" description="The required reset token and fields await backend documentation."><EmailActionForm mode="reset" /><Link className="mt-5 inline-block text-xs text-emerald-800" href="/login">Back to login</Link></AuthCard>;
}
