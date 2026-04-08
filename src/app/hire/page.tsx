"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Reveal } from "@/app/components/motion/reveal";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";

const schema = yup
  .object({
    name: yup.string().required().max(80),
    email: yup.string().required().email().max(120),
    details: yup.string().required().max(2000),
  })
  .required();

type FormValues = yup.InferType<typeof schema>;

const services = [
  {
    title: "Web development",
    desc: "Next.js apps with performance, SEO, and clean architecture.",
  },
  {
    title: "UI engineering",
    desc: "Accessible components (Radix), design systems, animations.",
  },
  {
    title: "Landing pages",
    desc: "Conversion-focused pages with fast iteration and strong UX.",
  },
] as const;

export default function HirePage() {
  const [successOpen, setSuccessOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  async function onSubmit(values: FormValues) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.details,
      }),
    });

    if (!res.ok) return;

    reset();
    setSuccessOpen(true);
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Hire Me
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          A dedicated conversion page. Outline your services, process, and the
          outcomes clients can expect.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Start a project
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Share what you’re building and I’ll reply with next steps.
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button>Open form</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Project inquiry</DialogTitle>
                  <DialogDescription>
                    This opens in an accessible Radix Dialog with proper focus
                    management.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-4 grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                      Name
                    </label>
                    <input
                      className="h-10 rounded-xl border border-zinc-200 bg-transparent px-3 text-sm text-zinc-950 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-600"
                      {...register("name")}
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
                    />
                    {errors.email ? (
                      <p className="text-xs text-red-600">{errors.email.message}</p>
                    ) : null}
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                      Details
                    </label>
                    <textarea
                      className="min-h-32 rounded-xl border border-zinc-200 bg-transparent px-3 py-2 text-sm text-zinc-950 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-600"
                      {...register("details")}
                    />
                    {errors.details ? (
                      <p className="text-xs text-red-600">{errors.details.message}</p>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-end">
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Reveal>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request sent</DialogTitle>
            <DialogDescription>
              Thanks—I&apos;ll reply soon with next steps.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
