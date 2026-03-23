# Provider Policy

> Provider routing doctrine for ugc-mediaops-kit. Generation vs understanding split is mandatory.

## Canonical Rule

**Use OpenAI to understand, evaluate, extract, and review.**
**Use Gemini / Imagen / fal to generate, depending on modality and quality tier.**

## Provider Doctrine

| Provider | Primary Role | When to Use |
|----------|-------------|-------------|
| **fal.ai** | Mixed-media pipelines: video, voice, music, SFX, multi-model orchestration | UGC video/audio, batch media, queue-based production |
| **Gemini direct** | Fast conversational image generation and editing | Default for speed, iteration, editing, concepting |
| **Imagen** | Premium-quality stills, logos, product visuals | When image quality is brand-critical |
| **OpenAI multimodal** | Understanding, evaluation, extraction, review | QA, evals, captioning, scoring |

## fal v0.1 Model Shortlist

### Images

| Model | Role |
|-------|------|
| `nano-banana-2` | Default fast generation/editing |
| `nano-banana-pro` | Premium generation/editing |
| `flux-pro/kontext` | Reference-edit / transform |
| `gpt-image-1.5` | High-fidelity fallback |

### Video

| Model | Role |
|-------|------|
| `kling-video/v3/pro/image-to-video` | Default premium UGC video |
| `kling-o3-image-to-video-pro` | Start/end-frame transition |
| `veo-3.1` | Google premium video |
| `ltx-2.3/image-to-video/fast` | Fast batch video |
| `ltx-2.3/extend-video` | Video extension |

### Utilities

| Model | Role |
|-------|------|
| `pixelcut/background-removal` | Background removal |
| `seedvr/upscale/image` | Upscaling |
| `omnilottie/image-to-lottie` | Motion graphics export |
| `vecglypher/image-to-svg` | Vector/logo/glyph |

## OpenAI Multimodal Role

OpenAI is the understanding and evaluation layer. Not the default generation provider.

### Primary jobs

- Vision and document understanding
- Image evaluation and creative quality review
- Asset captioning, tagging, summarization
- Multimodal QA scoring

### Not for

- Fast conversational image generation (use Gemini)
- Premium stills (use Imagen)
- Video/audio/mixed-media (use fal)

## fal Production Policy

- Use hosted model queue endpoints first
- Use `fal deploy` only when custom app logic, stable endpoint IDs, or private auth needed
- Default production auth for custom apps: private
- Prefer rolling rollout strategy

---

*Last updated: 2026-03-23*
