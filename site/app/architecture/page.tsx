import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { BrandIcon, brandColors } from "@/components/BrandIcon";

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[var(--color-text-muted)]">
        <Link href="/" className="hover:text-[var(--color-accent-primary)]">
          Overview
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-text-primary)]">Architecture</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight">Architecture</h1>
      <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
        ugc-mediaops-kit sits between AI generation providers and publishing
        platforms, handling the finishing workflow that makes content
        publish-ready.
      </p>

      {/* System diagram — SVG with real brand colors */}
      <div className="mt-10 rounded-xl border border-[var(--color-border-muted)] bg-[var(--color-surface-secondary)] p-6">
        <ArchitectureDiagram className="w-full" />
      </div>

      {/* Services */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Services</h2>

        <h3 className="mt-8 text-lg font-semibold text-[var(--color-text-secondary)]">
          Pipeline Services
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border-default)] text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                <th className="pb-3 pr-4">Service</th>
                <th className="pb-3 pr-4">Role</th>
                <th className="pb-3">Tech</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-muted)]">
              {[
                ["Schemas", "Typed data contracts for every pipeline artifact", "JSON Schema"],
                ["Provider Broker", "Normalizes provider APIs behind a single job interface", "TypeScript"],
                ["Pipeline Runner", "Orchestrates brief \u2192 generate \u2192 polish \u2192 export \u2192 publish", "TypeScript / n8n"],
                ["Brand Preset Engine", "Applies and validates brand rules on output assets", "TypeScript"],
                ["Export Packager", "Platform-specific format packaging and metadata", "TypeScript"],
                ["QA / Eval", "Automated quality checks before publish handoff", "TypeScript"],
              ].map(([service, role, tech]) => (
                <tr key={service}>
                  <td className="py-3 pr-4 font-medium">{service}</td>
                  <td className="py-3 pr-4 text-[var(--color-text-secondary)]">{role}</td>
                  <td className="py-3">
                    <code className="rounded bg-[var(--color-surface-secondary)] px-1.5 py-0.5 text-xs">
                      {tech}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 text-lg font-semibold text-[var(--color-text-secondary)]">
          External Providers
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border-default)] text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                <th className="pb-3 pr-4">Provider</th>
                <th className="pb-3 pr-4">Role</th>
                <th className="pb-3">Integration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-muted)]">
              {[
                { provider: "fal.ai", brand: "fal", role: "Video, audio, mixed-media, utility transforms", mode: "Queue + webhook" },
                { provider: "Gemini", brand: "gemini", role: "Fast stills, conversational editing", mode: "Synchronous" },
                { provider: "Imagen", brand: "imagen", role: "Premium stills, logos, brand visuals", mode: "Synchronous" },
                { provider: "OpenAI", brand: "openai", role: "Understanding, evaluation, QA (not generation)", mode: "Synchronous" },
              ].map(({ provider, brand, role, mode }) => (
                <tr key={provider}>
                  <td className="py-3 pr-4 font-medium">
                    <span className="inline-flex items-center gap-2">
                      <span style={{ color: brandColors[brand] }}>
                        <BrandIcon brand={brand} size={16} />
                      </span>
                      {provider}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-[var(--color-text-secondary)]">{role}</td>
                  <td className="py-3">
                    <span className="rounded-full bg-[var(--color-surface-inset)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                      {mode}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pipeline stages */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Pipeline Stages</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "1", title: "Capture", items: ["Brief", "Assets", "Metadata"] },
            { n: "2", title: "Generate", items: ["Provider routing", "Queue/poll", "Webhook"] },
            { n: "3", title: "Polish", items: ["Caption cleanup", "Upscale", "Style transfer"] },
            { n: "4", title: "Brand", items: ["Fonts/colors", "Watermark", "Safe area"] },
            { n: "5", title: "Export", items: ["TikTok 9:16", "Reels 9:16", "YouTube 16:9"] },
            { n: "6", title: "QA/Eval", items: ["Caption check", "Aspect ratio", "Brand compliance"] },
            { n: "7", title: "Publish", items: ["Schedule", "Approve", "Deliver"] },
            { n: "8", title: "Analytics", items: ["Retention", "CTR", "Next brief"] },
          ].map((stage) => (
            <div
              key={stage.n}
              className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] p-4"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-subtle)] text-xs font-bold text-[var(--color-accent-emphasis)]">
                  {stage.n}
                </span>
                <h3 className="text-sm font-semibold">{stage.title}</h3>
              </div>
              <ul className="mt-2 space-y-1">
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-[var(--color-text-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Output model */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Output Model</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              tier: "Bronze",
              color: "bg-amber-50 text-amber-800 border-amber-200",
              content: "Raw briefs, prompts, assets, render logs, provider responses",
              consumer: "Pipeline internals",
            },
            {
              tier: "Silver",
              color: "bg-gray-50 text-gray-700 border-gray-200",
              content: "Normalized jobs, metadata, QC signals, export manifests",
              consumer: "Ops dashboards",
            },
            {
              tier: "Gold",
              color: "bg-yellow-50 text-yellow-800 border-yellow-200",
              content: "Campaign KPIs, creative performance summaries, recommendations",
              consumer: "Business reporting",
            },
          ].map((t) => (
            <div
              key={t.tier}
              className={`rounded-xl border p-5 ${t.color}`}
            >
              <h3 className="text-sm font-bold">{t.tier}</h3>
              <p className="mt-2 text-sm opacity-80">{t.content}</p>
              <p className="mt-3 text-xs font-medium opacity-60">
                Consumer: {t.consumer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* fal Integration */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">fal Integration Layers</h2>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
          fal is not one undifferentiated API. Four distinct integration
          surfaces, phased across the roadmap.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border-default)] text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                <th className="pb-3 pr-4">Layer</th>
                <th className="pb-3 pr-4">fal Surface</th>
                <th className="pb-3 pr-4">Module</th>
                <th className="pb-3">Phase</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-muted)]">
              {[
                ["1. Generation", "Model APIs", "providers/fal/", "v0.1"],
                ["2. Orchestration", "n8n integration", "pipeline/", "v0.1"],
                ["3. Platform ops", "Platform APIs", "planned", "v0.2"],
                ["4. Custom deploy", "CLI + Python SDK", "deferred", "v0.3+"],
              ].map(([layer, surface, mod, phase]) => (
                <tr key={layer}>
                  <td className="py-3 pr-4 font-medium">{layer}</td>
                  <td className="py-3 pr-4 text-[var(--color-text-secondary)]">{surface}</td>
                  <td className="py-3 pr-4">
                    <code className="rounded bg-[var(--color-surface-secondary)] px-1.5 py-0.5 text-xs">
                      {mod}
                    </code>
                  </td>
                  <td className="py-3">
                    <span className="rounded-full bg-[var(--color-surface-inset)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                      {phase}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[var(--color-text-muted)]">
          Generation goes through Model APIs. Platform APIs are for metadata,
          pricing, usage, and analytics &mdash; never for executing model calls.
        </p>
      </section>
    </div>
  );
}
