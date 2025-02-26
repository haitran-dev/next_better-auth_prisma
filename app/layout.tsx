import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

// Configure Geist font
const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans", // Use --font-sans to match Tailwind config
});

// Configure Geist Mono font
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono", // If you need mono font
});

export const metadata: Metadata = {
  title: "Auth App",
  description: "Modern authentication with Next.js and better-auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
