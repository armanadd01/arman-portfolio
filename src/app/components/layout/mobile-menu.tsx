"use client";

import { Menu } from "lucide-react";

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
      <DialogContent className="fixed inset-3 max-w-none w-auto">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg text-foreground">Menu</p>
          <ThemeToggle />
        </div>

        <nav className="mt-6 grid gap-2">
          {links.map((l) => (
            <DialogClose key={l.href} asChild>
              <a
                href={l.href}
                className="rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-surface-low hover:text-foreground"
              >
                {l.label}
              </a>
            </DialogClose>
          ))}
        </nav>

        <div className="mt-6">
          <DialogClose asChild>
            <a
              href="/hire"
              className="signature-gradient block rounded-[var(--radius-md)] px-4 py-3 text-center text-sm font-semibold text-black"
            >
              Hire Me
            </a>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
