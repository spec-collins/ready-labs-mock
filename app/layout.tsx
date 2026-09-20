import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ready Labs — Design System Preview",
    template: "%s · Ready Labs",
  },
  description:
    "Clickable dark design-system preview for the Ready Labs family — PageReady, AfterHours Booker, WaReady, and SponsorReady. Shared tokens, distinct flavor accents.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
