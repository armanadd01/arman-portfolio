export function SiteFooter() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Md Arman Habib Nahid. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
