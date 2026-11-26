import type { ReactNode } from "react";
import { PublicHeader } from "@/components/navigation/public-header";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return <><PublicHeader />{children}</>;
}
