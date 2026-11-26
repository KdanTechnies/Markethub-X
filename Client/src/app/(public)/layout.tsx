import type { ReactNode } from "react";
import { PublicHeader } from "@/components/navigation/public-header";
import { SiteFooter } from "@/components/navigation/site-footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <><PublicHeader />{children}<SiteFooter /></>;
}
