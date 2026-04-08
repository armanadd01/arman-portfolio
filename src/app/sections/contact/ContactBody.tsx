"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Link from "next/link";

import { CheckCircle2, Link2, Mail, MapPin, Paperclip, Phone, Send } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

const schema = yup
  .object({
    name: yup.string().required().max(80),
    email: yup.string().required().email().max(120),
    subject: yup.string().required().max(120),
    message: yup.string().required().max(2000),
  })
  .required();

type FormValues = yup.InferType<typeof schema>;

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="text-[11px] font-semibold tracking-widest text-foreground/55">
      {children}
      <span className="text-primary"> *</span>
    </label>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="card-luminal rounded-2xl bg-surface-low p-5">
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground/65">{label}</p>
          <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
        </div>
      </div>
    </div>
  );
}

function SocialPill({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="card-luminal inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-surface-low px-6 text-sm font-semibold text-foreground/80 transition-all hover:bg-surface-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
    >
      <Link2 className="h-4 w-4 text-foreground/70" />
      {label}
    </Link>
  );
}

export function ContactBody() {
  const [open, setOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const attachmentId = useId();
  const [attachmentKey, setAttachmentKey] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  async function onSubmit(values: FormValues) {
    setServerError(null);

    const payload = {
      name: values.name,
      email: values.email,
      message: `${values.subject}\n\n${values.message}`,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      setServerError(data?.error ?? "Something went wrong. Please try again.");
      return;
    }

    reset();
    setAttachmentKey((k) => k + 1);
    setOpen(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
        <Reveal>
          <div className="card-luminal overflow-hidden rounded-3xl bg-surface-low">
            <div className="px-8 pb-8 pt-7">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form below and I&apos;ll respond as soon as possible.
              </p>
            </div>

            <div className="h-px bg-surface-variant/70" />

            <form onSubmit={handleSubmit(onSubmit)} className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-3">
                  <FieldLabel>Full Name</FieldLabel>
                  <Input
                    placeholder="e.g. Your name"
                    invalid={Boolean(errors.name)}
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="text-xs font-semibold text-red-500">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>

                <div className="grid gap-3">
                  <FieldLabel>Email Address</FieldLabel>
                  <Input
                    placeholder="e.g. armanadd01@gmail.com"
                    autoComplete="email"
                    invalid={Boolean(errors.email)}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-xs font-semibold text-red-500">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <FieldLabel>Subject</FieldLabel>
                <Input
                  placeholder="How can I help you?"
                  invalid={Boolean(errors.subject)}
                  {...register("subject")}
                />
                {errors.subject ? (
                  <p className="text-xs font-semibold text-red-500">
                    {errors.subject.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-6 grid gap-3">
                <FieldLabel>Your Message</FieldLabel>
                <Textarea
                  placeholder="Tell me about your project, goals, and timeline..."
                  invalid={Boolean(errors.message)}
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="text-xs font-semibold text-red-500">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-8">
                <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-white/10 bg-black/5 px-4 py-4 focus-within:ring-2 focus-within:ring-[var(--primary)]/50 dark:bg-white/5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3 text-sm font-semibold text-foreground/70">
                    <Paperclip className="h-4 w-4" />
                    Attach project brief or specs (Optional)
                  </div>

                  <div className="flex items-center justify-between gap-4 md:justify-end">
                    <span className="rounded-full bg-black/10 px-3 py-1 text-[11px] font-semibold text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10">
                      Max 10MB
                    </span>

                    <label
                      htmlFor={attachmentId}
                      className="inline-flex h-9 cursor-pointer items-center justify-center rounded-xl bg-black/10 px-4 text-xs font-semibold text-foreground/80 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur transition-all hover:bg-black/15 active:translate-y-px dark:bg-white/10 dark:hover:bg-white/15"
                    >
                      Browse
                    </label>

                    <input
                      key={attachmentKey}
                      id={attachmentId}
                      type="file"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              {serverError ? (
                <p className="mt-6 text-sm font-semibold text-red-500">
                  {serverError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-3 rounded-2xl px-6 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] disabled:opacity-60 dark:text-black"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(var(--primary)), rgb(var(--secondary)))",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.05}>
            <div>
              <div className="flex items-center gap-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Connect Directly
                </h3>
                <div className="h-[3px] w-14 rounded-full bg-primary" />
              </div>

              <div className="mt-6 space-y-4">
                <InfoCard icon={Mail} label="Primary Email" value="armanadd01@gmail.com" />
                <InfoCard icon={Mail} label="Secondary Email" value="armanadd05@gmail.com" />
                <InfoCard icon={Phone} label="Primary Phone" value="01951798878" />
                <InfoCard icon={Phone} label="Secondary Phone" value="01410798878" />
                <InfoCard
                  icon={MapPin}
                  label="Location"
                  value="Dhaka, Bangladesh"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <div className="flex items-center gap-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Digital Footprint
                </h3>
                <div className="h-[3px] w-14 rounded-full bg-secondary" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <SocialPill label="GitHub" href="https://github.com/armanadd01" />
                <SocialPill label="Email" href="mailto:armanadd01@gmail.com" />
                <SocialPill label="LinkedIn" href="https://www.linkedin.com/in/armanadd01" />
                <div className="sm:col-span-3">
                  <SocialPill label="Portfolio" href="https://github.com/armanadd01" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.11}>
            <div
              className="card-luminal rounded-3xl bg-surface-low p-7"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 10%, rgba(204,49,232,0.22), transparent 55%), radial-gradient(circle at 10% 90%, rgba(0,163,255,0.20), transparent 55%)",
              }}
            >
              <p className="text-[11px] font-semibold tracking-widest text-foreground/70">
                CURRENTLY AVAILABLE
              </p>
              <p className="mt-4 text-sm leading-7 text-foreground/75">
                I&apos;m currently accepting new freelance projects and full-time
                opportunities. Expected response time: <b>Under 12 hours</b>.
              </p>

              <Link
                href="/hire"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary/80 hover:text-primary"
              >
                View Services & Packages
                <span className="text-base">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

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
