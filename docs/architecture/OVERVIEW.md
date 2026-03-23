# Architecture

ugc-mediaops-kit is the open-source finishing pipeline for agency UGC and generative media workflows. It sits between AI generation providers and publishing platforms.

![ugc-mediaops-kit architecture](/docs/images/architecture.webp#hero)

---

## Services

### Pipeline Services

| Service | Role | Tech |
|---------|------|------|
| **Schemas** | Typed data contracts for every pipeline artifact | JSON Schema |
| **Provider Broker** | Normalizes provider APIs behind a single job interface | TypeScript |
| **Pipeline Runner** | Orchestrates brief → generate → polish → export → publish | TypeScript / n8n |
| **Brand Preset Engine** | Applies and validates brand rules on output assets | TypeScript |
| **Export Packager** | Platform-specific format packaging and metadata | TypeScript |
| **QA / Eval** | Automated quality checks before publish handoff | TypeScript |

### External Providers

| Provider | Role | Integration |
|----------|------|-------------|
| **fal.ai** | Video, audio, mixed-media generation, utility transforms | REST / queue + webhook |
| **Gemini** | Fast stills, conversational editing, concepting | REST / synchronous |
| **Imagen** | Premium-quality stills, logos, brand-critical visuals | REST / synchronous |
| **OpenAI** | Understanding, evaluation, QA, extraction (not generation) | REST / synchronous |

### Infrastructure

| Component | Role | Tech |
|-----------|------|------|
| **Orchestrator** | Workflow trigger, submit, poll, callback, handoff | n8n (primary) / programmatic (secondary) |
| **Object Storage** | Asset storage for generated and exported artifacts | S3-compatible |
| **Analytics Plane** | Post-publish performance data (Bronze → Silver → Gold) | Databricks / any lakehouse |

---

## How Services Connect

```
                         ┌─────────────────────────────────────────────────┐
                         │               ugc-mediaops-kit                  │
                         │                                                 │
                         │  ┌──────────┐    ┌──────────┐    ┌───────────┐  │
  Creative Brief ───────▶│  │  Schema  │───▶│ Provider │───▶│ Pipeline  │  │
                         │  │Validator │    │  Broker  │    │  Runner   │  │
  Raw Assets ───────────▶│  └──────────┘    └────┬─────┘    └─────┬─────┘  │
                         │                       │                │        │
                         │                       ▼                ▼        │
                         │                  ┌─────────┐    ┌───────────┐   │
                         │                  │  Brand  │    │  QA/Eval  │   │
                         │                  │ Presets │    │  Engine   │   │
                         │                  └────┬────┘    └─────┬─────┘   │
                         │                       │               │         │
                         │                       ▼               ▼         │
                         │                  ┌──────────────────────┐       │
                         │                  │   Export Packager    │       │
                         │                  └──────────┬───────────┘       │
                         └─────────────────────────────┼───────────────────┘
                                                       │
                                    ┌──────────────────┼──────────────────┐
                                    ▼                  ▼                  ▼
                               ┌─────────┐      ┌──────────┐      ┌──────────┐
                               │ TikTok  │      │  Reels   │      │ YouTube  │
                               │  9:16   │      │  9:16    │      │  16:9    │
                               └─────────┘      └──────────┘      └──────────┘

              ┌──────────────────────────────────────────────────────────────┐
              │                   External Providers                         │
              │                                                              │
              │   fal.ai          Gemini         Imagen        OpenAI        │
              │   ┌──────┐       ┌──────┐       ┌──────┐     ┌──────┐       │
              │   │video │       │fast  │       │premium│     │eval  │       │
              │   │audio │       │stills│       │stills │     │QA    │       │
              │   │utils │       │edit  │       │logos  │     │review│       │
              │   └──────┘       └──────┘       └──────┘     └──────┘       │
              └──────────────────────────────────────────────────────────────┘
```

**Request flow:**

1. Creative brief or raw assets enter through the **Schema Validator**
2. The **Provider Broker** routes generation jobs to the appropriate provider based on modality and quality tier
3. The **Pipeline Runner** manages state transitions and artifact collection
4. **Brand Presets** enforce brand rules on generated outputs
5. **QA/Eval** runs automated quality checks (caption, aspect-ratio, brand compliance)
6. The **Export Packager** creates platform-specific deliverables
7. Finished packages are handed off to publish targets

---

## Data Model

Six typed schemas define the pipeline contract:

| Schema | Purpose | Stage |
|--------|---------|-------|
| `CreativeBrief` | Intake: brand, audience, platform targets, creative direction | Capture |
| `AssetJob` | Individual generation/edit job with provider routing and status | Generate |
| `BrandPreset` | Brand rules: fonts, colors, watermarks, title safe areas | Polish |
| `ExportProfile` | Platform format specs: aspect ratio, duration, codec, metadata | Export |
| `PublishPlan` | Scheduling and delivery targets per platform | Publish |
| `PerformanceReport` | Post-publish analytics: retention, CTR, hook performance | Analytics |

---

## Provider Broker

Provider selection is **task-driven, not user-selected**. The broker picks the right provider based on the job type.

### Routing rules

| Job Type | Provider | Model | Mode |
|----------|----------|-------|------|
| Fast still generation | fal | `nano-banana-2` | Queue |
| Premium still generation | fal | `nano-banana-pro` | Queue |
| Brand editing / transform | fal | `flux-pro/kontext` | Queue |
| Premium UGC video | fal | `kling-video/v3/pro/image-to-video` | Queue |
| Fast batch video | fal | `ltx-2.3/image-to-video/fast` | Queue |
| Video extension | fal | `ltx-2.3/extend-video` | Queue |
| Google premium video | fal | `veo-3.1` | Queue |
| Background removal | fal | `pixelcut/background-removal` | Queue |
| Upscaling | fal | `seedvr/upscale/image` | Queue |
| Motion graphics | fal | `omnilottie/image-to-lottie` | Queue |
| Vector conversion | fal | `vecglypher/image-to-svg` | Queue |
| Creative QA / scoring | OpenAI | multimodal | Sync |
| Asset captioning | OpenAI | multimodal | Sync |
| Conversational editing | Gemini | `gemini-2.5-flash` | Sync |
| Premium stills | Imagen | `imagen-4` | Sync |

### fal integration layers

fal is not one undifferentiated API. Four distinct integration surfaces:

| Layer | fal Surface | Module | Phase |
|-------|------------|--------|-------|
| 1. Generation | Model APIs | `providers/fal/` | v0.1 |
| 2. Orchestration | n8n integration | `pipeline/` | v0.1 |
| 3. Platform ops | Platform APIs | planned | v0.2 |
| 4. Custom deploy | CLI + Python SDK | deferred | v0.3+ |

**Rule:** Generation goes through Model APIs. Platform APIs are for metadata, pricing, usage, and analytics — never for executing model calls.

---

## Pipeline Stages

```
┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐
│ Capture │──▶│Generate │──▶│  Polish │──▶│  Brand  │──▶│ Export  │──▶│ QA/Eval │──▶│ Publish │──▶│Analytics│
│ Ingest  │   │  Edit   │   │         │   │ Presets │   │ Package │   │         │   │ Handoff │   │         │
└─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘
     │              │              │              │              │              │              │              │
   Brief         Provider       Caption        Fonts          TikTok       Caption        Schedule      Retention
   Assets        Routing        Cleanup        Colors         Reels        AspectR        Approve       CTR
   Metadata      Queue/Poll     Upscale        Watermark      Shorts       Brand          Deliver       Hook perf
                 Webhook        Style          Safe area      YouTube      Variants                     Next brief
```

Each stage produces typed artifacts. The pipeline runner manages state transitions and collects outputs at every step.

---

## Orchestration

### Primary: n8n

n8n is the first orchestration lane. No custom code needed for basic flows.

| Step | Action | Detail |
|------|--------|--------|
| 1 | Brief intake | Trigger on brief submission |
| 2 | Queue submit | POST to fal queue endpoint with `Authorization: Key` header |
| 3 | Poll / webhook | Wait for completion via polling or webhook callback |
| 4 | Artifact collect | Download and store generated assets |
| 5 | QA gate | Run eval checks, block on failure |
| 6 | Export pack | Create platform-specific packages |
| 7 | Publish handoff | Deliver to platform APIs or manual queue |
| 8 | Analytics emit | Write performance data to governed data plane |

### Secondary: Programmatic runner

For embedded use cases, the pipeline runner can be called directly as a library without n8n.

---

## Output Model

| Tier | Content | Consumer |
|------|---------|----------|
| **Bronze** | Raw briefs, prompts, assets, render logs, provider responses | Pipeline internals |
| **Silver** | Normalized jobs, metadata, QC signals, export manifests | Ops dashboards |
| **Gold** | Campaign KPIs, creative performance summaries, recommendations | Business reporting |

---

## Project Structure

```
ugc-mediaops-kit/
├── schemas/                          # JSON Schema definitions
│   ├── creative_brief.schema.json
│   ├── asset_job.schema.json
│   ├── brand_preset.schema.json
│   ├── export_profile.schema.json
│   ├── publish_plan.schema.json
│   └── performance_report.schema.json
│
├── providers/                        # Provider broker adapters
│   ├── fal/                          # fal.ai — video, audio, mixed-media, utilities
│   ├── gemini/                       # Gemini — fast stills, editing
│   ├── imagen/                       # Imagen — premium stills
│   └── openai/                       # OpenAI — eval, QA, understanding
│
├── pipeline/                         # Workflow runner
├── evals/                            # QA/eval framework
│
├── examples/                         # Example workflows
│   ├── creator_shortform/            # Single creator, shoot-to-publish
│   ├── agency_batch_campaign/        # Multi-asset batch generation
│   └── studio_same_day_publish/      # Full pipeline end-to-end
│
└── docs/
    └── architecture/
        ├── OVERVIEW.md               # This file
        ├── PROVIDER_POLICY.md        # Provider routing doctrine
        ├── FAL_INTEGRATION_STRATEGY.md
        ├── BRAND_PRESETS.md          # Brand preset architecture
        ├── EXPORT_PROFILES.md        # Platform export profiles
        └── QA_EVALS.md              # QA/eval framework
```

---

## Open-Source Boundary

### In scope (this repo)

- Brief/job schemas
- Provider broker interfaces
- Pipeline runner
- Brand preset engine
- Platform export profiles
- QA/eval framework
- Analytics/report schemas
- Example workflows

### Out of scope (separate commercial layer)

- Customer workspace UI
- Billing/pricing logic
- Proprietary brand presets
- Internal benchmarks
- Private approval/admin flows

---

## Build Order

| Phase | Scope | Status |
|-------|-------|--------|
| **v0.1** | Schemas + provider broker + manifest CLI | In progress |
| **v0.2** | Polish/export/QA pipeline + n8n templates | Planned |
| **v0.2.5** | Platform ops wrapper (fal usage/pricing/analytics) | Planned |
| **v0.3** | Analytics schema + recommendation loop | Planned |

---

*Last updated: 2026-03-23*
