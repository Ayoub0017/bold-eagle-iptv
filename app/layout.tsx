import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boldeagleiptv.com"),
  title: {
    default: "Bold Eagle IPTV — #1 IPTV Provider in the USA",
    template: "%s | Bold Eagle IPTV",
  },
  description:
    "Bold Eagle IPTV offers 15,000+ live channels & 50,000+ movies in HD & 4K. The best IPTV service in the USA. 24/7 support. Start your free trial today.",
  keywords: [
    "IPTV provider USA",
    "best IPTV service",
    "live TV streaming",
    "IPTV subscription",
    "4K IPTV",
    "Bold Eagle IPTV",
    "American IPTV",
    "IPTV channels",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boldeagleiptv.com",
    siteName: "Bold Eagle IPTV",
    title: "Bold Eagle IPTV — #1 IPTV Provider in the USA",
    description:
      "15,000+ live channels & 50,000+ movies in HD & 4K. Best IPTV service in the USA. Free 24-hour trial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bold Eagle IPTV — Best IPTV Provider in the USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bold Eagle IPTV — #1 IPTV Provider in the USA",
    description:
      "15,000+ live channels & 50,000+ movies in HD & 4K. Free 24-hour trial. No contracts.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
