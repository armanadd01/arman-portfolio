"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Link from "next/link";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";
import { Input } from "@/app/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";

const schema = yup
  .object({
    name: yup.string().required().max(80),
    email: yup.string().required().email().max(120),
    projectType: yup.string().required().max(120),
    budget: yup.string().required().max(40),
  })
  .required();

type FormValues = yup.InferType<typeof schema>;

const budgets = ["$2k - $5k", "$5k - $10k", "$10k+"] as const;

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="text-[11px] font-semibold tracking-widest text-foreground/55">
      {children}
    </label>
  );
}

export function HireHero() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { budget: budgets[1] },
  });

  const selectedBudget = useWatch({ control, name: "budget" });

  async function onSubmit(values: FormValues) {
    setServerError(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: `Quick inquiry\n\nProject type: ${values.projectType}\nBudget: ${values.budget}`,
      }),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      setServerError(data?.error ?? "Something went wrong. Please try again.");
      return;
    }

    reset({ name: "", email: "", projectType: "", budget: budgets[1] });
    setSuccessOpen(true);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-24 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-52 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Reveal>
              <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-2 text-[11px] font-semibold tracking-widest text-primary/80 outline outline-1 outline-[rgba(255,255,255,0.06)] backdrop-blur dark:bg-white/10">
                AVAILABLE FOR NEW PROJECTS
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl">
                Let&apos;s Build
                <br />
                Something
                <br />
                <span className="text-primary">Legendary</span>
                <br />
                <span className="text-primary">Together</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
                I&apos;m a web developer with 6+ years of experience in JavaScript,
                React, Node.js, PHP, and WordPress theme development. I focus on
                clean code, scalable architecture, and responsive UI.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#quick-inquiry"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-8 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:text-black"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/projects"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-black/10 px-8 text-sm font-semibold text-foreground/85 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur transition-all hover:bg-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:bg-white/10 dark:hover:bg-white/15"
                >
                  Explore My Work
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-14 grid max-w-xl grid-cols-3 gap-6">
                <div className="border-r border-white/5 pr-6">
                  <p className="text-lg font-semibold text-foreground">4</p>
                  <p className="mt-1 text-[10px] font-semibold tracking-widest text-foreground/50">
                    FEATURED PROJECTS
                  </p>
                </div>
                <div className="border-r border-white/5 px-6">
                  <p className="text-lg font-semibold text-foreground">2</p>
                  <p className="mt-1 text-[10px] font-semibold tracking-widest text-foreground/50">
                    EMAIL ADDRESSES
                  </p>
                </div>
                <div className="pl-6">
                  <p className="text-lg font-semibold text-foreground">6+</p>
                  <p className="mt-1 text-[10px] font-semibold tracking-widest text-foreground/50">
                    YEARS EXPERIENCE
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div
              id="quick-inquiry"
              className="card-luminal rounded-3xl bg-surface-low p-8"
            >
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Quick Inquiry
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Tell me about your vision and get a response within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="grid gap-3">
                    <FieldLabel>NAME</FieldLabel>
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
                    <FieldLabel>EMAIL</FieldLabel>
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
                  <FieldLabel>PROJECT TYPE</FieldLabel>
                  <Input
                    placeholder="Web app, landing page, UI engineering..."
                    invalid={Boolean(errors.projectType)}
                    {...register("projectType")}
                  />
                  {errors.projectType ? (
                    <p className="text-xs font-semibold text-red-500">
                      {errors.projectType.message}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6">
                  <FieldLabel>BUDGET RANGE</FieldLabel>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {budgets.map((b) => {
                      const active = selectedBudget === b;

                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() =>
                            setValue("budget", b, { shouldValidate: true })
                          }
                          className={`h-10 rounded-2xl text-xs font-semibold outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur dark:outline-[rgba(255,255,255,0.08)] ${
                            active
                              ? "bg-primary/15 text-primary outline-[rgba(76,215,246,0.25)]"
                              : "bg-black/10 text-foreground/75 dark:bg-white/10"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                  {errors.budget ? (
                    <p className="mt-3 text-xs font-semibold text-red-500">
                      {errors.budget.message}
                    </p>
                  ) : null}
                </div>

                {serverError ? (
                  <p className="mt-6 text-sm font-semibold text-red-500">
                    {serverError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] disabled:opacity-60 dark:text-black"
                >
                  {isSubmitting ? "Sending..." : "Send My Inquiry"}
                </button>

                <p className="mt-5 text-center text-[11px] text-foreground/45">
                  By submitting, you agree to be contacted by email regarding your inquiry.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
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
