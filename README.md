# ugc-mediaops-kit

Open-source finishing pipeline for agency UGC and generative media workflows.

**Brief → Generate → Polish → Export → Evaluate → Publish**

## What this solves

AI can generate assets. The bottleneck is everything after: formatting, branding, QA, export packaging, and publish handoff. ugc-mediaops-kit is the repeatable last-mile workflow that turns raw or AI-generated content into finished, platform-ready deliverables.

## Architecture

```
┌─────────────┐    ┌──────────────┐    ┌───────────┐    ┌────────────┐
│  Creative   │───▶│   Provider   │───▶│  Pipeline  │───▶│   Export   │
│   Brief     │    │   Broker     │    │   Runner   │    │  Packager  │
└─────────────┘    └──────────────┘    └───────────┘    └────────────┘
                          │                   │                │
                   ┌──────┴──────┐     ┌──────┴──────┐  ┌─────┴─────┐
                   │ fal │Gemini │     │ Brand│ QA/  │  │ TikTok    │
                   │ Img │OpenAI │     │Preset│ Eval │  │ Reels YT  │
                   └─────┴──────┘     └──────┴──────┘  └───────────┘
```

### Provider split

| Provider | Role |
|----------|------|
| **fal.ai** | Video, audio, mixed-media generation (queue-based) |
| **Gemini** | Fast stills, conversational editing, concepting |
| **Imagen** | Premium-quality stills, logos, brand-critical visuals |
| **OpenAI multimodal** | Understanding, evaluation, QA, extraction |

Generation providers produce assets. OpenAI evaluates and reviews them. The broker routes jobs to the right provider based on modality and quality tier.

### Workflow stages

1. **Capture / Ingest** — Accept brief, footage, AI-generated assets
2. **Generate / Edit** — Provider-routed generation and editing
3. **AI Polish** — Caption cleanup, style transfer, enhancement
4. **Brand Presets** — Apply brand guidelines, enforce consistency
5. **Platform Exports** — Format packaging (TikTok, Reels, Shorts, YouTube, 1:1, 16:9, 9:16)
6. **QA / Eval** — Automated quality checks before publish
7. **Publish Handoff** — Schedule, approve, deliver to platforms
8. **Analytics** — Performance tracking, next-brief recommendations

## Project structure

```
ugc-mediaops-kit/
  schemas/           # JSON schemas (CreativeBrief, AssetJob, BrandPreset, ExportProfile, etc.)
  providers/         # Provider broker adapters
    fal/             # fal.ai model adapter (queue + webhook)
    gemini/          # Gemini direct adapter
    imagen/          # Imagen adapter
    openai/          # OpenAI multimodal adapter (eval/QA)
  pipeline/          # Workflow runner (brief → jobs → artifacts → export)
  evals/             # QA/eval framework (caption, aspect-ratio, brand compliance)
  examples/          # Example workflows
  docs/
    architecture/    # Architecture docs
```

## Modules

### schemas

JSON schemas for the pipeline data model:

- `CreativeBrief` — intake brief with brand, audience, platform targets
- `AssetJob` — individual generation/edit job with provider routing
- `BrandPreset` — brand rules (fonts, colors, watermarks, title safe)
- `ExportProfile` — platform-specific format specs
- `PublishPlan` — scheduling and delivery targets
- `PerformanceReport` — normalized analytics (retention, CTR, hook performance)

### providers (provider-broker)

Normalizes model IDs, submits jobs, maps responses to internal schema.

| Job | Provider | Model |
|-----|----------|-------|
| `still.generate.fast` | fal | `nano-banana-2` |
| `still.generate.premium` | fal | `nano-banana-pro` |
| `still.edit.brand` | fal | `flux-pro/kontext` |
| `still.generate.fallback` | fal | `gpt-image-1.5` |
| `video.generate.premium` | fal | `kling-video/v3/pro/image-to-video` |
| `video.generate.transition` | fal | `kling-o3-image-to-video-pro` |
| `video.generate.google` | fal | `veo-3.1` |
| `video.generate.fast` | fal | `ltx-2.3/image-to-video/fast` |
| `video.extend` | fal | `ltx-2.3/extend-video` |
| `asset.remove_background` | fal | `pixelcut/background-removal` |
| `asset.upscale` | fal | `seedvr/upscale/image` |
| `asset.to_lottie` | fal | `omnilottie/image-to-lottie` |
| `asset.to_svg` | fal | `vecglypher/image-to-svg` |

### pipeline (workflow-runner)

Orchestrates the full brief-to-publish flow:

- `createJobFromBrief` — Parse brief, create job manifest
- `submitFalJob` — Submit to fal queue endpoint
- `pollFalJob` — Poll for completion
- `collectArtifacts` — Collect and store outputs
- `runQaChecks` — Execute QA/eval pipeline
- `buildExportPack` — Create platform-specific export package
- `emitPublishPayload` — Hand off to publish/schedule

Orchestration: n8n first (submit/poll/callback), custom runner later.

### evals (qa-evals)

- Caption completeness check
- Aspect-ratio readiness check
- Brand-preset compliance check
- Title/thumbnail consistency check
- Missing output variants check
- Dead-air / hook / pacing heuristics

## fal integration

fal is the primary mixed-media provider. The integration has four layers:

| Layer | Surface | Module | Phase |
|-------|---------|--------|-------|
| Generation | Model APIs | `providers/fal/` | v0.1 |
| Orchestration | n8n integration | `pipeline/` | v0.1 |
| Platform ops | Platform APIs | (planned) | v0.2 |
| Custom deploy | CLI + Python SDK | Deferred | v0.3+ |

**Rule:** Generation goes through Model APIs. Platform APIs are for metadata/pricing/usage/analytics — never for executing model calls.

See [docs/architecture/FAL_INTEGRATION_STRATEGY.md](docs/architecture/FAL_INTEGRATION_STRATEGY.md) for details.

## Roadmap

- **v0.1** — Schemas + provider broker + manifest CLI + example workflow
- **v0.2** — Polish/export/QA pipeline + n8n workflow templates
- **v0.2.5** — Platform ops wrapper (fal usage/pricing/analytics)
- **v0.3** — Analytics schema + recommendation loop + benchmark runner

## Real-world anchor

This project is abstracted from the operating workflow of a physical creative studio (508.25 sqm, Makati City). The product promise: "Shoot at 9AM. Publish the same day."

## License

Apache 2.0 — see [LICENSE](LICENSE).

---

Built by [InsightPulse AI](https://insightpulseai.com)
