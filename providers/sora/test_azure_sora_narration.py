# test_azure_sora_narration.py
# Azure OpenAI Sora 2 — narrated video smoke test
#
# Prerequisites:
#   pip install openai azure-identity
#   Azure resource with Sora 2 deployed (East US 2 or Sweden Central)
#   Key vaulted in kv-ipai-dev as data-intel-ph-key1
#
# Usage:
#   python providers/sora/test_azure_sora_narration.py
#
# Test ladder:
#   Test 1: silent baseline (no narration)
#   Test 2: ambient audio (sound cues only)
#   Test 3: narrated short clip (one spoken line)

import os
import sys
import time
from openai import AzureOpenAI

AZURE_OPENAI_ENDPOINT = os.environ.get(
    "AZURE_OPENAI_ENDPOINT",
    "https://data-intel-ph-resource.openai.azure.com/",
)
AZURE_OPENAI_KEY = os.environ.get("AZURE_OPENAI_KEY")
MODEL = os.environ.get("SORA_MODEL", "sora-2")
POLL_INTERVAL = 20  # seconds


def get_client():
    if AZURE_OPENAI_KEY:
        return AzureOpenAI(
            azure_endpoint=AZURE_OPENAI_ENDPOINT,
            api_key=AZURE_OPENAI_KEY,
            api_version="2025-04-01-preview",
        )
    # Fall back to DefaultAzureCredential (managed identity / az login)
    from azure.identity import DefaultAzureCredential, get_bearer_token_provider

    token_provider = get_bearer_token_provider(
        DefaultAzureCredential(),
        "https://cognitiveservices.azure.com/.default",
    )
    return AzureOpenAI(
        azure_endpoint=AZURE_OPENAI_ENDPOINT,
        azure_ad_token_provider=token_provider,
        api_version="2025-04-01-preview",
    )


# ── Test prompts ──────────────────────────────────────────────

TESTS = {
    "silent": {
        "prompt": (
            "A clean, modern product demo shot of a dashboard on a laptop "
            "in a bright studio. Slow push-in camera movement. "
            "Calm, premium visual style. No audio."
        ),
        "size": "1280x720",
        "seconds": 4,
    },
    "ambient": {
        "prompt": (
            "A clean, modern product demo shot of a dashboard on a laptop "
            "in a bright studio. Slow push-in camera movement. "
            "Calm, premium visual style.\n\n"
            "Audio: soft office ambience, subtle keyboard clicks, "
            "light room tone. No speech, no music."
        ),
        "size": "1280x720",
        "seconds": 6,
    },
    "narrated": {
        "prompt": (
            "A clean, modern product demo shot of a dashboard on a laptop "
            "in a bright studio. Slow push-in camera movement. "
            "Calm, premium visual style.\n\n"
            'Narration:\n'
            '"Run your operations from one connected system. '
            'See what matters. Act faster with confidence."\n\n'
            "Audio:\n"
            "Warm, clear spoken narration with light background ambience only. "
            "No music."
        ),
        "size": "1280x720",
        "seconds": 6,
    },
}


def run_test(client, test_name: str):
    test = TESTS[test_name]
    print(f"\n{'=' * 60}")
    print(f"TEST: {test_name}")
    print(f"{'=' * 60}")
    print(f"Prompt: {test['prompt'][:80]}...")
    print(f"Size: {test['size']}  Duration: {test['seconds']}s")

    video = client.videos.create(
        model=MODEL,
        prompt=test["prompt"],
        size=test["size"],
        seconds=test["seconds"],
    )

    print(f"Job created: id={video.id} status={video.status}")

    while True:
        status = client.videos.retrieve(video.id)
        print(f"  status={status.status}")
        if status.status == "completed":
            break
        if status.status == "failed":
            print(f"  FAILED: {status}")
            return False
        time.sleep(POLL_INTERVAL)

    output_file = f"azure-sora-{test_name}-test.mp4"
    content = client.videos.download_content(video.id, variant="video")
    content.write_to_file(output_file)
    print(f"  Saved: {output_file}")
    return True


def main():
    test_name = sys.argv[1] if len(sys.argv) > 1 else "silent"
    if test_name not in TESTS:
        print(f"Usage: python {sys.argv[0]} [silent|ambient|narrated]")
        sys.exit(1)

    client = get_client()
    success = run_test(client, test_name)
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
