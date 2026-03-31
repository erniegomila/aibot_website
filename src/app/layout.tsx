import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "botti — AI-Powered Customer Messaging",
  description:
    "botti helps businesses respond faster through web chat, SMS, and WhatsApp with AI-powered messaging and easy human handoff when needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
