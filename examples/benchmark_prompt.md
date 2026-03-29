# End-to-End Benchmark Prompt

> Exercises the full finishing pipeline: Brief → Generate → Polish → Export → Evaluate → Publish.
> Target surfaces: TikTok, Instagram Reels, YouTube Shorts, YouTube.

## Full Prompt

```text
Run a full end-to-end finishing pipeline benchmark for InsightPulseAI.

Objective:
Test the complete finishing pipeline from brief intake through provider routing, generation, polish, brand enforcement, export packaging, QA/eval, and publish handoff.

Brand / product context:
InsightPulseAI is an AI-native operations platform for marketing, media, retail, financial, and health services.
Core product surfaces:
- Odoo on Cloud
- Pulser
- Cloud Operations
- Analytics & Dashboards

Core message:
"Run your operations from one connected system."
Supporting message:
"Unify workflows, automate execution, and scale with stronger control."

Creative goal:
Create a premium short-form product teaser that feels modern, clean, confident, enterprise-ready, and operationally intelligent.
The final asset should look suitable for a LinkedIn/TikTok/Reels/Shorts launch teaser.

Primary output:
- 1 short-form hero video
- UGC/product-demo hybrid style
- concise voice narration
- clean on-screen text overlays
- light motion graphics
- polished captions/subtitles
- export-ready outputs

Scene concept:
A modern operations leader moves through a fast-paced day across finance dashboards, campaign reports, workflow approvals, cloud operations views, and AI-assisted summaries.
The visual story should show fragmented work becoming one connected operating model.
Show a progression from noise and manual effort to clarity, speed, and control.

Narration script:
"Run your operations from one connected system.
Unify workflows.
Automate execution.
See what matters.
Act faster with confidence.
InsightPulseAI."

On-screen text sequence:
1. AI-native operations
2. Odoo on Cloud
3. Pulser
4. Cloud Operations
5. Analytics & Dashboards
6. One connected operating model

Visual requirements:
- premium modern B2B SaaS aesthetic
- clean enterprise visuals
- subtle futuristic polish, not sci-fi
- diverse dashboard, workflow, and operations motifs
- avoid cheesy AI clichés
- no floating hologram nonsense
- realistic modern work environments
- smooth cuts and premium transitions
- clear title-safe composition for vertical and widescreen crops

Audio requirements:
- warm, clear narration
- subtle ambient tech/office sound bed
- no overpowering music
- captions must be readable and correctly timed

Brand / finishing requirements:
- enforce safe areas for 9:16 and 16:9
- generate subtitle-safe composition
- preserve clean whitespace
- use brand-safe visual treatment
- no crowded overlays
- no cut-off text
- no fake product UI that looks broken or corrupted

Export requirements:
Package the finished output for:
- TikTok 9:16
- Instagram Reels 9:16
- YouTube Shorts 9:16
- YouTube 16:9

Pipeline tasks to execute:
1. Validate the brief
2. Route generation to the best provider/model for this creative
3. Generate base video
4. Add narration/audio
5. Polish visuals
6. Add captions/subtitles
7. Apply brand/safe-area checks
8. Export all required platform variants
9. Run QA/eval
10. Produce publish handoff package

QA / eval criteria:
Reject or flag the output if any of the following occur:
- narration missing or unclear
- captions do not match spoken words
- text overlays are cut off in 9:16
- pacing feels too slow or too chaotic
- visual quality looks cheap, glitchy, or inconsistent
- message hierarchy is unclear
- outputs are not platform-ready
- brand/product terms are misspelled
- video does not clearly communicate operational unification and control

Success criteria:
- polished, publish-ready hero clip
- narration and captions aligned
- clean platform exports produced
- clear product story in under 10 seconds
- output feels premium enough for launch marketing
- publish handoff includes metadata, caption text, and export manifest

Return:
- chosen provider/model route
- generation notes
- polish steps applied
- QA findings
- export manifest
- publish handoff summary
```

## Tighter Variant

```text
Create a premium short-form launch teaser for InsightPulseAI.

Narration:
"Run your operations from one connected system. Unify workflows. Automate execution. See what matters. Act faster with confidence. InsightPulseAI."

On-screen text:
AI-native operations
Odoo on Cloud
Pulser
Cloud Operations
Analytics & Dashboards
One connected operating model

Style:
Modern B2B SaaS, premium, clean, enterprise-ready, workflow-heavy, data-rich, calm confidence.

Story:
Show fragmented operational work becoming one connected operating model across dashboards, approvals, analytics, and AI-assisted workflows.

Outputs:
- TikTok/Reels/Shorts 9:16
- YouTube 16:9

Requirements:
- narration + captions
- safe-area compliant
- polished motion
- publish-ready
- reject if text is cut off, captions drift, or quality feels cheap
```

## Verification Checklist

- [ ] Tests **generation** (provider routing)
- [ ] Tests **native or added narration** (Sora 2 audio / TTS fallback)
- [ ] Tests **captioning** (timing, accuracy)
- [ ] Tests **brand/safe-area enforcement** (9:16 + 16:9)
- [ ] Tests **multi-platform export** (TikTok, Reels, Shorts, YouTube)
- [ ] Tests **QA/eval + publish handoff** (reject criteria)

## Expected Provider Route

| Pipeline Stage | Provider | Model |
|---------------|----------|-------|
| Base video generation | Sora 2 (Azure) or fal (Kling 3.0 Pro) | `sora-2` / `kling-video/v3/pro/image-to-video` |
| Narration (native) | Sora 2 (Azure) | `sora-2` with audio prompt |
| Narration (fallback) | Separate TTS | Azure TTS / ElevenLabs |
| Supplementary stills | Gemini | `gemini-2.5-flash-image` |
| Hero stills | Imagen | `imagen-4` |
| QA / eval | OpenAI | `gpt-5.2-multimodal` |
| Captions | OpenAI (Whisper) | transcription + alignment |
| Export packaging | FFmpeg | multi-format encode |
| Motion graphics | fal | `omnilottie/image-to-lottie` |
