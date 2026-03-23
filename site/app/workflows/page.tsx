import Link from "next/link";

export default function WorkflowsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <nav className="mb-8 text-sm text-[var(--color-text-muted)]">
        <Link href="/" className="hover:text-[var(--color-accent-primary)]">
          Overview
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-text-primary)]">Workflows</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight">Workflows</h1>
      <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
        Three reference workflows that demonstrate the full brief-to-publish
        pipeline.
      </p>

      {/* Workflow cards */}
      <div className="mt-12 space-y-8">
        {[
          {
            title: "Creator Short-Form",
            slug: "creator_shortform",
            description:
              "Single creator, shoot-to-publish same day. Covers the fastest path from raw footage to published content across TikTok, Reels, and Shorts.",
            steps: [
              "Import footage + brief",
              "AI polish (upscale, caption, cleanup)",
              "Apply creator brand preset",
              "Export 9:16 for TikTok, Reels, Shorts",
              "QA check",
              "Publish handoff",
            ],
            providers: ["fal (video polish)", "OpenAI (caption QA)"],
          },
          {
            title: "Agency Batch Campaign",
            slug: "agency_batch_campaign",
            description:
              "Multi-asset batch generation for a campaign. Demonstrates provider routing across stills and video, brand preset enforcement, and multi-platform export.",
            steps: [
              "Parse campaign brief (5-20 assets)",
              "Route stills to Gemini/Imagen, video to fal",
              "Collect generated assets",
              "Apply agency brand preset",
              "Export all platform variants",
              "Run batch QA",
              "Generate campaign report",
            ],
            providers: [
              "fal (video generation)",
              "Gemini (fast stills)",
              "Imagen (hero stills)",
              "OpenAI (batch QA)",
            ],
          },
          {
            title: "Studio Same-Day Publish",
            slug: "studio_same_day_publish",
            description:
              "Full end-to-end pipeline from a physical studio session. Covers the complete workflow from camera footage through AI enhancement, brand finishing, multi-platform export, and publish scheduling.",
            steps: [
              "Ingest studio footage + session brief",
              "AI enhancement (upscale, color, style)",
              "Generate supplementary stills",
              "Apply studio brand preset",
              "Export for all target platforms",
              "Full QA pass",
              "Schedule publish across platforms",
              "Write analytics to data plane",
            ],
            providers: [
              "fal (video, upscale, BG removal)",
              "Gemini (supplementary stills)",
              "OpenAI (QA, captioning)",
            ],
          },
        ].map((wf) => (
          <div
            key={wf.slug}
            className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] p-6"
          >
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">{wf.title}</h2>
              <code className="rounded bg-[var(--color-surface-secondary)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                examples/{wf.slug}/
              </code>
            </div>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
              {wf.description}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Steps
                </p>
                <ol className="mt-3 space-y-2">
                  {wf.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-subtle)] text-xs font-bold text-[var(--color-accent-emphasis)]">
                        {i + 1}
                      </span>
                      <span className="text-[var(--color-text-secondary)]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Providers used
                </p>
                <div className="mt-3 space-y-2">
                  {wf.providers.map((p) => (
                    <div
                      key={p}
                      className="rounded-lg bg-[var(--color-surface-secondary)] px-3 py-2 text-sm text-[var(--color-text-secondary)]"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Orchestration */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Orchestration</h2>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
          n8n is the primary orchestration lane. No custom code needed for basic
          submit/poll/collect flows.
        </p>
        <div className="mt-6 diagram-block">
          <pre className="text-sm text-[var(--color-text-secondary)]">
{`Brief intake trigger
     │
     ▼
Queue submit to fal  ←  Authorization: Key header
     │
     ▼
Poll for completion  ←  or webhook callback
     │
     ▼
Collect artifacts
     │
     ▼
QA/eval gate  ←  block on failure
     │
     ▼
Export package
     │
     ▼
Publish handoff
     │
     ▼
Analytics emit  →  governed data plane`}
          </pre>
        </div>
      </section>
    </div>
  );
}
