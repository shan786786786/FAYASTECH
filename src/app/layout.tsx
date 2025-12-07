import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Separate viewport export for Next.js 16
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://fayastech.com'),
  title: {
    default: "FayasTech - Tech Expert & Data Analyst | 15+ Years Experience",
    template: "%s | FayasTech",
  },
  description: "Professional portfolio of FayasTech - Specializing in Hardware & Networking, Video Editing, Data Analysis, and Modern Web Development with 15+ years of expertise.",
  keywords: ["FayasTech", "Tech Expert", "Data Analyst", "Hardware", "Networking", "Video Editing", "Web Development", "Full Stack Developer", "React", "Next.js"],
  authors: [{ name: "FayasTech", url: "https://fayastech.com" }],
  creator: "FayasTech",
  publisher: "FayasTech",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fayastech.com",
    siteName: "FayasTech",
    title: "FayasTech - Tech Expert & Data Analyst",
    description: "Professional portfolio showcasing 15+ years of expertise in Hardware, Networking, Video Editing, Data Analysis, and Modern Web Development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FayasTech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FayasTech - Tech Expert & Data Analyst",
    description: "Professional portfolio showcasing 15+ years of expertise in tech and development.",
    creator: "@FayasTechy",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
