import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <nav className="mb-8 text-sm text-[var(--color-text-muted)]">
        <Link href="/" className="hover:text-[var(--color-accent-primary)]">
          Overview
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-text-primary)]">Docs</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
      <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
        Architecture docs, schema references, and integration guides.
      </p>

      {/* Architecture docs */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Architecture</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Overview",
              description: "System context, data model, services, and pipeline stages",
              href: "/architecture",
            },
            {
              title: "Provider Policy",
              description: "Provider routing doctrine and model shortlist",
              href: "/providers",
            },
            {
              title: "fal Integration Strategy",
              description: "Four-layer fal integration architecture",
              file: "docs/architecture/FAL_INTEGRATION_STRATEGY.md",
            },
            {
              title: "Brand Presets",
              description: "Brand preset architecture and enforcement rules",
              file: "docs/architecture/BRAND_PRESETS.md",
              planned: true,
            },
            {
              title: "Export Profiles",
              description: "Platform-specific export format specifications",
              file: "docs/architecture/EXPORT_PROFILES.md",
              planned: true,
            },
            {
              title: "QA / Evals",
              description: "Automated quality checks and evaluation framework",
              file: "docs/architecture/QA_EVALS.md",
              planned: true,
            },
          ].map((doc) => (
            <div
              key={doc.title}
              className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] p-4"
            >
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold">{doc.title}</h3>
                {"planned" in doc && doc.planned && (
                  <span className="rounded-full bg-[var(--color-surface-inset)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                    Planned
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                {doc.description}
              </p>
              {"href" in doc && doc.href ? (
                <Link
                  href={doc.href}
                  className="mt-3 inline-block text-xs font-medium text-[var(--color-accent-primary)] hover:underline"
                >
                  Read &rarr;
                </Link>
              ) : (
                <a
                  href={`https://github.com/Insightpulseai/ugc-mediaops-kit/blob/main/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-medium text-[var(--color-accent-primary)] hover:underline"
                >
                  View on GitHub &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Schemas */}
      <section className="mt-16">
        <h2 className="text-xl font-bold">Schemas</h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          JSON Schema definitions for the pipeline data model.
        </p>
        <div className="mt-4 divide-y divide-[var(--color-border-muted)] rounded-xl border border-[var(--color-border-default)]">
          {[
            {
              name: "CreativeBrief",
              file: "creative_brief.schema.json",
              description: "Intake: brand, audience, platform targets, creative direction",
            },
            {
              name: "AssetJob",
              file: "asset_job.schema.json",
              description: "Individual generation/edit job with provider routing and status",
            },
            {
              name: "BrandPreset",
              file: "brand_preset.schema.json",
              description: "Brand rules: fonts, colors, watermarks, title safe areas",
            },
            {
              name: "ExportProfile",
              file: "export_profile.schema.json",
              description: "Platform format specs: aspect ratio, duration, codec, metadata",
            },
            {
              name: "PublishPlan",
              file: "publish_plan.schema.json",
              description: "Scheduling and delivery targets per platform",
            },
            {
              name: "PerformanceReport",
              file: "performance_report.schema.json",
              description: "Post-publish analytics: retention, CTR, hook performance",
            },
          ].map((schema) => (
            <div key={schema.name} className="flex items-center justify-between px-4 py-3">
              <div>
                <code className="text-sm font-semibold">{schema.name}</code>
                <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                  {schema.description}
                </p>
              </div>
              <code className="hidden text-xs text-[var(--color-text-muted)] sm:block">
                {schema.file}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Getting started */}
      <section className="mt-16">
        <h2 className="text-xl font-bold">Getting Started</h2>
        <div className="mt-4 diagram-block">
          <pre className="text-sm text-[var(--color-text-secondary)]">
{`# Clone the repo
git clone https://github.com/Insightpulseai/ugc-mediaops-kit.git
cd ugc-mediaops-kit

# Explore the architecture
cat docs/architecture/OVERVIEW.md

# Review provider policy
cat docs/architecture/PROVIDER_POLICY.md

# Check fal integration strategy
cat docs/architecture/FAL_INTEGRATION_STRATEGY.md`}
          </pre>
        </div>
      </section>

      {/* Contributing */}
      <section className="mt-16 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-secondary)] p-6">
        <h2 className="text-lg font-bold">Contributing</h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          ugc-mediaops-kit is early and open. We welcome contributions in
          schemas, provider adapters, pipeline modules, QA checks, example
          workflows, and documentation.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://github.com/Insightpulseai/ugc-mediaops-kit/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-tertiary)]"
          >
            Open an issue
          </a>
          <a
            href="https://github.com/Insightpulseai/ugc-mediaops-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-tertiary)]"
          >
            View the repo
          </a>
        </div>
      </section>
    </div>
  );
}
