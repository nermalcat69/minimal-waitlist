import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Minimal Waitlist - Simple Waitlist for SaaS",
  description: "A minimal, modern waitlist solution for SaaS products. Built with Next.js and Tailwind CSS, featuring Discord notifications and a clean user interface.",
  openGraph: {
    title: "Minimal Waitlist - Simple Waitlist for SaaS",
    description: "A minimal, modern waitlist solution for SaaS products. Built with Next.js and Tailwind CSS, featuring Discord notifications and a clean user interface.",
    images: [{
      url: 'https://waitlist.zerops.xyz/og.webp',
      width: 1200,
      height: 630,
      alt: 'Minimal Waitlist'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Minimal Waitlist - Simple Waitlist for SaaS",
    description: "A minimal, modern waitlist solution for SaaS products. Built with Next.js and Tailwind CSS, featuring Discord notifications and a clean user interface.",
    images: ['https://waitlist.zerops.xyz/og.webp'],
  },
  keywords: [
    'waitlist',
    'saas',
    'nextjs',
    'tailwindcss',
    'discord webhook',
    'minimal design',
    'open source'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
