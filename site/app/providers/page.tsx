import Link from "next/link";
import { BrandIcon, brandColors } from "@/components/BrandIcon";

export default function ProvidersPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <nav className="mb-8 text-sm text-[var(--color-text-muted)]">
        <Link href="/" className="hover:text-[var(--color-accent-primary)]">
          Overview
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--color-text-primary)]">Providers</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight">Provider Policy</h1>
      <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
        Use OpenAI to understand, evaluate, extract, and review. Use Gemini /
        Imagen / fal to generate, depending on modality and quality tier.
      </p>

      {/* Provider cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {[
          {
            name: "fal.ai",
            brand: "fal",
            role: "Video, audio, mixed-media generation",
            when: "UGC video/audio, batch media, queue-based production",
            mode: "Queue + webhook",
            models: [
              { id: "nano-banana-2", job: "Fast stills" },
              { id: "nano-banana-pro", job: "Premium stills" },
              { id: "flux-pro/kontext", job: "Brand editing" },
              { id: "gpt-image-1.5", job: "High-fidelity fallback" },
              { id: "kling-video/v3/pro/image-to-video", job: "Premium video" },
              { id: "kling-o3-image-to-video-pro", job: "Transitions" },
              { id: "veo-3.1", job: "Google premium video" },
              { id: "ltx-2.3/image-to-video/fast", job: "Fast batch video" },
              { id: "ltx-2.3/extend-video", job: "Video extension" },
              { id: "pixelcut/background-removal", job: "BG removal" },
              { id: "seedvr/upscale/image", job: "Upscaling" },
              { id: "omnilottie/image-to-lottie", job: "Motion graphics" },
              { id: "vecglypher/image-to-svg", job: "Vector/SVG" },
            ],
          },
          {
            name: "Gemini",
            brand: "gemini",
            role: "Fast stills, conversational editing, native image generation",
            when: "Default for speed, iteration, editing, concepting",
            mode: "Synchronous",
            models: [
              { id: "gemini-2.5-flash-image", job: "Default fast" },
              { id: "gemini-3-pro-image-preview", job: "Premium escalation" },
            ],
          },
          {
            name: "Imagen",
            brand: "imagen",
            role: "Premium-quality stills",
            when: "Brand-critical visuals, logos, product imagery",
            mode: "Synchronous",
            models: [{ id: "imagen-4", job: "Premium stills" }],
          },
          {
            name: "Sora 2",
            brand: "sora",
            role: "AI video generation (Azure OpenAI)",
            when: "Premium cinematic video, Azure-native pipelines",
            mode: "Queue (Azure)",
            models: [
              { id: "sora-2", job: "Video generation" },
              { id: "sora-2 (storyboard)", job: "Multi-scene storyboard" },
            ],
          },
          {
            name: "OpenAI Multimodal",
            brand: "openai",
            role: "Understanding, evaluation, QA",
            when: "Creative QA, captioning, scoring, extraction",
            mode: "Synchronous",
            models: [{ id: "gpt-5.2-multimodal", job: "Eval / QA" }],
          },
        ].map((provider) => (
          <div
            key={provider.name}
            className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-primary)] p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {provider.brand && (
                  <span style={{ color: brandColors[provider.brand] }}>
                    <BrandIcon brand={provider.brand} size={20} />
                  </span>
                )}
                <h2 className="text-xl font-bold">{provider.name}</h2>
              </div>
              <span className="rounded-full bg-[var(--color-surface-inset)] px-2.5 py-0.5 text-xs text-[var(--color-text-muted)]">
                {provider.mode}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-[var(--color-accent-primary)]">
              {provider.role}
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              {provider.when}
            </p>

            <div className="mt-5 border-t border-[var(--color-border-muted)] pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Model map
              </p>
              <div className="mt-3 space-y-2">
                {provider.models.map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between rounded-lg bg-[var(--color-surface-secondary)] px-3 py-2"
                  >
                    <code className="text-xs text-[var(--color-text-primary)]">
                      {m.id}
                    </code>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {m.job}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* OpenAI role clarification */}
      <section className="mt-16 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-secondary)] p-6">
        <h2 className="text-lg font-bold">OpenAI is not a generation provider</h2>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
          OpenAI multimodal is the understanding and evaluation layer. It
          handles vision-based QA, asset captioning, creative scoring, and
          document extraction. It does not replace fal for video, Gemini for
          fast stills, or Imagen for premium stills.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-success)]">
              Primary jobs
            </p>
            <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li>Vision and document understanding</li>
              <li>Image evaluation and quality review</li>
              <li>Asset captioning and tagging</li>
              <li>Multimodal QA scoring</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-attention)]">
              Not for
            </p>
            <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li>Fast conversational image generation (use Gemini)</li>
              <li>Premium stills (use Imagen)</li>
              <li>Video / audio / mixed-media (use fal)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
