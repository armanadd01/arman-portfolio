"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

import { MobileMenu } from "@/app/components/layout/mobile-menu";
import { ThemeToggle } from "@/app/components/layout/ThemeToggle";
import { Button } from "@/app/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={
          scrolled
            ? "glass glow-cyan outline outline-1 outline-[var(--outline-variant)]"
            : "bg-transparent"
        }
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
              <span className="h-4 w-4 rounded-full bg-primary" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              Arman Nahid
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link
              href="/resume"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-surface-low px-4 text-sm font-semibold text-foreground/80 transition-all hover:bg-surface-high hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
            >
              <Download className="h-4 w-4" />
              Resume
            </Link>
            <Button asChild>
              <Link href="/hire">Hire Me</Link>
            </Button>

            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-surface-variant">
              <Image
                src="/profile-placeholder.svg"
                alt="Profile"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
