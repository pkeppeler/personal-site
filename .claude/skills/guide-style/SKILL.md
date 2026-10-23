---
name: guide-style
description: 'Prose conventions for episodes of the "Becoming a Claude Power User" guide series under src/content/guides/: audience, voice, decay-tolerant instructions, copy-paste blocks, fact verification against VERIFIED.md, and the grilling attribution. Applies whenever writing, editing, or reviewing anything under that directory, including small edits to a published episode.'
---

# Guide style

The series design (episodes, personas, principles, scope) lives in
`CONTEXT.md` at the repo root. Read it before drafting a new episode;
this file does not restate it.

## Audience

Readers are capable professionals with zero AI-workflow expertise:
they run careers, teams, or businesses, but have never opened a
Claude settings menu. Write like they are learning a new instrument,
not like they are behind, and never condescend. Assume no prior
knowledge of projects, memory, models, or markdown; teach each
concept in the sentence where it first matters rather than assuming
the reader already has it.

## Voice

Episode 4 is a deliberate neutral-voice exception (see `CONTEXT.md`);
do not convert it to first person. PJ writing in first person to
people he knows, lightly. Provenance
stories are welcome (what happened when PJ said a specific line to a
specific friend); they're what make the guide feel written by a
person instead of a vendor. Dense but warm: no filler, no
corporate-guide neutrality. No em-dashes: they read as AI-generated,
so use commas, colons, periods, or parentheses instead.

## Decay-tolerant instructions

The product's UI changes faster than a published guide can be
updated, so a menu path that only says "click X" breaks silently the
day X moves. Every menu path needs the fallback in this exact shape:
"if it is not there, the app has moved it; ask Claude 'where do I
find X now?'". The audit prompt in Episode 1 carries this fallback
once, up front, for everything it walks through, so the individual
steps inside that prompt don't each repeat it. A page with many paths may do the same, stating the fallback once up front, as Episode 4 and Episode 1's checklist do.

## Copy-paste blocks

Anywhere the reader has to produce text (a prompt, an instructions
field, a preferences field), give it as a fenced `text` block so it
can be copied as written. Always pair it with "not sure what to
write? ask Claude to write it" plus one line showing what that ask
looks like, because a reader with zero AI-workflow expertise won't
otherwise discover that asking the tool to write its own input is an
option.

## Facts

Every product fact (a price, a model name, a setting name or
location, a plan feature) must match a row in
`docs/guides/claude/VERIFIED.md`. A fact with no row does not go in:
an unverified claim ages into a wrong one the reader has no way to
catch. Editing a published episode means re-verifying the rows it
relies on before touching prose, with web search against the sources
that file names, then updating the row's date. Don't carry a fact
forward from a prior draft or from memory; the product moves faster
than either.

## The grilling skill

It's Matt Pocock's work, not house style, so attribute it to him with
both links: https://www.aihero.dev/skills-grilling and
https://github.com/mattpocock/skills. Where the skill's own text
appears in an episode, quote it verbatim inside a fenced block and
never paraphrase it, since it's written as instructions for the
agent, not prose for the reader, and wrap the quote in a
plain-language explanation of what it does and why it works, since
the verbatim text alone won't land with someone who has never seen
an agent instruction before.

## Structure

Each episode must be readable in one sitting and useful on its own,
since a reader who lands on one episode without the others should
still get value from it. Title sections by the point they make, not
by the phase of the process, so a skimming reader gets the idea
without reading the paragraph underneath it. Any episode that changes
a setting ends with a skimmable checklist: that's the artifact a
reader keeps open next to the Claude settings screen while they work.

## Authorship

Episodes Claude drafts from PJ's spec carry `authorship: ai-drafted`
in frontmatter, so the badge on the page tells the reader whose words
they're reading, the same distinction CLAUDE.md draws for posts.
