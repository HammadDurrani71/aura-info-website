import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AURA — Your Security, Reinvented.",
  description:
    "AURA transforms your existing CCTV network into an intelligent search, tracking, and alert system — powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full bg-[#0a0a0f] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
