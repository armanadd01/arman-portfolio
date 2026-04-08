"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Link from "next/link";

import { CheckCircle2 } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
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
        <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Contact
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          Send a message—this uses React Hook Form + Yup validation and posts to
          a typed API route.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-luminal mt-8 grid gap-6 rounded-3xl bg-surface-low p-8"
        >
          <div className="grid gap-2">
            <label className="text-[11px] font-semibold tracking-widest text-foreground/55">
              Name
            </label>
            <Input
              invalid={Boolean(errors.name)}
              {...register("name")}
              autoComplete="name"
            />
            {errors.name ? (
              <p className="text-xs font-semibold text-red-500">{errors.name.message}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label className="text-[11px] font-semibold tracking-widest text-foreground/55">
              Email
            </label>
            <Input
              invalid={Boolean(errors.email)}
              {...register("email")}
              autoComplete="email"
            />
            {errors.email ? (
              <p className="text-xs font-semibold text-red-500">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label className="text-[11px] font-semibold tracking-widest text-foreground/55">
              Message
            </label>
            <Textarea
              invalid={Boolean(errors.message)}
              {...register("message")}
            />
            {errors.message ? (
              <p className="text-xs font-semibold text-red-500">
                {errors.message.message}
              </p>
            ) : null}
          </div>

          {serverError ? (
            <p className="text-sm font-semibold text-red-500">{serverError}</p>
          ) : null}

          <div className="flex items-center justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </Reveal>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <div className="flex flex-col items-center text-center">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-black/10 outline outline-1 outline-[rgba(255,255,255,0.08)] dark:bg-white/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <DialogHeader className="mt-6">
              <DialogTitle>Message Sent!</DialogTitle>
              <DialogDescription>
                Thank you for reaching out. I&apos;ll get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <Link
              href="/"
              className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-2xl bg-primary px-6 text-sm font-semibold text-white dark:text-black"
            >
              Back to Home
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
