import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "botti — AI Messaging for HOAs & Apartment Management",
    template: "%s | botti",
  },
  description:
    "botti helps HOAs and apartment management companies schedule more tours, answer resident questions 24/7, and save associates hours every day. Book a free demo.",
  metadataBase: new URL("https://getbotti.com"),
  keywords: [
    "AI for HOAs",
    "AI for apartment management",
    "apartment tour scheduling automation",
    "property management chatbot",
    "HOA resident messaging",
    "leasing automation",
    "apartment SMS bot",
    "homeowners association chatbot",
    "leasing office automation",
    "resident communication automation",
    "apartment AI assistant",
  ],
  authors: [{ name: "botti" }],
  creator: "botti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getbotti.com",
    siteName: "botti",
    title: "botti — AI Messaging for HOAs & Apartment Management",
    description:
      "botti helps HOAs and apartment management companies schedule more tours, answer resident questions 24/7, and save associates hours every day. Book a free demo.",
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
    title: "botti — AI Messaging for HOAs & Apartment Management",
    description:
      "Schedule more tours, answer resident questions 24/7, and save your team hours every day.",
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
