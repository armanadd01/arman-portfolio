"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/app/lib/cn";

export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex h-10 items-center rounded-2xl bg-black/10 p-1 outline outline-1 outline-[rgba(255,255,255,0.06)] backdrop-blur dark:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-xl px-4 text-xs font-semibold",
        "text-foreground/70 transition-colors",
        "data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:text-black",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content className={cn("mt-6", className)} {...props} />
  );
}
