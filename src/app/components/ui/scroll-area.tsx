"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/app/lib/cn";

export const ScrollArea = ScrollAreaPrimitive.Root;

export function ScrollAreaViewport({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>) {
  return (
    <ScrollAreaPrimitive.Viewport
      className={cn("h-full w-full rounded-[inherit]", className)}
      {...props}
    />
  );
}

export function ScrollBar({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={cn(
        "flex touch-none select-none p-0.5 transition-colors",
        "data-[orientation=vertical]:w-2 data-[orientation=horizontal]:h-2",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export function ScrollAreaCorner({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Corner>) {
  return (
    <ScrollAreaPrimitive.Corner
      className={cn("bg-zinc-100 dark:bg-zinc-900", className)}
      {...props}
    />
  );
}
