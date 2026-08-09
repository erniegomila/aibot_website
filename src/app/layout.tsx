import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "botti — AI Messaging for Home Service Businesses",
    template: "%s | botti",
  },
  description:
    "botti answers your customers by text in seconds — quotes, scheduling, emergencies — 24/7 with your real pricing. Built for AC, plumbing, electrical, and every home service trade. Book a free demo.",
  metadataBase: new URL("https://getbotti.com"),
  keywords: [
    "AI for home services",
    "HVAC answering service",
    "plumber chatbot",
    "AI for contractors",
    "home services lead capture",
    "HVAC SMS bot",
    "electrician booking automation",
    "service business texting",
    "after hours answering service HVAC",
    "quote request automation",
    "home services AI assistant",
  ],
  authors: [{ name: "botti" }],
  creator: "botti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getbotti.com",
    siteName: "botti",
    title: "botti — AI Messaging for Home Service Businesses",
    description:
      "botti answers your customers by text in seconds — quotes, scheduling, emergencies — 24/7 with your real pricing. Book a free demo.",
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
    title: "botti — AI Messaging for Home Service Businesses",
    description:
      "Capture every lead, book every job, and answer customers 24/7 — by text, with your real pricing.",
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
