"use client";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { ThemeToggle } from "@/app/components/layout/ThemeToggle";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
  { label: "Hire Me", href: "/hire" },
] as const;

export function MobileMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" aria-label="Open menu">
          <Menu className="h-4 w-4" />
          Menu
        </Button>
      </DialogTrigger>
      <DialogContent className="fixed inset-0 w-screen max-w-none rounded-none p-0">
        <div className="h-full w-full glass">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <p className="font-display text-sm font-semibold tracking-tight text-foreground">
              Arman Nahid
            </p>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <DialogClose asChild>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-foreground/80 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur transition-all hover:bg-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:bg-white/10 dark:hover:bg-white/15"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </DialogClose>
            </div>
          </div>

          <nav className="mx-auto max-w-6xl px-4 pb-10 pt-10">
            <div className="grid gap-5">
              {links.map((l) => (
                <DialogClose key={l.href} asChild>
                  <Link
                    href={l.href}
                    className="rounded-xl font-display text-3xl font-semibold tracking-tight text-foreground/85 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
                  >
                    {l.label}
                  </Link>
                </DialogClose>
              ))}
            </div>

            <div className="mt-10 h-px bg-surface-variant/60" />

            <div className="mt-10">
              <DialogClose asChild>
                <Link
                  href="/hire"
                  className="signature-gradient inline-flex h-12 w-full items-center justify-center rounded-2xl px-6 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:text-black"
                >
                  Hire Me
                </Link>
              </DialogClose>
            </div>
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
}
