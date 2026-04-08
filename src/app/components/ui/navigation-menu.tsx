"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/app/lib/cn";

export const NavigationMenu = NavigationMenuPrimitive.Root;
export const NavigationMenuList = NavigationMenuPrimitive.List;
export const NavigationMenuItem = NavigationMenuPrimitive.Item;
export const NavigationMenuLink = NavigationMenuPrimitive.Link;

export function NavigationMenuTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-medium",
        "text-foreground/75 transition-colors hover:bg-[var(--surface-container-low)] hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60",
        className,
      )}
      {...props}
    />
  );
}

export function NavigationMenuContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "absolute left-0 top-full mt-2 w-72 rounded-2xl glass p-2",
        "outline outline-1 outline-[var(--card-stroke)] glow-cyan",
        className,
      )}
      {...props}
    />
  );
}

export function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <NavigationMenuPrimitive.Viewport
      className={cn("relative h-[var(--radix-navigation-menu-viewport-height)] w-full", className)}
      {...props}
    />
  );
}
