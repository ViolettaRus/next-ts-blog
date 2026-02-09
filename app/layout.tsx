import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Demo Blog & Dashboard",
  description: "Example of Next.js app router features",
  openGraph: {
    title: "Demo Blog & Dashboard",
    description: "Blog, dynamic routes, and dashboard with parallel routes.",
    url: "http://localhost:3000",
    siteName: "Demo Blog & Dashboard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo Blog & Dashboard",
    description: "Next.js App Router demo with blog and dashboard.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-950`}
      >
        <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" prefetch className="text-lg font-semibold">
              Demo App
            </Link>
            <div className="flex gap-4 text-sm font-medium">
              <Link href="/" prefetch className="hover:text-zinc-700">
                Home
              </Link>
              <Link href="/blog" prefetch className="hover:text-zinc-700">
                Blog
              </Link>
              <Link href="/dashboard" prefetch className="hover:text-zinc-700">
                Dashboard
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
