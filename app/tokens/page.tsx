import type { Metadata } from "next";
import { TokensPanel } from "@/components/tokens-panel";

export const metadata: Metadata = {
  title: "Tokens",
  description:
    "Ready Labs shared design tokens and flavor switcher for PageReady, AfterHours, WaReady, and SponsorReady.",
};

export default function TokensPage() {
  return <TokensPanel />;
}
