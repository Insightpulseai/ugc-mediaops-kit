# Architecture Overview

## System context

ugc-mediaops-kit is the open-source infrastructure layer for agency UGC and generative media workflows. It sits between AI generation providers and publishing platforms, handling the finishing workflow that makes content publish-ready.

```
                    ┌──────────────────────────────────────────┐
                    │          ugc-mediaops-kit                 │
                    │                                          │
 Creative Brief ───▶│  Schemas ─▶ Broker ─▶ Pipeline ─▶ Export │───▶ Platform
                    │              │            │               │    (TikTok,
 Raw Assets ───────▶│              ▼            ▼               │     Reels,
                    │         Providers     QA/Eval             │     Shorts,
                    │                                          │     YouTube)
                    └──────────────────────────────────────────┘
                              │         │           │
                         ┌────┘    ┌────┘      ┌────┘
                         ▼         ▼           ▼
                       fal.ai   Gemini/    OpenAI
                       (video,  Imagen     (eval,
                        audio)  (stills)    QA)
```

## Data model

The pipeline operates on six core schemas:

| Schema | Purpose |
|--------|---------|
| `CreativeBrief` | Intake document: brand, audience, platform targets, creative direction |
| `AssetJob` | Individual generation/edit job with provider routing and status |
| `BrandPreset` | Brand enforcement rules: fonts, colors, watermarks, title safe areas |
| `ExportProfile` | Platform-specific format specs: aspect ratio, duration, codec, metadata |
| `PublishPlan` | Scheduling and delivery targets per platform |
| `PerformanceReport` | Normalized post-publish analytics: retention, CTR, hook performance |

## Provider broker

The broker normalizes provider differences behind a single job interface. Provider selection is task-driven, not user-selected:

- **fal.ai** — Video, audio, mixed-media, utility transforms. Queue-based async with webhook callbacks.
- **Gemini** — Fast stills, conversational editing, concepting. Synchronous.
- **Imagen** — Premium-quality stills, logos, brand-critical visuals. Synchronous.
- **OpenAI multimodal** — Understanding, evaluation, QA, extraction. Not a generation provider.

### fal integration layers

fal is not one undifferentiated API. The integration maps to four distinct surfaces:

| Layer | fal Surface | Module | Phase |
|-------|------------|--------|-------|
| 1. Generation | Model APIs | `providers/fal/` | v0.1 |
| 2. Orchestration | n8n integration | `pipeline/` | v0.1 |
| 3. Platform ops | Platform APIs | (planned) | v0.2 |
| 4. Custom deploy | CLI + Python SDK | Deferred | v0.3+ |

Generation goes through Model APIs. Platform APIs are for metadata, pricing, usage, and analytics — never for executing model calls. See [FAL_INTEGRATION_STRATEGY.md](FAL_INTEGRATION_STRATEGY.md).

## Pipeline stages

```
1. Capture/Ingest ─▶ 2. Generate/Edit ─▶ 3. AI Polish ─▶ 4. Brand Presets
                                                              │
                                                              ▼
        8. Analytics ◀── 7. Publish ◀── 6. QA/Eval ◀── 5. Platform Export
```

Each stage produces typed artifacts that flow into the next. The pipeline runner manages state transitions and artifact collection.

## Orchestration

n8n is the first orchestration lane:

1. Brief intake trigger
2. Queue submit to fal model endpoints (`Authorization: Key` header auth)
3. Poll for completion or handle webhook callbacks
4. Asset state transitions
5. QA/eval gate
6. Publish handoff
7. Analytics handoff to governed data plane

Custom orchestration (programmatic runner) is available as a second lane for embedded use cases.

## Output model (Bronze / Silver / Gold)

| Tier | Content |
|------|---------|
| **Bronze** | Raw briefs, prompts, assets, render logs, provider responses |
| **Silver** | Normalized jobs, metadata, QC signals, export manifests |
| **Gold** | Campaign-ready KPIs, creative performance summaries, recommendation outputs |

## Module structure

```
ugc-mediaops-kit/
  schemas/                    # JSON schemas for pipeline data model
  providers/                  # Provider broker adapters
    fal/                      # fal.ai: video, audio, mixed-media, utilities
    gemini/                   # Gemini: fast stills, editing
    imagen/                   # Imagen: premium stills
    openai/                   # OpenAI: eval, QA, understanding
  pipeline/                   # Workflow runner
  evals/                      # QA/eval framework
  examples/                   # Example workflows
    creator_shortform/        # Single creator, shoot-to-publish
    agency_batch_campaign/    # Multi-asset batch generation
    studio_same_day_publish/  # Full pipeline end-to-end
  docs/
    architecture/
      OVERVIEW.md             # This file
      PROVIDER_POLICY.md      # Provider routing doctrine
      FAL_INTEGRATION_STRATEGY.md  # fal integration layers
      BRAND_PRESETS.md        # Brand preset architecture
      EXPORT_PROFILES.md      # Platform export profiles
      QA_EVALS.md             # QA/eval framework
```

## Open-source boundary

### In scope (this repo)

- Brief/job schemas
- Provider broker interfaces
- Pipeline runner
- Brand preset engine
- Platform export profiles
- QA/eval framework
- Analytics/report schema
- Example workflows

### Out of scope (separate commercial layer)

- Customer workspace UI
- Billing/pricing logic
- Proprietary brand presets
- Internal benchmarks
- Private approval/admin flows

## Build order

1. **v0.1** — Schemas + provider broker + manifest CLI
2. **v0.2** — Polish/export/QA pipeline + n8n templates
3. **v0.2.5** — Platform ops wrapper (fal usage/pricing/analytics)
4. **v0.3** — Analytics schema + recommendation loop

---

*Last updated: 2026-03-23*
