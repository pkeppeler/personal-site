# Episode 5 brief: Run your job search with Claude

Working notes for Episode 5. The settled one-paragraph spec is the
Episode 5 entry in `CONTEXT.md`; this file holds the detail and the
handoff. Delete it once the episode is published.

## Status (2026-11-07)

- Designed in a grilling session with PJ. Not drafted.
- Workflow: PJ writes a first draft. His brother then clones this repo,
  reworks the draft with what he has done in Cowork, and builds on it.
  The published episode combines the best of both. Neither person's
  use is the ceiling: if Claude can help a job search in a way neither
  of them tried, it belongs in the episode.
- Target file: `src/content/guides/claude/5-job-search.md`. Keep
  `draft: true` until both passes are done. Frontmatter `authorship`
  is decided at publish time (`human` if the prose is theirs,
  `ai-drafted` if Claude drafted it).

## Read before working on it

1. `CLAUDE.md` (repo rules) and `CONTEXT.md` (series spec and
   principles).
2. The `guide-style` skill in `.claude/skills/` (voice, copy-paste
   blocks, decay-tolerant menu paths, facts). Claude Code loads it on
   its own when you edit under `src/content/guides/`.
3. Episode 2's "Job search" section and Episode 3 in full. This
   episode links to them; it does not repeat them.
4. `docs/guides/claude/VERIFIED.md`. Every product fact needs a row.

## Skills to use

From this repo (`.claude/skills/`):

- `guide-style`: prose rules for every edit to the episode.
- `interviewing-the-author`: written for blog posts, but its method
  (one question at a time, no prose until the material exists) is the
  right way to pull the Cowork stories out of whoever ran them. Use it
  before drafting a section neither of you has written yet.

From the dotfiles repo (`pkeppeler/dotfiles`, installed with
`./install.sh claude`, which links them into `~/.claude/skills/`):

- `grilling`: stress-test a draft section, or reopen a settled decision
  above. This episode was designed with it. Reopening a decision means
  asking PJ first, per `CONTEXT.md`.
- `domain-modeling`: load before editing `CONTEXT.md`.
- `writing-pr-descriptions`: the PR title and description.
- `pj-review`: for PJ reviewing his brother's pass, in his register.

## Settled decisions

- **Number:** Episode 5. Finances moved to 6 and power skills to 7;
  Episodes 2 and 3 already point at Episode 6 for finances.
- **Voice:** one first-person voice in PJ's register: "here is what my
  brother and I found helpful." A first-person claim covers only what
  one of them actually did. PJ has not used Cowork, so Cowork claims
  come from his brother's real use; anything neither of them ran is
  framed as a suggestion, not a story.
- **Provenance:** shape only. No employer names, no names of companies
  ruled in or out, no compensation numbers.
- **Audience:** generic. Senior readers and career changers, and also
  early-career and mid-level readers whose search has stalled for a
  while. Don't tilt it to executives.
- **Thesis (held loosely):** the project holds your judgment; Cowork
  does the legwork; and Claude is also a thinking partner that finds
  options you had not considered (roles, angles, industries). Let the
  brother's real use reshape this.
- **Tracker:** a Google Sheet that Claude edits only when asked, with a
  changes tab playing the role of Episode 3's corrections log. The
  project keeps the instructions and the experience file. Cowork does
  not change a project's contents (VERIFIED row 121), so the experience
  file still updates by Episode 2's regenerate-and-replace loop; say so
  plainly. If the brother used something else that worked, use that.
- **Episode 2:** unchanged except one forward link to this episode.

## Hard rules the episode teaches

1. Never invent: every claim on a resume, letter or message comes from
   the experience file or the reader's confirmation in the chat.
2. Claude drafts, you send: Manual permission mode whenever Claude
   might send, reply or forward; Auto is fine for searching, reading and
   drafting. No auto-applying. The Gmail connector can send (VERIFIED
   rows 129 and 130), so this rule is load-bearing.
3. Settle the offer framework before the first offer arrives.
4. Connect a personal Google account, never a work one.

## Out of scope

Mass-apply or auto-apply tooling, third-party job-search plugins,
LinkedIn automation, and salary figures or market data (they go stale
and cannot be verified). Negotiation prep may still say "ask Claude to
research ranges with sources, and check them yourself."

## Candidate sections (a starting point, not a template)

Title sections by the point they make, per guide-style. Cut, merge,
reorder or add freely.

1. Aim, and diagnose a stalled search: positioning, target roles, a
   "won't take" list; for a stalled search, hand Claude the list of
   applications and outcomes and ask for the pattern.
2. The experience file by interview, going deeper than Episode 2 (the
   interview prompt itself).
3. Find and vet roles: Research for deep dives, scored against your
   criteria, plus Claude suggesting directions you would not have
   searched.
4. Tailor per role: a tailored copy of a master resume as a Google Doc,
   grounded only in the experience file; cover letter alongside.
5. Keep the tracker current: Cowork reconciles Gmail and Calendar into
   the Sheet; outreach and follow-ups land as Gmail drafts you send
   yourself.
6. Preparation coach: company briefs, likely questions, mock interviews
   with pushback, practicing answers out loud, debriefs written back to
   the file.
7. Offers, short: the framework from rule 3, then negotiation prep.

## Facts to verify at draft time

- Google Calendar connector: what it can read and create, and whether
  it asks before creating or changing events. Row 128 only confirms it
  exists.
- Google Sheets editing in the current UI (row 119 covers it; re-check
  the date).
- Anything new the brother's use relies on (Research, file creation,
  voice mode for mock interviews, and so on).

## Material still needed

**From PJ:** a summary of his claude.ai "Job Search" project. Run this
in a new chat inside that project and paste the result into the
drafting session (not into this repo):

```text
I'm writing a guide episode about how I used this project for my job search. Go through everything you can see in this project (instructions, files, and what you remember from our chats) and write me a summary I can hand to another writer. Stick to shape, never specifics: no company names, no people's names, no compensation numbers, no employer names. Describe companies by kind (e.g. "an early-stage defense startup").

Cover these, with a short bullet list under each heading:

1. Setup: what the instructions said, what files I kept, and how I kept them current.
2. Habits that paid off: prompts or routines I came back to, and why they worked. Quote the prompt if you have it.
3. Where you got it wrong: claims you invented or overstated, bad advice, wrong reads of a company, and what I changed afterwards.
4. Companies I ruled in or out: where the analysis changed my mind, and what in it did that.
5. Interview prep: what we did (briefs, mock questions, pushback, debriefs), and anything I told you later that showed up in a real interview.
6. Offers: the framework I wrote down, when I wrote it, and how it held up when the offers came (shape only).
7. Times I overrode you: where I pushed back, and who turned out to be right.

If you don't know something, say so; don't fill it in. Mark anything you're inferring and not remembering as "(inferred)".
```

Treat only untagged items as story material.

**From his brother:** the same summary from his own project, plus what
the Cowork jobs actually were: what he connected, the prompts he ran
(verbatim), what came back and what was wrong, what he changed, where
the tracker lived, what he did with Calendar, and whether he used
Manual or Auto (and whether anything nearly went out without him
sending it).
