import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baldeaglestreamz.com"),
  title: {
    default: "Bald Eagle Streamz — #1 IPTV Provider in the USA",
    template: "%s | Bald Eagle Streamz",
  },
  description:
    "Bald Eagle Streamz offers 15,000+ live channels & 50,000+ movies in HD & 4K. The best IPTV service in the USA. 24/7 support. Start your free trial today.",
  keywords: [
    "IPTV provider USA",
    "best IPTV service",
    "live TV streaming",
    "IPTV subscription",
    "4K IPTV",
    "Bald Eagle Streamz",
    "American IPTV",
    "IPTV channels",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://baldeaglestreamz.com",
    siteName: "Bald Eagle Streamz",
    title: "Bald Eagle Streamz — #1 IPTV Provider in the USA",
    description:
      "15,000+ live channels & 50,000+ movies in HD & 4K. Best IPTV service in the USA. Free 24-hour trial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bald Eagle Streamz — Best IPTV Provider in the USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bald Eagle Streamz — #1 IPTV Provider in the USA",
    description:
      "15,000+ live channels & 50,000+ movies in HD & 4K. Free 24-hour trial. No contracts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-64KWD5VRJ8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-64KWD5VRJ8');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
