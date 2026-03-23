"use client";

import { BrandIcon, brandColors } from "./BrandIcon";

const items = [
  { name: "fal", brand: "fal" },
  { name: "Gemini", brand: "gemini" },
  { name: "Imagen", brand: "imagen" },
  { name: "OpenAI", brand: "openai" },
  { name: "n8n", brand: "n8n" },
  { name: "TikTok", brand: "tiktok" },
  { name: "Instagram Reels", brand: "instagram" },
  { name: "YouTube Shorts", brand: "youtube" },
  { name: "FFmpeg", brand: "ffmpeg" },
  { name: "Vercel", brand: "vercel" },
];

function Chip({ name, brand }: { name: string; brand: string }) {
  const color = brandColors[brand] || "#6b7280";

  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] px-4 py-2 opacity-60 transition-opacity hover:opacity-100">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-md"
        style={{ color }}
      >
        <BrandIcon brand={brand} size={18} />
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
