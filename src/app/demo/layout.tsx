import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Demo",
  description:
    "See how botti can save your team hours every day. Book a free demo — no commitment, no credit card required.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
