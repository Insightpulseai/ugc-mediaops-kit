import Link from "next/link";
import { BrandIcon, brandColors } from "@/components/BrandIcon";

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
                  {wf.providers.map((p) => {
                    const brandKey = p.split(" ")[0].toLowerCase().replace("(", "");
                    const color = brandColors[brandKey];
                    return (
                      <div
                        key={p}
                        className="flex items-center gap-2 rounded-lg bg-[var(--color-surface-secondary)] px-3 py-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        {color && (
                          <span style={{ color }}>
                            <BrandIcon brand={brandKey} size={14} />
                          </span>
                        )}
                        {p}
                      </div>
                    );
                  })}
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
          <span className="inline-flex items-center gap-1.5">
            <span style={{ color: brandColors.n8n }}><BrandIcon brand="n8n" size={16} /></span>
            n8n
          </span>{" "}
          is the primary orchestration lane. No custom code needed for basic
          submit/poll/collect flows.
        </p>
        <div className="mt-6 rounded-xl border border-[var(--color-border-muted)] bg-[var(--color-surface-secondary)] p-6">
          <svg viewBox="0 0 600 440" className="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="n8n orchestration flow">
            <defs>
              <marker id="wf-arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="7" markerHeight="5" orient="auto-start-auto">
                <path d="M0,0 L10,3.5 L0,7" fill="#94a3b8" />
              </marker>
              <filter id="wf-shadow" x="-4%" y="-4%" width="108%" height="108%">
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.05" />
              </filter>
            </defs>
            {[
              { y: 0, label: "Brief intake trigger", note: "", color: "#1868db", bg: "#ddf4ff" },
              { y: 50, label: "Queue submit to fal", note: "Authorization: Key header", color: "#6366f1", bg: "#eef2ff" },
              { y: 100, label: "Poll for completion", note: "or webhook callback", color: "#6366f1", bg: "#eef2ff" },
              { y: 150, label: "Collect artifacts", note: "", color: "#1f2328", bg: "#f6f8fa" },
              { y: 200, label: "QA / eval gate", note: "block on failure", color: "#dc2626", bg: "#fef2f2" },
              { y: 250, label: "Export package", note: "", color: "#1a7f37", bg: "#dcfce7" },
              { y: 300, label: "Publish handoff", note: "", color: "#1a7f37", bg: "#dcfce7" },
              { y: 350, label: "Analytics emit", note: "governed data plane", color: "#7B1FA2", bg: "#f3e5f5" },
            ].map((step, i, arr) => (
              <g key={step.label}>
                <rect x="120" y={step.y + 10} width="260" height="36" rx="8" fill={step.bg} stroke="#d1d9e0" strokeWidth="1" filter="url(#wf-shadow)" />
                <text x="140" y={step.y + 33} fontSize="12" fontWeight="600" fill={step.color} fontFamily="-apple-system, sans-serif">{step.label}</text>
                {step.note && (
                  <text x="400" y={step.y + 33} fontSize="10" fill="#818b98" fontFamily="-apple-system, sans-serif">{step.note}</text>
                )}
                {i < arr.length - 1 && (
                  <line x1="250" y1={step.y + 46} x2="250" y2={step.y + 60} stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#wf-arrow)" />
                )}
              </g>
            ))}
          </svg>
        </div>
      </section>
    </div>
  );
}
