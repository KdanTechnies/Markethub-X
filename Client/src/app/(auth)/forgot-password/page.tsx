import Link from "next/link";
import { AuthCard } from "@/components/layout/auth-card";
import { EmailActionForm } from "@/components/forms/email-action-form";

export default function ForgotPasswordPage() {
  return <AuthCard title="Reset your password" description="Enter your email and we’ll help you get back into your account."><EmailActionForm mode="email" /><Link className="mt-5 inline-block text-xs text-emerald-800" href="/login">Back to sign in</Link></AuthCard>;
}
