import Link from "next/link";
import { AuthCard } from "@/components/layout/auth-card";
import { AuthForm } from "@/components/forms/auth-form";

export default function RegisterPage() {
  return <AuthCard title="Join the nearby" description="Create an account to start buying and selling locally."><AuthForm mode="register" /><p className="mt-5 text-xs text-brand-muted">Already registered? <Link className="font-semibold text-emerald-800" href="/login">Log in</Link></p></AuthCard>;
}
