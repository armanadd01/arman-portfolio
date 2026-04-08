import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/inter/latin.css";
import "@fontsource/space-grotesk/latin.css";

import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

const fontVars = "font-sans";

export const metadata: Metadata = {
  title: {
    default: "Md Arman Habib Nahid — Portfolio",
    template: "%s — Md Arman Habib Nahid",
  },
  description:
    "Portfolio of Md Arman Habib Nahid — web developer specializing in React, Node.js, and WordPress.",
  metadataBase: new URL("https://armanadd01.github.io"),
  openGraph: {
    title: "Md Arman Habib Nahid — Portfolio",
    description:
      "Portfolio of Md Arman Habib Nahid — web developer specializing in React, Node.js, and WordPress.",
    url: "https://armanadd01.github.io",
    siteName: "Md Arman Habib Nahid",
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
