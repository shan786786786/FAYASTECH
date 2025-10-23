import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FayasTech - Tech Expert & Data Analyst | 15+ Years Experience",
  description: "Professional portfolio of FayasTech - Specializing in Hardware & Networking, Video Editing, Data Analysis, and Modern Web Development with 15+ years of expertise.",
  keywords: ["FayasTech", "Tech Expert", "Data Analyst", "Hardware", "Networking", "Video Editing", "Web Development"],
  authors: [{ name: "FayasTech" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
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
