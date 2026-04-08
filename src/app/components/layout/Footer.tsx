import Link from "next/link";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "GitHub", href: "https://github.com/armanadd01" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/armanadd01" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Resume", href: "/resume" },
      { label: "Hire", href: "/hire" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl bg-surface-low p-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <p className="font-display text-lg text-foreground">Arman Nahid</p>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Crafting digital products with performance, accessibility, and
                editorial polish.
              </p>
            </div>

            {columns.map((c) => (
              <div key={c.title}>
                <p className="text-label-md text-foreground/60">{c.title}</p>
                <div className="mt-4 grid gap-2">
                  {c.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm font-medium text-foreground/70 hover:text-foreground"
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Md Arman Habib Nahid
            </p>
            <p className="text-sm text-foreground/60">Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
