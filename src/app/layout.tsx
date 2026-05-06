import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "botti — AI-Powered Customer Messaging for SMS & WhatsApp",
    template: "%s | botti",
  },
  description:
    "botti saves your team hours every day by handling customer messages automatically through SMS and WhatsApp. Book a free demo today.",
  metadataBase: new URL("https://getbotti.com"),
  keywords: [
    "AI customer messaging",
    "SMS bot for business",
    "WhatsApp business bot",
    "automated customer support",
    "AI chatbot",
    "lead generation bot",
    "business messaging platform",
    "customer service automation",
  ],
  authors: [{ name: "botti" }],
  creator: "botti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getbotti.com",
    siteName: "botti",
    title: "botti — AI-Powered Customer Messaging for SMS & WhatsApp",
    description:
      "botti saves your team hours every day by handling customer messages automatically through SMS and WhatsApp. Book a free demo today.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "botti logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "botti — AI-Powered Customer Messaging",
    description:
      "botti saves your team hours every day by handling customer messages automatically through SMS and WhatsApp.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KW2PN9Y899"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KW2PN9Y899');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
