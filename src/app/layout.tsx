import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Bot Website",
  description: "Modern AI-powered customer messaging for businesses.",
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