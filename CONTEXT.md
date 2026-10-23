# CONTEXT.md — "Becoming a Claude Power User" Series

This document is the settled design spec for an episodic guide series to be published on pkepps.com. It was produced through a grilling session (design-tree interview) between PJ and Claude on 2026-08-19. Every decision below is settled; do not reopen them without asking PJ. Decisions explicitly deferred to the Claude Code session are listed at the end.

## What this is

A series teaching non-technical professionals how to become genuinely capable Claude users. It supersedes a one-off PDF ("Setting Up Your Job Search Assistant in Claude") that PJ previously distributed by email. That original doc is the structural ancestor: its skeleton (account → capabilities baseline → project setup → workflow → tips → prompt library → quick-reference checklist) is proven and should be inherited where applicable. Its job-search specifics are NOT carried forward as the frame; they become a brief callback example in Episode 2.

The original job-search doc should be available in the repo as reference material (PJ will add it). Read it before drafting: the tone calibration, the "not sure what to write? just ask Claude" pattern, and the end-of-doc checklist are all patterns to preserve.

## Audience

Capable professionals with zero AI-workflow expertise. They can navigate settings menus, or will if they know they can ask Claude for help when stuck. Assume no prior knowledge of projects, memory, models, or any Claude-specific concept. Do not assume they know what markdown is (teach it when needed, the way the original doc did).

Three implicit personas (do not name them in the published text, but write so all three are served):

1. **The dad** — career in philanthropy, already uses Claude in the browser for synthesis and artifacts after a hands-on setup session, ready to be elevated further.
2. **The uncle** — former C-suite, much less familiar with Claude, comfortable tweaking settings once he knows that getting blocked just means asking Claude for clarification.
3. **The pastor** — former petroleum engineer, has technical instincts, knows he's under-leveraging AI. (The line "AI is really good at writing prompts and instructions for AI" was the thing that unlocked his mental model. That line is load-bearing for this series.)

## Series architecture

Bite-size episodes. Each episode should be readable in one sitting and useful on its own.

