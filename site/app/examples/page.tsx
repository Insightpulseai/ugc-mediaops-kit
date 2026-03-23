import Link from "next/link";

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <nav className="mb-8 text-sm text-[var(--color-text-muted)]">
        <Link href="/" className="hover:text-[var(--color-accent-primary)]">
          Overview
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-text-primary)]">Examples</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight">Examples</h1>
      <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
        Reference implementations showing the pipeline in action.
      </p>

      {/* Example: Creative Brief */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Creative Brief</h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          A minimal creative brief that drives the pipeline.
        </p>
        <div className="diagram-block mt-4">
          <pre className="text-sm text-[var(--color-text-secondary)]">
{`{
  "brief_id": "brief-001",
  "brand": "acme-studio",
  "audience": "18-34 creators",
  "platforms": ["tiktok", "reels", "shorts"],
  "direction": "Product unboxing with upbeat energy",
  "assets": [
    { "type": "video", "source": "camera", "path": "raw/unbox-01.mp4" },
    { "type": "still", "source": "generate", "prompt": "Product hero shot" }
  ],
  "brand_preset": "acme-studio-v2",
  "export_profiles": ["tiktok-9x16", "reels-9x16", "shorts-9x16"]
}`}
          </pre>
        </div>
      </section>

      {/* Example: Job Manifest */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Job Manifest</h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          The broker creates individual jobs from the brief.
        </p>
        <div className="diagram-block mt-4">
          <pre className="text-sm text-[var(--color-text-secondary)]">
{`{
  "job_id": "job-001-still",
  "brief_id": "brief-001",
  "type": "still.generate.fast",
  "provider": "fal",
  "model": "nano-banana-2",
  "status": "queued",
  "input": {
    "prompt": "Product hero shot, studio lighting, white background",
    "aspect_ratio": "9:16",
    "style": "commercial"
  },
  "output": null,
  "created_at": "2026-03-23T09:00:00Z"
}`}
          </pre>
        </div>
      </section>

      {/* Example: Export Profile */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Export Profile</h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Platform-specific format specs that drive the export packager.
        </p>
        <div className="diagram-block mt-4">
          <pre className="text-sm text-[var(--color-text-secondary)]">
{`{
  "profile_id": "tiktok-9x16",
  "platform": "tiktok",
  "aspect_ratio": "9:16",
  "resolution": { "width": 1080, "height": 1920 },
  "max_duration_seconds": 180,
  "codec": "h264",
  "container": "mp4",
  "framerate": 30,
  "caption": {
    "required": true,
    "max_length": 2200,
    "hashtags": true
  },
  "thumbnail": {
    "required": true,
    "resolution": { "width": 1080, "height": 1920 }
  }
}`}
          </pre>
        </div>
      </section>

      {/* Example: Brand Preset */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Brand Preset</h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Brand rules as version-controlled configuration.
        </p>
        <div className="diagram-block mt-4">
          <pre className="text-sm text-[var(--color-text-secondary)]">
{`{
  "preset_id": "acme-studio-v2",
  "brand": "Acme Studio",
  "fonts": {
    "heading": { "family": "Inter", "weight": 700 },
    "body": { "family": "DM Sans", "weight": 400 }
  },
  "colors": {
    "primary": "#1868db",
    "secondary": "#59636e",
    "background": "#ffffff"
  },
  "safe_area": {
    "top_px": 64,
    "bottom_px": 80,
    "sides_px": 32
  },
  "watermark": {
    "enabled": true,
    "position": "bottom-right",
    "opacity": 0.4,
    "asset": "assets/watermark.png"
  },
  "subtitle_style": {
    "font": "DM Sans",
    "size": 16,
    "color": "#ffffff",
    "background": "rgba(0,0,0,0.6)"
  }
}`}
          </pre>
        </div>
      </section>

      <div className="mt-16 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-secondary)] p-6 text-center">
        <p className="text-sm text-[var(--color-text-secondary)]">
          More examples coming in v0.1. See the{" "}
          <code className="rounded bg-[var(--color-surface-primary)] px-1.5 py-0.5 text-xs">
            examples/
          </code>{" "}
          directory in the repo.
        </p>
        <a
          href="https://github.com/Insightpulseai/ugc-mediaops-kit/tree/main/examples"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-primary)] hover:underline"
        >
          View on GitHub &rarr;
        </a>
      </div>
    </div>
  );
}
