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
  title: "Nasir Khan — I build products from zero to working systems",
  description:
    "Nasir Khan works across software engineering, AI/agent systems, and product development. Currently building Kormoo for small garment factories in Bangladesh.",
  keywords: [
    "Nasir Khan",
    "Software Engineer",
    "AI",
    "Product Engineering",
    "Kormoo",
    "Full Stack Developer",
  ],
  authors: [{ name: "Nasir Khan" }],
  openGraph: {
    title: "Nasir Khan — I build products from zero to working systems",
    description:
      "Software engineer, AI/agent systems, product development. Building Kormoo for garment factories in Bangladesh.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasir Khan — I build products from zero to working systems",
    description:
      "Software engineer, AI/agent systems, product development. Building Kormoo for garment factories in Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
