"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Reveal } from "@/app/components/motion/reveal";

const schema = yup
  .object({
    name: yup.string().required().max(80),
    email: yup.string().required().email().max(120),
    message: yup.string().required().max(2000),
  })
  .required();

type FormValues = yup.InferType<typeof schema>;

export function ContactSection() {
  const [open, setOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  async function onSubmit(values: FormValues) {
    setServerError(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      setServerError(data?.error ?? "Something went wrong. Please try again.");
      return;
    }

    reset();
    setOpen(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Contact
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Send a message—this uses React Hook Form + Yup validation and posts to
          a typed API route.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
              Name
            </label>
            <input
              className="h-10 rounded-xl border border-zinc-200 bg-transparent px-3 text-sm text-zinc-950 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-600"
              {...register("name")}
              autoComplete="name"
            />
            {errors.name ? (
              <p className="text-xs text-red-600">{errors.name.message}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
              Email
            </label>
            <input
              className="h-10 rounded-xl border border-zinc-200 bg-transparent px-3 text-sm text-zinc-950 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-600"
              {...register("email")}
              autoComplete="email"
            />
            {errors.email ? (
              <p className="text-xs text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
              Message
            </label>
            <textarea
              className="min-h-32 rounded-xl border border-zinc-200 bg-transparent px-3 py-2 text-sm text-zinc-950 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-600"
              {...register("message")}
            />
            {errors.message ? (
              <p className="text-xs text-red-600">{errors.message.message}</p>
            ) : null}
          </div>

          {serverError ? (
            <p className="text-sm text-red-600">{serverError}</p>
          ) : null}

          <div className="flex items-center justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </Reveal>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message sent</DialogTitle>
            <DialogDescription>
              Thanks for reaching out. I’ll reply as soon as possible.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
