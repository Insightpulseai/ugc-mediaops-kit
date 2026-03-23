import Link from "next/link";

const columns = [
  {
    title: "Project",
    links: [
      { label: "Overview", href: "/" },
      { label: "Architecture", href: "/architecture" },
      { label: "Providers", href: "/providers" },
      { label: "Workflows", href: "/workflows" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Examples", href: "/examples" },
      { label: "Docs", href: "/docs" },
      {
        label: "GitHub",
        href: "https://github.com/Insightpulseai/ugc-mediaops-kit",
      },
      {
        label: "Issues",
        href: "https://github.com/Insightpulseai/ugc-mediaops-kit/issues",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Apache 2.0 License",
        href: "https://github.com/Insightpulseai/ugc-mediaops-kit/blob/main/LICENSE",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-default)] bg-[var(--color-surface-secondary)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-accent-primary)] text-xs font-bold text-white">
                M
              </span>
              ugc-mediaops-kit
            </div>
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">
              Open-source finishing pipeline for agency UGC and generative media
              workflows.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-primary)]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-primary)]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--color-border-muted)] pt-6">
          <p className="text-xs text-[var(--color-text-muted)]">
            Built by{" "}
            <a
              href="https://insightpulseai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]"
            >
              InsightPulse AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
