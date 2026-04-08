"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";

import { useThemeMode } from "@/app/hooks/useThemeMode";
import { Button } from "@/app/components/ui/button";
import { MobileMenu } from "@/app/components/layout/mobile-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const { isDark, toggle } = useThemeMode();

  return (
    <header className="sticky top-0 z-40 glass glow-cyan">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-display tracking-tight text-[var(--foreground)]">
          Your Name
        </Link>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              {nav.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] px-4 text-sm font-medium text-[color:rgba(229,226,225,0.75)] transition-colors hover:bg-[var(--surface-container-low)] hover:text-[var(--foreground)]"
                    >
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={toggle} aria-label="Toggle theme">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/hire">Hire Me</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
