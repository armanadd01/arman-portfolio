import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/inter/latin.css";
import "@fontsource/space-grotesk/latin.css";

import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

const fontVars = "font-sans";

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
      className={`${fontVars} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(() => { try { const t = localStorage.getItem('theme'); const m = t === 'dark' || t === 'light' ? t : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.classList.toggle('dark', m === 'dark'); } catch {} })();",
          }}
        />
        <div className="relative min-h-screen surface text-foreground">
          <div className="neural-blur" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
