import Link from "next/link";
import { LogoMarquee } from "@/components/LogoMarquee";
import { BrandIcon, brandColors } from "@/components/BrandIcon";
import { HeroDiagram } from "@/components/ArchitectureDiagram";

/* ------------------------------------------------------------------ */
/*  1. Eyebrow Banner                                                  */
/* ------------------------------------------------------------------ */
function EyebrowBanner() {
  return (
    <div className="border-b border-[var(--color-border-muted)] bg-[var(--color-surface-secondary)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <p className="text-xs text-[var(--color-text-muted)]">
          <span className="mr-2 rounded-full bg-[var(--color-accent-subtle)] px-2 py-0.5 text-[var(--color-accent-emphasis)] font-medium">
            Apache 2.0
          </span>
          Open source &middot; Built by InsightPulse AI
        </p>
        <a
          href="https://github.com/Insightpulseai/ugc-mediaops-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-xs font-medium text-[var(--color-accent-primary)] hover:underline sm:inline"
        >
          View on GitHub &rarr;
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Hero                                                            */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="section-spacing border-b border-[var(--color-border-muted)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] md:text-5xl lg:text-[3.25rem]">
              The open-source finishing pipeline for agency UGC and generative
              media workflows
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              ugc-mediaops-kit is the reusable workflow layer between generation
              and publishing: brief &rarr; generate &rarr; polish &rarr; export
              &rarr; evaluate &rarr; publish.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/Insightpulseai/ugc-mediaops-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-emphasis)]"
              >
                View the repo
              </a>
              <Link
                href="/architecture"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-secondary)]"
              >
                Read the architecture
              </Link>
            </div>
          </div>

          {/* Architecture diagram as hero visual */}
          <div className="hidden lg:block">
            <HeroDiagram className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Logo Suite                                                      */
