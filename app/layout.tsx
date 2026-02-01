import type { Metadata } from "next";
import "./globals.css";
import { PageTransitionShell } from "./pageTransitionShell";
import AdmissionPopup from "@/components/AdmissionPopup";

export const metadata: Metadata = {
  title: "Bright Future Academy | Nursery to Class 10",
  description:
    "Bright Future Academy — Nurturing Young Minds for a Brighter Tomorrow. Nursery to Class 10 with quality, affordable education.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Bright Future Academy",
    description: "Nursery to Class 10 | Affordable & quality education",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdmissionPopup />
        <PageTransitionShell>{children}</PageTransitionShell>
      </body>
    </html>
  );
}
