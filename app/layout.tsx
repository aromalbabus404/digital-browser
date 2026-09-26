import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Master Pools | Premium Swimming Pool Design & Construction • Kerala",
  description:
    "Master Pools designs, constructs, and maintains luxury swimming pools for residential, resort, and commercial projects across India. Based in Alappuzha, Kerala.",
  keywords: [
    "Master Pools",
    "Swimming Pool Construction Kerala",
    "Pool Design Alappuzha",
    "Infinity Pool Builders",
    "Resort Swimming Pools",
    "Pool Equipment Supply",
    "Pool Maintenance Kerala",
    "Luxury Villa Pools",
  ],
  authors: [{ name: "Master Pools" }],
  openGraph: {
    title: "Master Pools | Architectural Digital Browser",
    description:
      "Explore the interactive digital brochure of Master Pools. Designing and constructing luxury swimming pools across India.",
    url: "https://masterpool.in/",
    siteName: "Master Pools",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Master Pools Luxury Swimming Pool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Pools | Premium Swimming Pool Design & Construction",
    description:
      "Master Pools designs, constructs and maintains premium swimming pools for residential, resort and commercial projects across India.",
    images: ["https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030814",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased overflow-hidden font-sans selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