/* ------------------------------------------------------------------ */
function LogoSuite() {
  const providers = [
    { name: "fal", brand: "fal", role: "Video & mixed media" },
    { name: "Gemini", brand: "gemini", role: "Fast stills" },
    { name: "Imagen", brand: "imagen", role: "Premium stills" },
    { name: "OpenAI", brand: "openai", role: "Eval & QA" },
    { name: "n8n", brand: "n8n", role: "Orchestration" },
  ];

  const platforms = [
    { name: "TikTok", brand: "tiktok", aspect: "9:16" },
    { name: "Reels", brand: "instagram", aspect: "9:16" },
    { name: "Shorts", brand: "youtube", aspect: "9:16" },
    { name: "YouTube", brand: "youtube", aspect: "16:9" },
  ];

  return (
    <section className="section-spacing border-b border-[var(--color-border-muted)] bg-[var(--color-surface-secondary)]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
          Built to route across the tools creative teams already use
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {providers.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-surface-primary)] shadow-sm ring-1 ring-[var(--color-border-default)]"
                style={{ color: brandColors[p.brand] }}
              >
                <BrandIcon brand={p.brand} size={24} />
              </div>
              <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                {p.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {platforms.map((p) => (
            <span
              key={p.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
            >
              <span style={{ color: brandColors[p.brand] }}>
                <BrandIcon brand={p.brand} size={12} />
              </span>
              {p.name} {p.aspect}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Bento Grid                                                      */
/* ------------------------------------------------------------------ */
function BentoGrid() {
  const cards = [
    {
      title: "Creative Brief",
      body: "Standardized intake for brand, audience, and platform targets.",
      icon: "B",
    },
    {
      title: "Provider Broker",
      body: "Route stills, video, and utilities to the right provider.",
      icon: "P",
    },
    {
      title: "Brand Presets",
      body: "Treat style, formatting, and safe-area rules as code.",
      icon: "S",
    },
    {
      title: "Export Profiles",
      body: "Package outputs for TikTok, Reels, Shorts, YouTube, 1:1, 16:9, and 9:16.",
      icon: "E",
    },
    {
      title: "QA / Eval",
      body: "Catch caption, aspect-ratio, brand, and output-coverage issues before publish.",
      icon: "Q",
    },
    {
      title: "Publish Handoff",
      body: "Deliver scheduler-ready, platform-ready assets and metadata.",
      icon: "H",
    },
  ];

  return (
    <section className="section-spacing border-b border-[var(--color-border-muted)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything after generation
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Six modules that turn raw AI output into finished, platform-ready
            content.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-subtle)] text-sm font-bold text-[var(--color-accent-emphasis)]">
                {c.icon}
              </div>
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. River Sections                                                  */
/* ------------------------------------------------------------------ */
function RiverSections() {
  const rivers = [
    {
      title: "Provider-agnostic by design",
      body: "Generation providers create the assets. OpenAI multimodal evaluates and reviews them. The broker decides where each job belongs based on modality and quality tier.",
      align: "left" as const,
      code: `broker.route({
  type: "video.generate.premium",
  // → fal / kling-video/v3/pro
});

broker.route({
  type: "still.generate.fast",
  // → fal / nano-banana-2
});`,
    },
    {
      title: "Brand presets as code",
      body: "Fonts, colors, watermarks, title-safe rules, aspect ratios, subtitle styles, and export rules are versioned configuration \u2014 not tribal knowledge.",
      align: "right" as const,
      code: `{
  "brand": "acme-studio",
  "fonts": { "heading": "Inter", "body": "DM Sans" },
  "colors": { "primary": "#1868db", "bg": "#ffffff" },
  "safe_area": { "top": 64, "bottom": 80 },
  "watermark": { "position": "bottom-right", "opacity": 0.4 }
}`,
    },
    {
      title: "Publish-ready, not just model-ready",
      body: "The bottleneck is not raw generation. It is everything after: packaging, formatting, QA, and publish handoff. This pipeline closes the gap.",
      align: "left" as const,
      code: `pipeline.run(brief)
  .generate()    // fal / Gemini / Imagen
  .polish()      // caption cleanup, upscale
  .brandCheck()  // preset compliance
  .export([      // platform packages
    "tiktok-9x16",
    "reels-9x16",
    "youtube-16x9",
  ])
  .evaluate()    // QA gate
  .publish();    // handoff`,
    },
  ];

  return (
    <section className="section-spacing border-b border-[var(--color-border-muted)] bg-[var(--color-surface-secondary)]">
      <div className="mx-auto max-w-7xl space-y-20 px-6">
        {rivers.map((r, i) => (
          <div
            key={r.title}
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              r.align === "right" ? "lg:direction-rtl" : ""
            }`}
          >
            <div className={r.align === "right" ? "lg:order-2" : ""}>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                {r.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
                {r.body}
              </p>
            </div>
            <div className={r.align === "right" ? "lg:order-1" : ""}>
              <div className="diagram-block">
                <pre className="text-sm text-[var(--color-text-secondary)]">
                  <code>{r.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Provider Tabs                                                   */
/* ------------------------------------------------------------------ */
function ProviderTabs() {
  const providers = [
    {
      name: "fal",
      brand: "fal",
      description:
        "Video, audio, and mixed-media generation with queue-first orchestration.",
      models: [
        "nano-banana-2",
        "nano-banana-pro",
        "flux-pro/kontext",
        "kling-video/v3/pro",
        "ltx-2.3/image-to-video/fast",
        "veo-3.1",
      ],
      mode: "Queue + webhook",
    },
    {
      name: "Gemini",
      brand: "gemini",
      description: "Fast stills, conversational editing, and concepting.",
      models: ["gemini-2.5-flash-image"],
      mode: "Synchronous",
    },
    {
      name: "Imagen",
      brand: "imagen",
      description:
        "Premium-quality stills, logos, and brand-critical visual generation.",
      models: ["imagen-4"],
      mode: "Synchronous",
    },
    {
      name: "OpenAI",
      brand: "openai",
      description: "Understanding, evaluation, QA, and extraction.",
      models: ["gpt-5.2-multimodal"],
      mode: "Synchronous",
    },
  ];

  return (
    <section className="section-spacing border-b border-[var(--color-border-muted)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Four providers, one broker
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Provider selection is task-driven, not user-selected.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] p-6"
            >
              <div className="flex items-center gap-2">
                <span style={{ color: brandColors[p.brand] }}>
                  <BrandIcon brand={p.brand} size={22} />
                </span>
                <h3 className="text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {p.description}
              </p>
              <div className="mt-4 border-t border-[var(--color-border-muted)] pt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  Models
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.models.map((m) => (
                    <code
                      key={m}
                      className="rounded bg-[var(--color-surface-secondary)] px-1.5 py-0.5 text-xs text-[var(--color-text-secondary)]"
                    >
                      {m}
                    </code>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <span className="rounded-full bg-[var(--color-surface-inset)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                  {p.mode}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Timeline / Roadmap                                              */
/* ------------------------------------------------------------------ */
function Timeline() {
  const items = [
    {
      version: "v0.1",
      title: "Schemas + Provider Broker",
      description:
        "JSON schemas, provider broker, manifest CLI, and first example workflow.",
      status: "In progress",
    },
    {
      version: "v0.2",
      title: "Polish / Export / QA",
      description:
        "Caption cleanup, brand preset validator, aspect-ratio export packager, QA report, and n8n templates.",
      status: "Planned",
    },
    {
      version: "v0.2.5",
      title: "Platform Ops",
      description:
        "fal Platform API wrapper for usage tracking, cost estimation, and queue monitoring.",
      status: "Planned",
    },
    {
      version: "v0.3",
      title: "Analytics + Recommendations",
      description:
        "Normalized analytics schema, performance reports, recommendation engine, and benchmark runner.",
      status: "Planned",
    },
  ];

  return (
    <section className="section-spacing border-b border-[var(--color-border-muted)] bg-[var(--color-surface-secondary)]">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          Roadmap
        </h2>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-[var(--color-border-default)]" />

          <div className="space-y-10">
            {items.map((item) => (
              <div key={item.version} className="relative pl-12">
                {/* Dot */}
                <div
                  className={`absolute left-2.5 top-1 h-3 w-3 rounded-full ring-4 ring-[var(--color-surface-secondary)] ${
                    item.status === "In progress"
                      ? "bg-[var(--color-accent-primary)]"
                      : "bg-[var(--color-border-default)]"
                  }`}
                />
                <div className="flex items-baseline gap-3">
                  <code className="text-sm font-semibold text-[var(--color-accent-primary)]">
                    {item.version}
                  </code>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      item.status === "In progress"
                        ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent-emphasis)]"
                        : "bg-[var(--color-surface-tertiary)] text-[var(--color-text-muted)]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. FAQ                                                             */
/* ------------------------------------------------------------------ */
function FAQ() {
  const questions = [
    {
      q: "Is this a creator app?",
      a: "No. It is the infrastructure layer between generation and publishing. You bring your own UI or orchestration.",
    },
    {
      q: "Does it replace fal, Gemini, Imagen, or OpenAI?",
      a: "No. It brokers across them. Each provider handles what it does best \u2014 the kit normalizes the workflow around them.",
    },
    {
      q: "Is it focused on stills only?",
      a: "No. The model map includes stills, video, audio, utility transforms (background removal, upscaling, vector conversion), and more.",
    },
    {
      q: "Is this for agencies only?",
      a: "No. It is for agency UGC, studio workflows, creator pipelines, and any team that needs a repeatable mediaops workflow.",
    },
    {
      q: "Why open-source this?",
      a: "Because the finishing/export/QA layer is still thin or proprietary across the current landscape. No open-source tool covers it.",
    },
  ];

  return (
    <section className="section-spacing border-b border-[var(--color-border-muted)]">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          FAQ
        </h2>

        <div className="mt-12 divide-y divide-[var(--color-border-muted)]">
          {questions.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-[var(--color-text-primary)]">
                {item.q}
                <span className="ml-4 text-[var(--color-text-muted)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  9. CTA Banner                                                      */
/* ------------------------------------------------------------------ */
function CTABanner() {
  return (
    <section className="section-spacing bg-[var(--color-surface-secondary)]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Help build the open finishing layer for generative media
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          ugc-mediaops-kit is early and open. Contributions, feedback, and
          real-world use cases welcome.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Insightpulseai/ugc-mediaops-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-emphasis)]"
          >
            Star the repo
          </a>
          <a
            href="https://github.com/Insightpulseai/ugc-mediaops-kit/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-tertiary)]"
          >
            Open an issue
          </a>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-tertiary)]"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <>
      <EyebrowBanner />
      <Hero />
      <LogoMarquee />
      <BentoGrid />
      <RiverSections />
      <ProviderTabs />
      <Timeline />
      <FAQ />
      <CTABanner />
    </>
  );
}
