# Sora 2 Provider (Azure OpenAI)

AI video generation with synced audio via Azure OpenAI.

## Access

- **Model**: `sora-2` (preview, gated)
- **Regions**: East US 2, Sweden Central
- **Endpoint**: `https://{resource}.openai.azure.com/`
- **Auth**: API key or Azure AD token (managed identity)

## Capabilities

| Feature | Sora 1 | Sora 2 |
|---------|--------|--------|
| Text-to-video | Yes | Yes |
| Audio in output | No | **Yes** |
| Storyboard / multi-scene | No | Yes |
| Image-to-video | No | Yes |

## Narration Routing Policy

```yaml
azure_sora_narration_policy:
  short_native_audio_clips:
    provider: azure_sora_2
    max_duration_seconds: 8
    use_case:
      - short promo
      - short explainer
      - ambient dialogue
  deterministic_narration_required:
    provider: azure_sora_2_for_video
    post_process_audio: separate_tts_track
  forbidden_or_high_risk:
    - long monologue
    - complex multi-speaker sync
    - photorealistic real-person dependency in preview
```

## Test Ladder

```bash
# Test 1 — silent baseline
python providers/sora/test_azure_sora_narration.py silent

# Test 2 — ambient audio
python providers/sora/test_azure_sora_narration.py ambient

# Test 3 — narrated short clip
python providers/sora/test_azure_sora_narration.py narrated
```

## Success Criteria

- Job reaches `completed`
- MP4 downloads successfully
- Narration is audible (test 3)
- Spoken line roughly matches prompt text
- No policy rejection
- Latency acceptable for pipeline budget

## Failure Modes

| Symptom | Cause | Fix |
|---------|-------|-----|
| No audio | Wrong model (Sora 1) | Use `sora-2` deployment |
| Weak script fidelity | Prompt-driven, not deterministic | Move narration to post-process TTS |
| Policy rejection | Blocked content under preview rules | Remove photorealistic/IP content |
| Throughput bottleneck | Preview limits (low job caps) | Batch smaller, retry with backoff |

## References

- [OpenAI Video Generation API](https://developers.openai.com/api/docs/guides/video-generation)
- [Azure Sora 2 Docs](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/video-generation)
- [Azure Sora Build Guide](https://techcommunity.microsoft.com/blog/educatordeveloperblog/building-with-azure-openai-sora-a-complete-guide-to-ai-video-generation/4466325)
- [Sora 2 Prompting Guide](https://cookbook.openai.com/examples/sora/sora2_prompting_guide)
- [Sora 2 Model Page](https://platform.openai.com/docs/models/sora-2)
