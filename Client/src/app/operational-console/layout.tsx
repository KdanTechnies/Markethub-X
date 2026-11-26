import type { ReactNode } from "react";
import { ConsoleFrame } from "@/components/operational-console/console-frame";

export default function OperationalConsoleLayout({ children }: { children: ReactNode }) {
  return <ConsoleFrame title="Operational console">{children}</ConsoleFrame>;
}
