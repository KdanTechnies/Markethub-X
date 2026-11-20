import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Commonplace — good finds, close by", template: "%s | Commonplace" },
  description:
    "A thoughtful local marketplace to find pre-loved things and meet the people behind them.",
  openGraph: {
    title: "Commonplace — good finds, close by",
    description: "Find something useful in your neighbourhood.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
