# Clove OS

Clove OS builds and evaluates specialist AI models for deployment on
infrastructure you control. Start with a real workflow, measure a baseline on
representative cases, and adapt an open-weight model against those evaluations.

The product includes an OpenAI-compatible inference API, a model catalog, a
finance workflow demo, and a developer portal for keys and usage.

## Repository

| Directory | Contents |
| --- | --- |
| [website](website/README.md) | Landing page, demo, API routes, docs, and developer portal |
| [backend](backend/README.md) | Training and serving infrastructure for AWS, Bedrock, and vLLM |
| [Lab](Lab/sova-sys1/sova_model/README.md) | Model adaptation, evaluation, and collected experiment results |
| [Research](Research/rl-post-training-2026-10-31/README.md) | Research notes and the October custom-model market brief |
| [startup](startup/README.md) | Product planning, distribution records, and the archived website |

## Start here

- Read the [inference API guide](website/docs/inference.md) for the endpoint,
  supported model IDs, and API key format.
- Open the [finance demo guide](website/docs/demo.md) for the recorded example,
  its source data, and the measurements it reports.
- Read the [legal adaptation report](Lab/sova-sys1/reports/legal-lora-current-run.md)
  for the ContractNLI development comparison and its coverage limits.

Versioned source, documentation, and research artifacts live in
[aniiiiXD/cloveOs-ltd](https://github.com/aniiiiXD/cloveOs-ltd). The
[website README](website/README.md) documents the Vercel projects and compute approval
process.