- **Episode 0 — Series intro (short, lives on/near the index hub).** Carries the philosophy once so the episodes don't have to: (a) Claude is a thinking partner, not a question-answering machine; (b) "AI is really good at writing prompts, instructions, and configurations for AI" — the single most important unlock; (c) the universal self-healing habit: when stuck, blocked, or confused at ANY step, ask Claude itself ("I'm trying to do X and I see Y — what do I do?"). Ep0 also teases the grilling skill in one paragraph, including the honest demo: this very series was designed by PJ running a grilling session with Claude. Full grilling treatment is deferred to Ep2.
- **Episode 1 — Account setup and configuration.** Scope: creating an account, plan choice, the full capabilities/settings baseline, model selection, extended thinking, web search, memory settings, profile preferences. Centerpiece: the **audit prompt** (see below). No projects content — that's Ep2.
- **Episode 2 — Projects (and grilling).** Settled 2026-10-23 in a second grilling session; supersedes the earlier "Projects and power skills" scope. Thesis: when a project beats a chat, shown through three project shapes taken from PJ's own projects: **living state** (decisions accumulate and must stay settled), **reference library** (upload once, ask many times), **plan with constraints** (each commitment constrains the rest). Instructions grow with the project (none, then a preference list, then role/principles/anti-patterns, then a full operating system). Grilling gets its full treatment here, installed three ways: as an uploaded Skill, pasted into one chat, or baked into project instructions. A **decision-project template** (instructions block plus a separate kickoff block) generalizes PJ's finance setup. A **builder prompt**, run in an ordinary chat, returns project instructions, version one of the living file, and a first-chat prompt. **Project instructions** (true in every chat of the project) are kept distinct from a **first-chat prompt** (a one-off kickoff). Worked examples: **health/training** and **job search** (job search also carries the original doc's lineage in one sentence). The **living file** is one canonical file per project; it is kept current by regenerate-and-replace, with six living-file rules (read first; flag conflicts; propose a change list; full replacement, never partial; date facts and flag stale ones; settled decisions persist and are reopened explicitly). Ends at the boundary: come back to it → project; want a finished thing → ask for it (Episode 3); the data and files are the work → Episode 5. PJ's projects are used for shape only, never specifics.
- **Episode 3 — Hand Claude the whole job (Cowork).** Agentic work, web-first through connectors. Frame: ask for the finished thing; in the merged layout there is no separate place to go, and the episode says this is what Anthropic calls Cowork. Worked example: the **Iceland trip** (connect Gmail and Drive, reconcile bookings, draft the itinerary doc with a corrections log, "edit the doc only when I ask"). One short section on the Desktop app and local folders, and one paragraph on Claude Code. No scheduled tasks.

- **Episode 4 — Lock down your identity (deliberate exception).** Outside the Episodes 0-3 scope above. Scope: using Claude as a guide for identity, phone and account security, including privacy settings (payment apps, social media, location sharing, app permissions, Google and Apple checkups). Voice: neutral reference voice, not first person, by owner decision (this overrides principle 4 for this episode only). Two further owner exceptions, for this episode only: it opens with an urgent, attributed preface and a chart, which overrides the calm tone used elsewhere, and it uses markdown tables (the overview table), which overrides the earlier no-tables choice. Facts come from official non-Anthropic sources (credit bureaus, IRS, carriers), recorded in the Episode 4 section of `docs/guides/claude/VERIFIED.md`.

- **Episode 5 — Finances (standalone, like Episode 4).** PJ's finance system as its own article, first person, a system rather than advice; expected to absorb parts of Episode 4. Not yet designed: grill it in its own session.
- **Episode 6 — Power skills.** The catalog formerly in Episode 2 (candidates: Research, real files in and out, steering memory and past-chat search). Styles are dropped (no longer documented by Anthropic). Shortlist to be decided in its own session, after Episodes 2 and 3 exist.

Surface scope for the whole series v1: **Claude in the browser and mobile app only.** Episode 3 adds one short section on the Desktop app and a paragraph on Claude Code; nothing else requires them.

## Core design principles (apply to every episode)

1. **Decay-tolerant instructions.** The product UI changes faster than published guides. Never write instructions that break silently when a menu moves. Pattern: "Look for X in Settings → Capabilities; if it's not there, the UI has moved — ask Claude 'where do I find X now?'" Teach this habit explicitly in Ep0/Ep1; use it implicitly everywhere.
2. **Idempotent configuration.** The Ep1 baseline must work for a reader at any starting point — fresh account or year-old messy account — and converge them to the same known-good state. The mechanism is the **audit prompt**: a copy-paste block the reader pastes into a fresh Claude chat, which makes Claude interactively walk them through verifying and fixing each setting ("open Settings → Capabilities and tell me what toggles you see; I'll tell you what to change"). A static checklist also appears at the end of Ep1 as the skimmable artifact, but the audit prompt is primary. The audit prompt doubles as the live demonstration of the "AI writes instructions for AI" theme.
3. **Facts are verified at draft time, never baked into this spec.** See "Verification requirements."
4. **Voice: PJ writing to people he knows, lightly.** First person, provenance stories welcome ("when I said this to my pastor friend, it unlocked something"), no corporate-guide neutrality, no filler. Dense but warm. Never condescending — the readers are accomplished people learning a new instrument, not novices at life.
5. **Copy-paste-ready blocks** wherever the reader needs to produce text (prompts, project instructions, profile preferences), always paired with "not sure what to write? ask Claude to write it" guidance.
6. **Calm about risk.** Unfamiliarity, not danger, is what holds these readers back, and trust grows with use. Safety notes are short and practical, framed as how to use the tool well; an Anthropic caution is cited once, where the reader would act on it, never amplified into a warning list. Episode 4's urgent register is the deliberate exception.

## The grilling skill (attribution and treatment)

- Source: Matt Pocock's `/grilling` skill. Canonical page: https://www.aihero.dev/skills-grilling — open-sourced at https://github.com/mattpocock/skills. Attribute by name with both links.
- Include the skill text **verbatim** (PJ's pasted variant is in the original conversation; the canonical source is the repo). Do NOT rewrite it in plain language — it is written for the agent, not the human. Instead, wrap it with a plain-language explanation of what it does, why it works, and when to invoke it.
- Include two practical notes from Pocock's docs: (a) the supported **one-question-at-a-time opt-out** ("When grilling, ask one question at a time") — flag this for readers who prefer sequential pacing; (b) the **answer-by-number convention** (his exact example: "1 yes, 2 the second option, 3 no, here's why") which makes rounds fast to answer.
- Placement: teased in Ep0 (with the designed-this-series story), full treatment in Ep2.

## Verification requirements (for the drafting session)

All Anthropic product facts must be verified with web search at draft time — and re-verified at any future regeneration — against official sources, not taken from memory or from the original job-search doc (which is already stale, e.g. its model references):

- Claude.ai settings: exact names and locations of capabilities toggles (code execution/file creation, network egress, artifacts, past-chat search, memory), profile preferences, styles.
- Current model lineup and which models are available on which plans, including default-model behavior and whether model/web-search selections persist across chats.
- Plan tiers: free vs Pro vs Max — pricing, usage limits, what each unlocks. PJ believes Max includes Fable in usage; verify this specifically rather than asserting it.
- Web search: whether it is per-chat or persistent, and how it's enabled now.
- Memory: current behavior of account-level memory vs project-scoped memory.

Verification sources: https://support.claude.com (Claude.ai questions), https://docs.claude.com/en/docs_site_map.md (API/general), https://www.anthropic.com/news (recent product changes). Cite/link the support pages in the published episodes where readers would benefit.

## Distribution and infrastructure

- Canonical home: pkepps.com (Astro on Cloudflare Pages). Episodes are pages under an index hub; markdown files are the source of truth.
- **No email infrastructure now** (that's a separate future project), but structure the content collection so an **RSS feed** falls out for free — Astro makes this near-zero-cost and preserves the newsletter option.
- **No PDF exports for now.** (Explicitly dropped; may return later as a nice-to-have. Do not build it into the launch scope.)
- Ship order: Ep0 + Ep1 first. Episode map / index hub is drafted alongside them and iterated.

## Decisions deferred to the Claude Code session (grill PJ on these against the actual repo)

- URL structure and where the series lives in the site's information architecture.
- Index hub design and how Ep0 relates to it (same page vs separate).
- Content-collection schema, frontmatter, RSS wiring.
- Navigation/discovery from the rest of pkepps.com.
- Any styling/layout decisions.
- Ep6 power-skills shortlist (deferred to its own session, after Eps 2 and 3 exist).
- Ep5 finances design (deferred to its own grilling session).
