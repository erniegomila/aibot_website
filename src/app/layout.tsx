import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "botti — AI Your Business. One Text at a Time.",
    template: "%s | botti",
  },
  description:
    "botti is your AI-powered messaging assistant — answering customers, booking appointments, and capturing leads by text 24/7. Works for any business, any workflow. Book a free demo.",
  metadataBase: new URL("https://getbotti.com"),
  keywords: [
    "AI customer messaging",
    "AI for business",
    "SMS bot for business",
    "AI chatbot",
    "customer service automation",
    "business messaging platform",
    "AI appointment booking",
    "lead capture automation",
    "AI text assistant",
    "AI business assistant",
    "WhatsApp business bot",
    "automated customer support",
  ],
  authors: [{ name: "botti" }],
  creator: "botti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getbotti.com",
    siteName: "botti",
    title: "botti — AI Your Business. One Text at a Time.",
    description:
      "botti is your AI-powered messaging assistant — answering customers, booking appointments, and capturing leads by text 24/7. Book a free demo.",
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
    title: "botti — AI Your Business. One Text at a Time.",
    description:
      "Answer customers, book appointments, and capture leads by text 24/7 — for any business, any workflow.",
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KW2PN9Y899"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KW2PN9Y899');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
