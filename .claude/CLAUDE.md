# CLAUDE.md — Frontend Website Rules

Rules for this project live in `.claude/rules/` as separate component files. Files without `paths` frontmatter load every session; files with `paths` load only when a matching file is touched.

- [workflow.md](rules/workflow.md) — always loaded. Session workflow: invoke `frontend-design` first, reference-image matching, local server, screenshot comparison loop.
- [hard-rules.md](rules/hard-rules.md) — always loaded. Non-negotiable constraints (don't add scope, don't "improve" a reference, etc).
- [output-defaults.md](rules/output-defaults.md) — scoped to `*.html`. Default output format (single file, inline styles, Tailwind CDN, placeholders).
- [brand-assets.md](rules/brand-assets.md) — scoped to `*.html`, `*.css`. Use real brand assets over placeholders when available.
- [design-guardrails.md](rules/design-guardrails.md) — scoped to `*.html`, `*.css`, `*.js`. Anti-generic guardrails for color, shadow, type, motion, depth.
