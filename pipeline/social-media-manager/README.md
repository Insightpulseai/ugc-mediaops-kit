# Social Media Manager Pipeline — FMCG Philippines

> Automate the research → brief → create → publish cycle for Philippine FMCG brands.

## Overview

This module extends the ugc-mediaops-kit pipeline with a **social media manager** workflow optimized for FMCG brands in the Philippines. It connects deep market research to actionable creative briefs, content calendars, and publishing plans.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  Social Media Manager                    │
├─────────────┬─────────────┬──────────────┬──────────────┤
│   Research  │    Brief    │   Calendar   │   Publish    │
│   Engine    │  Generator  │   Planner    │   Scheduler  │
├─────────────┼─────────────┼──────────────┼──────────────┤
│ • Trend     │ • Schema-   │ • Weekly     │ • Platform   │
│   analysis  │   validated │   templates  │   formatting │
│ • Competitor│   briefs    │ • Cultural   │ • TikTok     │
│   audit     │ • PH market │   calendar   │   Shop       │
│ • Platform  │   targeting │ • Creator    │ • Auto-post  │
│   benchmarks│ • Audience  │   assignment │   scheduling │
│ • Hashtag   │   personas  │ • Content    │ • Cross-     │
│   research  │ • Budget    │   mix rules  │   platform   │
│             │   allocation│              │   adaptation │
└─────────────┴─────────────┴──────────────┴──────────────┘
         │              │              │              │
         ▼              ▼              ▼              ▼
    ┌──────────────────────────────────────────────────┐
    │            Provider Broker (existing)             │
    │   fal · Gemini · Imagen · Sora · OpenAI          │
    └──────────────────────────────────────────────────┘
```

## Workflow

### 1. Research Phase
```
Input:  Brand name, category, market (Philippines)
Output: Deep research report (trends, competitors, benchmarks)
Tool:   Claude Code + WebSearch
```

### 2. Brief Generation
```
Input:  Research report + brand preset
Output: Validated CreativeBrief (JSON Schema)
Schema: schemas/creative-brief-fmcg-ph.schema.json
```

### 3. Content Calendar
```
Input:  Brief + cultural calendar + platform rules
Output: 7-day or 30-day content calendar
Format: JSON with daily themes, formats, creator tiers
```

### 4. Asset Generation
```
Input:  Calendar items → generation jobs
Route:  Provider Broker handles routing
Output: Platform-ready assets (9:16 vertical video, etc.)
```

### 5. QA & Brand Check
```
Input:  Generated assets + brand preset
Check:  Logo placement, safe areas, language, compliance
Output: Pass/fail + revision notes
```

### 6. Publish
```
Input:  Approved assets + publish plan
Output: Scheduled posts across platforms
Target: TikTok, Facebook, Instagram, YouTube, TikTok Shop
```

## Philippines-Specific Features

### Cultural Calendar Integration
Pre-loaded with Philippine holidays, festivals, and commercial moments:
- Ber Months (Sep–Dec Christmas buildup)
- Noche Buena, Fiesta seasons
- 11.11, Payday cycles
- Back-to-school, Summer breaks

### Audience Targeting
- SEC classification (AB, C1, C2, D, E)
- Geographic targeting (Metro Manila, Visayas, Mindanao, provincial)
- Language variants (Tagalog, Taglish, Bisaya, English)
- Persona tags (nanay, student, sari-sari owner, foodie)

### Sari-Sari Store Activation
- UGC templates for store owners
- Product display / tingi haul content
- Community-level micro-influencer playbooks

### Platform Optimization
- TikTok-first strategy (5.02% FMCG engagement rate)
- Facebook for provincial reach (90M+ users)
- TikTok Shop for shoppertainment
- Instagram Reels for urban/aspirational audience

## Usage with Claude Code

```bash
# Generate a research report
claude "Research FMCG snack trends in the Philippines for Q4 2026"

# Generate a creative brief
claude "Create a creative brief for [Brand] Christmas campaign targeting mass market Filipino consumers"

# Generate a content calendar
claude "Build a 30-day TikTok content calendar for [Brand] during Ber Months"

# Review assets against brand guidelines
claude "QA check these assets against our brand preset and PH market requirements"
```

## Files

| File | Purpose |
|------|---------|
| `docs/strategy/FMCG_PHILIPPINES_DEEP_RESEARCH.md` | Full market research report |
| `schemas/creative-brief-fmcg-ph.schema.json` | Creative brief JSON Schema |
| `examples/fmcg-ph-content-calendar.json` | Example 7-day content calendar |
| `pipeline/social-media-manager/README.md` | This file |

## Key Metrics to Track

| Metric | Target | Platform |
|--------|--------|----------|
| Engagement rate | >5% | TikTok |
| UGC submissions | >500/campaign | All |
| View-through rate | >30% | TikTok, Reels |
| TikTok Shop conversion | >3% | TikTok Shop |
| Brand awareness lift | >5% | Cross-platform |
| ROAS | >4x | Paid campaigns |
