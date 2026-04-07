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
  title: {
    default: "Your Name — Portfolio",
    template: "%s — Your Name",
  },
  description:
    "High-performance personal portfolio built with Next.js, TypeScript, Tailwind, Radix UI, and Framer Motion.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name — Portfolio",
    description:
      "High-performance personal portfolio built with Next.js, TypeScript, Tailwind, Radix UI, and Framer Motion.",
    url: "https://example.com",
    siteName: "Your Name",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(() => { try { const t = localStorage.getItem('theme'); const m = t === 'dark' || t === 'light' ? t : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.classList.toggle('dark', m === 'dark'); } catch {} })();",
          }}
        />
        {children}
      </body>
    </html>
  );
}
