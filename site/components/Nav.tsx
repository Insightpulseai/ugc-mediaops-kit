"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Overview", href: "/" },
  { label: "Architecture", href: "/architecture" },
  { label: "Providers", href: "/providers" },
  { label: "Workflows", href: "/workflows" },
  { label: "Examples", href: "/examples" },
  { label: "Docs", href: "/docs" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border-default)] bg-[var(--color-surface-primary)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)]"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-accent-primary)] text-xs font-bold text-white">
            M
          </span>
          ugc-mediaops-kit
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Insightpulseai/ugc-mediaops-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border-default)] bg-[var(--color-surface-secondary)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-tertiary)]"
          >
            <GitHubIcon />
            Star on GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-[var(--color-text-secondary)] md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--color-border-muted)] bg-[var(--color-surface-primary)] px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-secondary)]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/Insightpulseai/ugc-mediaops-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-md border border-[var(--color-border-default)] bg-[var(--color-surface-secondary)] px-3 py-2 text-center text-sm font-medium"
          >
            Star on GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
