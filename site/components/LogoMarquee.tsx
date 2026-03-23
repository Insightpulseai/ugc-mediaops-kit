"use client";

const items = [
  { name: "fal", abbr: "FL" },
  { name: "Gemini", abbr: "GM" },
  { name: "Imagen", abbr: "IM" },
  { name: "OpenAI", abbr: "OA" },
  { name: "n8n", abbr: "N8" },
  { name: "TikTok", abbr: "TT" },
  { name: "Instagram Reels", abbr: "RL" },
  { name: "YouTube Shorts", abbr: "YT" },
  { name: "FFmpeg", abbr: "FF" },
  { name: "Vercel", abbr: "VC" },
];

function Chip({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] px-4 py-2 opacity-60 transition-opacity hover:opacity-100">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-surface-secondary)] text-[10px] font-bold text-[var(--color-text-muted)]">
        {abbr}
      </span>
      <span className="text-sm font-medium text-[var(--color-text-secondary)] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="border-b border-[var(--color-border-muted)] bg-[var(--color-surface-secondary)] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
          Works across the creative stack
        </p>
        <h2 className="mt-3 text-center text-xl font-bold tracking-tight md:text-2xl">
          Built to route across the tools creative teams already use
        </h2>
        <p className="mt-3 text-center text-sm text-[var(--color-text-secondary)]">
          Provider-agnostic by design &mdash; generation, editing, finishing,
          export, and evaluation across the modern media stack.
        </p>
      </div>

      {/* Marquee container */}
      <div className="marquee-mask group mt-10">
        <div className="marquee-track">
          {/* First copy */}
          <div className="marquee-content">
            {items.map((item) => (
              <Chip key={`a-${item.name}`} {...item} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="marquee-content" aria-hidden="true">
            {items.map((item) => (
              <Chip key={`b-${item.name}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
