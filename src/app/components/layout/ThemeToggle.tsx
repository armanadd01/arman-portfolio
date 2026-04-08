"use client";

import { Moon, Sun } from "lucide-react";

import { useThemeMode } from "@/app/hooks/useThemeMode";
import { Button } from "@/app/components/ui/button";

export function ThemeToggle() {
  const { isDark, toggle } = useThemeMode();

  return (
    <Button
      variant="secondary"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
