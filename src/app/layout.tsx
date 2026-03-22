import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AgriLogy — Smart Agriculture",
    template: "%s | AgriLogy",
  },
  description: "IoT-based irrigation & farm analytics that boost yields.",
  openGraph: {
    title: "AgriLogy — Smart Agriculture",
    description: "IoT-based irrigation & farm analytics that boost yields.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
